# Challenge 2: Deploy Microservices to Azure Container Apps

## Introduction

Since our images are now push- and pullable from our registry and the environment is set up, we can deploy our microservices to Azure. As described in the intro, we will be using Azure Container Apps. The Azure Container Apps service enables you to run microservices and containerized applications on a serverless platform. With Container Apps, you enjoy the benefits of running containers while you leave behind the concerns of manually configuring cloud infrastructure and complex container orchestrators.
We also want to enable Dapr in our Azure Container Apps, so we can use it for Service to Service invocation between Frontend and Backend, State Store Managment of the Database and Pub/Sub between the publishing Web API-Backend and the subscribing Processor Backend.

## Challenge

* Create Container Apps for each microservice 
* West Europe as region
* Part of our Container App environment
* Images are pulled from the ACR
* Basic Security is set up (?)

## Success Criteria

* All Services are deployed in the environment
* The frontend is accessible under public DNS and/or IP
* If you choose and book seats you'll get a confirmation: <<image>>
* Booked seats are saved in the database
* Backend is not reachable publicly

#### Learning Resources
* Benefits of Container Apps: https://docs.microsoft.com/en-us/azure/container-apps/compare-options 
* dapr: https://docs.dapr.io/concepts/overview/ 
