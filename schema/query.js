import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

import { userType } from './types';
import Users from '../database.js';

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world'
    },
    users: {
      type: new GraphQLList(userType),
      args: {
        name: {
          name: 'name',
          type: GraphQLString
        }
      },
      resolve: (rootValue, {name} ) => Users.filter((user) => user.name === name)
    }
  }
});

export default Query;
