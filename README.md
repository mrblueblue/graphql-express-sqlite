# express-graphql-example

## Getting Started

```bash
npm start
```

## Examples

Query all of Bob's messages:

```bash
curl -XPOST -H 'Content-Type:application/graphql' \
-d 'query RootQueryType { users(name: "Bob"){ messages{text} } }' \
http://localhost:3000/graphql
```

Query Tim's user id:

```bash
curl -XPOST -H 'Content-Type:application/graphql' \
-d 'query RootQueryType { users(name: "Tim"){id} }' \
http://localhost:3000/graphql
```

Create a new user named Kerry:

```bash
curl -XPOST -H 'Content-Type:application/graphql' \
-d 'mutation M { createUser(name: "Kerry") { name } }' \
http://localhost:3000/graphql
```

Post a new message from Kerry

```bash

curl -XPOST -H 'Content-Type:application/graphql' \
-d 'mutation M { postMessage(name: "Kerry", text: "Hello I am Kerry") { text } }' \
http://localhost:3000/graphql
```
