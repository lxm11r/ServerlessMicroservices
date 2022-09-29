# Challenge 1: Build and push Microservice Images locally

[Previous Challenge] (./00-Getting-started.md) - **[Home](../README.md)** - **[Next Challenge](./02-Azure-Container-Apps.md)**

## Introduction

In this Repository we have provided the code for the example application for an airline booking service as described in Challenge 0. <<link>>
To later be able to deploy them in Container Apps we first have to build Images of each microservice via docker. 
APIs are an important part of communication between the microservices. If you want to challenge yourself a little more, you are free to code them yourself, otherwise they are also provided in this repository.

## Challenge

* Optionally: Communication between frontend and backend
* Create docker images of the microservices
* Push the images to your ACR
* Bookings are stored in database (?)

## Success Criteria

* Application runs locally
* Images are pushed to the ACR
* Images can be pulled from the ACR

## Learning Resources
* Push to Container Registries: https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli?tabs=azure-cli 
