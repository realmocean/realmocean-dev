pwd
ls -ll
cd /install/data
pwd
ls -ll

docker-compose down
docker-compose up -d

cd /install

docker cp  ./app  realmocean:/usr/src/code

cd /install/data
docker-compose restart