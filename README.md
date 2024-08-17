# Welcome to Flights Service

## Project Setup
- clone the project on your local.
- Executr "npm install" on the same path as of your root directory of the downloaded project.
- Create a ".env" file in the root directory and add the following environment variables
-"PORT=3000".
- inside the "src/config" folder create a new "config.json" and then add the following code:.
...
- {
- Executr "npm install" on the same path as of your root directory of the downloaded project.
- Create a ".env" file in the root directory and add the following environment variables
- "PORT=3000".
- inside the "src/config" folder create a new "config.json" and then add the following code:.
...
- {
  "development": {
    "username": "<Your_DB_login_id>",
    "password": <your_DB_PASSWORD>,
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
...
- once you've added your db config as listed above,go to the src folder from your terminal and execute 'npx sequelize db:create' and then execute
"npx sequelize db:migrate"
...


## DB Design
- Airplane Table
- Flight Table
- Airport Table
- City Table

- A flight belongs to an airplane can be used in multiple flights.
- A city has many airports belomgs to a city.
- One airport can have many flights , but a flight belongs to one airport
