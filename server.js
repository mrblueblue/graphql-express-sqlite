import express from 'express';
import graphqlHTTP from 'express-graphql';
import Schema from './schema';
import db from './database';

const app = express();
let { log } = console;

app.use('/graphql', graphqlHTTP({ schema: Schema, pretty: true }));

const server = app.listen(3000, () => {
  let { address, port } = server.address();
  log(`graphql server listening at ${address} on port ${port}`);
});
