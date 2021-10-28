# Getting Started 

## Create Dockerfile with node image
FROM node:16-alpine

## Build the image from the Dockerfile
docker build -t bb-image .

## Spin up container based on image
### -d flag runs the container in the background (detached mode)
docker run -d --name bb-client bb-image

## Port forwarding
**docker run -d -p localport:containerport --name containername imagename**

docker run -d -p 3000:3000 --name bb-client bb-image

<!-- ## Use docker compose
docker-compose up -->

## Browser
open localhost:3000 in browser window

## Create volume
### mounts local directory to container's working directory to apply changes without restarting
**docker run -v {localdirectory:containerdirectory} -d -p localport:containerport --name bb-client bb-image**

docker run -v $(pwd)/src:/app/src -d -p 3000:3000 --name bb-client bb-image

### add `:ro` flag to make volume read only - container cannot make changes to local directory
docker run -v $(pwd)/src:/app/src:ro -d -p 3000:3000 --name bb-client bb-image


## Environment Variables
1. Dockerfile ENV {VARIABLENAME}={variableValue}
2. Rebuild image
3. run container

### overrides
docker run -e {VARIABLENAME}={variableValue} -v $(pwd)/src:/app/src -d -p 3000:3000 --name bb-client bb-image

### .env file
1. touch .env
2. paste env variables
3. docker run --env-file ./.env -v $(pwd)/src:/app/src:ro -d -p 3000:3000 --name bb-client bb-image


## Docker Compose
docker-compose up -d

### to rebuild stale image
docker-compse up -d --build
