# Ledafilms CRM

The codebase for the Content Management Tool for Ledafilms. Built with `NextJS`.


## Instructions

In order to start the app, make sure to `npm install` all the dependencies first. Then, use `npm run dev` to run the application in a development environment. Use `npm run build` to build the application.

### Environment Variables

In order to connect to the database from a local environment, make sure to have the following local environment variables defined in a `.env.local` file: 

```
# enter the value after the equal sign, no quotes

PG_HOST=   # the url of the database
PG_USER=   # the username to access the postgres db
PG_DB=     # the name of the database, availsdb
PG_PW=     # password
PG_PORT=   # define the port to access the db
LEDA_URL=  # the url: either http://localhost:3000, or the production url
```



