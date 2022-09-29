# Challenge 3: Deploy Microservices to Azure Container App via GitHub Actions

[Previous Challenge Solution](02-Azure-Container-Apps-solution.md) - **[Home](../README.md)** - [Next Challenge Solution](04-FrontDoor-solution.md)

## Task 1: Connect GitHub Actions to Azure

From the Azure CLI run the following code: 
```
az ad sp create-for-rbac `
  --name "FlightBookerSP"
  --role "contributor"
  --scopes "/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP" `
  --sdk-auth
```
For $SUBSCRIPTION_ID and $RESOURCE_GROUP use your respectable onese. 
Copy the JSON output for the next step.

## Task 2: Create credentials for Azure

To use Azure Credentials in GitHub Actions we need to create some secrets. In GitHub go to your repository and select "Settings", then "Secrets" and then "Actions". Create a "New Repository Secret".
Name it for example "FLIGHTBOOKER_AZURE_CREDENTIALS" and paste the copied JSON.

## Task 3: Create credentials for Azure Container Registry

To be able to build, push and pull images with GitHub actions you will also need a secret for the ACR username and passwod.

To get the username and password use the following command or look it up in the Azure Portal: <br <
`az acr credentials show -n $ACR-NAME`
<br>

Now create two more secrets like in Task 2, one named "FLIGHTBOOKER_REGISTRY_USERNAME" and the other "FLIGHTBOOKER_REGISTRY_PASSWORD" where you save the respective values. 

## Task 4: Create GitHub Action for Backend

Create a new folder at your project root called ".github/workflows". Then create a .yaml file for your Backend build and deploy GitHub Action:

```
name: flightbooker-backend deployment

# When this action will be executed
on:
  # Automatically trigger it when detected changes in repo
  push:
    branches: 
      [ main ]
    paths:
    - 'FlightBooker/flightbooker-backend/**'
    - '.github/workflows/build-deploy-backend.yaml'

  # Allow mannually trigger 
  workflow_dispatch:      

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout to the branch
        uses: actions/checkout@v2

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1

      - name: Log in to container registry
        uses: docker/login-action@v1
        with:
          registry: flightbooker.azurecr.io
          username: ${{ secrets.FLIGHTBOOKER_REGISTRY_USERNAME }}
          password: ${{ secrets.FLIGHTBOOKER_REGISTRY_PASSWORD }}

      - name: Build and push container image to registry
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: flightbookeracr.azurecr.io/flightbooker-backend:${{ github.sha }} , flightbookeracr.azurecr.io/flightbooker-backend:latest
          file: Flightbooker.Backend/Dockerfile
          context: ./.


  deploy:
    runs-on: ubuntu-latest
    needs: build
    
    steps:
      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: ${{ secrets.FLIGHTBOOKER_AZURE_CREDENTIALS }}


      - name: Deploy to containerapp
        uses: azure/CLI@v1
        with:
          inlineScript: |
            az config set extension.use_dynamic_install=yes_without_prompt
            az containerapp registry set -n flightbooker-backend -g flightbooker-rg --server flightbookeracr.azurecr.io --username  ${{ secrets.FLIGHTBOOKER_REGISTRY_USERNAME }} --password ${{ secrets.FLIGHTBOOKER_REGISTRY_PASSWORD }}
            az containerapp update -n flightbooker-backend-api -g flightbooker-rg --image flightbookeracr.azurecr.io/flightbooker-backend:${{ github.sha }}
```

## Task 5: Create GitHub Actions for Frontend

We need to create a similar file for the frontend:
```
name: flightbooker-frontend deployment

# When this action will be executed
on:
  # Automatically trigger it when detected changes in repo
  push:
    branches: 
      [ main ]
    paths:
    - 'Flightbooker/flightbooker-frontend/**'
    - '.github/workflows/build-deploy-frontend.yaml'

  # Allow mannually trigger 
  workflow_dispatch:      

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout to the branch
        uses: actions/checkout@v2

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1

      - name: Log in to container registry
        uses: docker/login-action@v1
        with:
          registry: flightbookeracr.azurecr.io
          username: ${{ secrets.FLIGHTBOOKER_REGISTRY_USERNAME }}
          password: ${{ secrets.FLIGHTBOOKER_REGISTRY_PASSWORD }}

      - name: Build and push container image to registry
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: flightbookeracr.azurecr.io/flightbooker-frontend:${{ github.sha }} , flightbookeracr.azurecr.io/flightbooker-frontend:latest
          file: Flightbooker.Frontend/Dockerfile
          context: ./.


  deploy:
    runs-on: ubuntu-latest
    needs: build
    
    steps:
      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: ${{ secrets.FLIGHTBOOKER_AZURE_CREDENTIALS }}


      - name: Deploy to containerapp
        uses: azure/CLI@v1
        with:
          inlineScript: |
            az config set extension.use_dynamic_install=yes_without_prompt
            az containerapp registry set -n flightbooker-frontend -g flightbooker-rg --server flightbookeracr.azurecr.io --username  ${{ secrets.FLIGHTBOOKER_REGISTRY_USERNAME }} --password ${{ secrets.FLIGHTBOOKER_REGISTRY_PASSWORD }}
            az containerapp update -n flightbooker-frontend-webapp -g tasks-tracker-rg --image flightbookeracr.azurecr.io/flightbooker-frontend:${{ github.sha }}
```

With this in place, you can commit your work and the GitHub action should be triggered, if all is configured correctly.  You should also be able to see the results in the GitHub Actions workflows tab as well and the Azure App Service should be updated with a new revision.
