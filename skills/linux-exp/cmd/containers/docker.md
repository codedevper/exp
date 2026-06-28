## docker
sudo docker run <image> -- run a container
sudo docker run -d <image> -- run detached
sudo docker run -it <image> -- run interactive with TTY
sudo docker run -p <host>:<container> <image> -- port mapping
sudo docker run -v <host>:<container> <image> -- volume mount
sudo docker run --name <name> <image> -- assign name
sudo docker ps -- list running containers
sudo docker ps -a -- list all containers
sudo docker stop <container> -- stop a container
sudo docker start <container> -- start a container
sudo docker restart <container> -- restart a container
sudo docker rm <container> -- remove a container
sudo docker images -- list images
sudo docker pull <image> -- pull an image
sudo docker rmi <image> -- remove an image
sudo docker exec -it <container> <cmd> -- run command in container
sudo docker logs <container> -- view container logs
sudo docker logs -f <container> -- follow container logs
sudo docker info -- show system-wide info
sudo docker system prune -- clean up unused resources
