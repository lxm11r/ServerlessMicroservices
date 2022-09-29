# Challenge 2: Deploy Microservices to Azure Container App

You can create a container app with the Azure portal or with the Azure CLI. For the CLI use:

```
az containerapp create `
  --name my-container-app `
  --resource-group $RESOURCE_GROUP
  --environment $CONTAINERAPPS_ENVIRONMENT
  --image 
  --target-port 80`
  --ingress 'external' `
  --query properties.configruation.ingress.fqdn
```

## Task 1: Create Container Apps for each microservice

## Task 2: Pull images from ACR

## Task 3: Setup basic Security
