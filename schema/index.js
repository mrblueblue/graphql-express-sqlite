import { GraphQLSchema } from 'graphql';

import Query from './query';
import Mutation from './mutation';

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
