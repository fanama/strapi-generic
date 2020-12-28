# Strapi application

## Description

this is a template to make a react strapi app

## Prerequisites

for this to work you muste have nodejs and a database

## starting the project

1. clone the project
2. rename the file *config/database_to_copy.js* to *config/database.js*
   1. > cp config/database_to_copy.js config/strapi-generic/database.js
3. in *database.js* replace the values
4. install the dependencies
   1. > npm install
5. start the developpement
   1. > npm run develop
   2. > npm run front-dev
6. to build to production
   1. > npm run build
   2. > npm run front-build