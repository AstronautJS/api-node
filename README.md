# api-node
Project to College,  Collaborative JAM

## Install and Run
```bash
$ git clone https://github.com/AstronautJS/api-node.git
$ cd api-node
$ npm install
$ npm start
```

## Docker

### Configure
Open docker-compose.yml and change the volumes part (before the **:** symbol) to your local path, eg:

```yml
- C:\Blah\ProjectData:/data
```
or
```yml
- /home/someuser/projectdata:/data
```

### Run node and mongo containers
```bash
$ docker-compose up -d
```

### Stop, fetch image update and start again
```bash
$ docker-compose down
$ docker-compose pull
$ docker-compose up -d
```
