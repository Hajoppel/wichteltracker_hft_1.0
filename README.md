# wichtel-tracker
Manages the Weihnachtswichtel christmas process of the Happel Family.

It consists of multiple components:
- A frontend written in Angular. 
- A backend using Node.js.
- A MYSQL Database.
- Various management scripts.


## 🚶 Setting up local dev environment

### 0. Login to canister container registry
```
docker login cloud.canister.io:5000
```

### 1. Start docker compose

This starts the backend and mysql database in detached mode.
```
docker-compose up -d
```

### 2. Initialize the database

First adapt the db password according to the .env file
To do this run the statements in the scripts/db-init.sql file
```
mysql -h 127.0.0.1 -uroot -p wichtel <scripts/db-init.sql
(enter pw from .env file)
```

### 3. Pick which component to work on

#### Webapp
```
cd webapp
npm install
npm run start
```

#### Backend
```
cd backend
docker stop wichtel-tracker_web_1
DB_PW=<see .env> HOST=localhost npm run start
```
TODO: fix cors errors for local dev

#### Scripts
Currently, there is one python script to trigger the mail sending of the wichtel matches

## 🏃 Deploy on prod environment

1. Clone git repository
2. Modify .env file with prod credentials 
3. follow docker-compose setup above

## 🔨 Build the project

### Build
```
docker build -t cloud.canister.io:5000/nixrod/wichtel-backend .
```

### Push to container registry
```
docker push cloud.canister.io:5000/nixrod/wichtel-backend
```
