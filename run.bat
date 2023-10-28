@echo off

:: Build the Docker image
@REM docker build -t gaski-website .

:: Run the Docker container
docker run -p 4200:4200 -d --name gaski-website gaski-website
