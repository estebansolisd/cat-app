# Cat App 🐱😼🐱

## *Traditional enviroment*

### Requirements

- Backend: [Xamp](https://www.apachefriends.org/es/download.html) PHP 7.4, Phpmyadmin
- Frontend: [Node](https://nodejs.org/es/) Node.js and npm to execute the front end

### Initializing the project

- Backend
    - Install Xamp
    - Go to phpmyadmin and make a database called `vet`
    - In the backend folder run `composer install`
    - Copy .env.example to .env and make sure you have the same credentials of the created database, `root` and the password `123456` (this is only for development porpuses)
    - Run php artisan key:generate
    - Run php artisan migrate
    - Run php artisan db:seed
    - Run php artisan serve
    - Go to localhost:8000 and you should ready to go
- Frontend
    - Install node
    - In the frontend folder run `npm install && npm start`
    - Specify the backend_url in the .env
    - Go to localhost:3000 and you should ready to go

## *Docker enviroment*

### Requirements
- [Docker](https://docs.docker.com/engine/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)

### Initializing the project

- Backend
    - Go to backend container
    - Run `composer install`
    - Copy .env.example to .env and make sure you have the same credentials of the created database, `root` and the password `123456` (this is only for development porpuses)
    - Run php artisan key:generate
    - Run php artisan migrate
    - Run php artisan db:seed
    - Go to localhost in your machine and you should ready to go

- Frontend
    - Add backend url to your `.env` file 
    - Go to localhost:3000 in your machine and you should ready to go

## *Testing*
- Frontend
Just run `npm test` in the frontend folder or container

- Backend
Just run `./vendor/bin/phpunit` in the backend folder or container

