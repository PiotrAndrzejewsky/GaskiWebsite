#!/bin/bash

docker network create mynetwork

# Commands to clear containers
#docker stop gaski-website
#docker rm gaski-website
#docker stop nginx-proxy
#docker rm nging-proxy

# Build the Docker image
docker build -t gaski-website .
# Uncomment the above line to build the Docker image

# Run the Docker container
docker run -p 4200:4200 -d --name gaski-website --network mynetwork gaski-website
docker run -d --name nginx-proxy --network mynetwork -p 8080:80 -p 443:443 -v /etc/nginx/nginx.conf:/etc/nginx/nginx.conf nginx
