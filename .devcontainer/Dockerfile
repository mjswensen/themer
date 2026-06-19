FROM node:24

RUN apt-get update && apt-get install -y sudo && rm -rf /var/lib/apt/lists/*
RUN usermod -aG sudo node && \
  echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node
