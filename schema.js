import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

import { userType } from './types';

import User from './database';

let Schema = new GraphQLSchema({

  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

      hello: {
        type: GraphQLString,
        resolve: () => 'world'
      },

      user: {
        type: new GraphQLList(userType),
        args: {
          name: {
            name: 'name',
            type: GraphQLString
          }
        },
        resolve: (rootValue, {name}) => User.filter((user) => user.name === name)
      }
    }
  })
});

export default Schema;
