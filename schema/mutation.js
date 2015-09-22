import { GraphQLObjectType, GraphQLString } from 'graphql';

import { userType } from './types';
import Users from '../database.js';
import shortid from 'shortid'

const Mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createUser: {
      type: userType,
      args: {
        name: {
          name: 'name',
          type: GraphQLString
        }
      },
      resolve: (rootValue, {name}) => {
        let newUser = {
          id: shortid.generate(),
          name: name,
          messages: []
        }

        Users.push(newUser);
        return newUser;
      }
    }
  }
});

export default Mutation;
