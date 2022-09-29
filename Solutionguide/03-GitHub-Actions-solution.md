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

```

## Task 5: Create GitHub Actions for Frontend
