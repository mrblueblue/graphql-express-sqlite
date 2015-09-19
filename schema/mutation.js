import { GraphQLObjectType, GraphQLString } from 'graphql';

import { userType } from './types';
import Users from '../database';
import shortid from 'shortid'

export default new GraphQLObjectType({
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
})
