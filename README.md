# ArXiv Explorer Web Service

## Getting started

```
git clone git@github.com:kkacquah/arxiv-explorer-web-service.git
cd search-query-resolver
npm install
npm test
npm start
```

## DDD and Clean Architecture

The application follows the Uncle Bob "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" principles and project structure. The structure of this project is forked from [jbuget's Hapi.js API following Clean Architecture principles](https://github.com/jbuget/nodejs-clean-architecture-app). Please consult that repo for more information about creating "Clean Architecture" microservices in Node.js.

### Clean Architecture layers

![Schema of flow of Clean Architecture](/doc/Uncle_Bob_Clean_Architecture.jpg)

### Project anatomy

```
app 
 └ lib                              → Application sources 
    └ application_business_rules    → Application services layer
       └ repositories               → Data access objects interfaces (unfortunately, there is no Interface pattern in JavaScript)
       └ use_cases                  → Application business rules 
    └ enterprise_business_rules     → Enterprise core business layer
       └ models                     → Domain model objects such as Entities, Aggregates, Value Objects, Business Events, etc.
       └ services                   → Domain services, e.g. business objects that manipulate multiple and different Domain Models
    └ frameworks_drivers            → Frameworks, drivers and tools such as Database, the Web Framework, mailing/logging/glue code etc.
       └ queryResolver              → ArXiv Explorer Query Resolver connection object
       └ webserver                  → Hapi.js Web server configuration (server, routes, plugins, etc.)
          └ server.js               → Hapi.js server definition
    └ interface_adapters            → Adapters and formatters for use cases and entities to external agency such as Database or the Web
       └ controllers                → Hapi.js route handlers
       └ queryResolver              → queryReolver implementations
 └ node_modules (generated)         → NPM dependencies
 └ test                             → Source folder for unit or functional tests
 └ index.js                         → Main application entry point
```

### Flow of Control

![Schema of flow of Control](/doc/arxiv-explorer-flow-of-control.png)

