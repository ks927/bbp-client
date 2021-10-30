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

# Production deploy
1. Rename Dockerfile Dockerfile.dev
2. Modify docker-compose.yml to build from Dockerfile.dev
3. Create Dockerfile.prod
4. Change CMD to RUN npm run build (creates build folder for production)
5. Append FROM nginx config
    - nginx creates container _from_ the build directory into /usr/shared/nginx/html dir

## Build prod image 
** -f is the file flag... specifies the dockerfile to use**
`docker build -f Dockerfile.prod -t bb-image-prod .`

## Deploy container
**nginx runs on port 80**
**remove bind mount**

docker run --env-file ./.env -d -p 8080:80 --name bb-client-prod bb-image-prod

## Docker Compose
### dev
1. Create docker-compose-dev.yml and docker-compose-prod.yml 
2. Common instructions stay in docker-compose.yml while env specific instructions are split
3. docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

### Docker Compose Down
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

### prod
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build






