# Exercise 0: Set up the Environment

## Task 1: Set up an Azure Container Registry with admin account

To create a Container Registry there are multiple options like the Azure portal or the Azure CLI. To do it with the CLI use the following code:

```
az acr create `
  --resource-group $RESOURCE_GROUP `
  --name $ACR_NAME `
  --sku Basic `
  --admin-enabled true
```
The Resource Group and Container Registry name are global variables, you should set in advance or replace here with the actual names. with the 
`--sku Basic`
you are setting the basic permission concept.

If you'd like to do it with the Azure Portal (or any other way) you can find a tutorial [here](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal?tabs=azure-cli).

## Task 2: Create a Container App environment for multiple container apps in West Europe Region

A Container App Environment like the Container Registry can be setup in several ways. Using the azure CLI it would be:

```
az containterapp env create `
  --name $ENVIRONMENT `
  --resource-group $RESOURCE_GROUP`
  --loctation "westeurope"
```

## Task 3: Create a Database

You can find a solution to setup a Cosmos DB in azure [here](https://learn.microsoft.com/en-us/azure/cosmos-db/sql/create-cosmosdb-resources-portal).
