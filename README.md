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

Create a new user named Kyle:

```bash
curl -XPOST -H 'Content-Type:application/graphql' \
-d 'mutation M { createUser(name: "Kyle") { name, id } }' \
http://localhost:3000/graphql
```