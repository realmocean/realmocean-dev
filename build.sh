# docker build --no-cache --tag realmocean/install:latest .
docker buildx build --platform linux/amd64,linux/arm64 -t realmocean/install:latest --push .