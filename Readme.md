## run standalone
```console
sudo apt install npm
npm install
npm start
```

## run using docker

Build the Docker image:

```console
sudo docker build -t mqtt-client .
```
Run the Docker container:

```console
sudo docker run --rm -it mqtt-client
```


