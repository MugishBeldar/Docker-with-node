# Docker commads

1. Build docker image

```bash
sudo docker build .
```

2. Listout docker images

```bash
sudo docker images
sudo docker image ls
```

3. Build docker image with name

```bash
sudo docker build -t <name>
```

4. Make container with name and run it with detached mode

```bash
sudo docker run -d --name <containerName> <imageName>
```

5. List all running containers

```bash
sudo docker ps
```

6. List all running containers and stopped containers

```bash
sudo docker ps -a
```

7. Delete docker container

```bash
sudo docker rm <containerName> -f
```

8. Forword docker cotntainer traffic to local machine

```bash
sudo docker run -p <localPort>:<dockerPort> -d --name <containerName> <imageName>
```

9. Intractive mode with container

```bash
sudo docker exec -it <containerName> bash
```

> Maked dockerignore file

10. Sync local files with docker container using volume call bind mount volume

```bash
sudo docker run -d -v <pathToLocalFile>:</pathOnContainer> -p <localPort>:<dockerPort> --name <containerName> <imageName>
```

11. Don't sync node_modules in bind mount volume (not work propperly need to review)

```bash
sudo docker run -d -v <pathToLocalFile>:/<pathOnContainer> -v /app/node_modules -p <localPort>:<dockerPort> --name <containerName> <imageName>
```

12. Make read only container

```bash
sudo docker run -d -v <pathToLocalFile>:/<pathOnContainer>:ro -v /app/node_modules -p <localPort>:<dockerPort> --name <containerName> <imageName>
```

13. Make container with environment variables

```bash
sudo docker run -d -v <pathToLocalFile>:/<pathOnContainer>:ro --env PORT=4000 -p <localPort>:4000 --name <containerName> <imageName>
```

14. Make container with environment file

```bash
sudo docker run -d -v <pathToLocalFile>:/<pathOnContainer>:ro --env-file ./.env -p <localPort>:4000 --name <containerName> <imageName>
```

15. List of all volumes

```bash
sudo docker volume ls
```

14. Delete docker volume

```bash
sudo docker volume rm <volumeName>
sudo docker volume prune
```

15. Delete container with docker volume

```bash
sudo docker rm <containerName> -fv
```

> Maked docker compose file

16. Run docker compose file

```bash
sudo docker-compose up -d
```

17. Down all containers which is created by yml file

```bash
sudo docker-compose down
```

18. After modify dockerfile then we have to build image again

```bash
sudo docker-compose --build
```

### Shared compose file for dev and prod fileName ===> docker-compose.yml

- shared comfiguration for both dev. env. and prod. env.

### Compose file commands for development fileName ===> docker-compose.dev.yml

- volume require for sync

19. To run compose file in development environment

```bash
sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

20. To delete compose file container with volumes

```bash
sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
```

### Comporse file commands for production fileName ===> docker-compose.prod.yml

- volume not require for sync

21. To run compose file in production environment (it will not build image if there is present in cache)

```bash
sudo docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

21. To run compose file in production environment (for build image in production)

```bash
sudo docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```

22. To delete compose file container with volumes

```bash
sudo docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v
```

### Working with multiple containers

- Edit in docker-compose.yml file.
- run docker compose file.
- iteracation with mongo inside container mongosh command with user name and password.
- without monog volume it will not persist data when container is rebuild to handle this we have to make a volume in compose file.
- Docker network used for mongo connection uri

23. Access all networks

```bash
sudo docker network ls
```

24. Access docker network for specific container

```bash
sudo docker network inspect <network name>
```

### Working with nginx and how to scale your node application

25. Scale your node application use --scale flag

```bash
sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale node-app=2
```

<!-- ################################################################################ -->

### Loing in docker hub through cli using username and pat

```bash
sudo docker login -u mugishbeldar
password: <inter your password or pat (pat is generated from docker hub account settings)>
```

<!-- ################################################################################ -->
