sudo docker pull localhost:5000/frontend
sudo docker tag localhost:5000/frontend frontend

sudo docker rm -f frontend

sudo docker run \
        --restart=always \
        -itd \
        --name frontend \
        -p 80:80 \
        frontend
