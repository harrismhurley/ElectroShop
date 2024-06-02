# ElectroShop


## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
```

## Getting Started


You’ll need to use the [pg](https://node-postgres.com/) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a PostgreSQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

Use the `schema.sql` file in the `db` folder to create your database with PostgreSQL shell commands. Use environment variables to store sensitive data like your PostgreSQL username, password, and database name.




### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the PostgreSQL database on server start.
