import {GraphQLObjectType, GraphQLString} from 'graphql';
import {userType, messageType} from './types';
import {resolvePostMessage, resolveCreateUser} from './resolver';

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
      resolve: resolveCreateUser
    },
    postMessage: {
      type: messageType,
      args: {
        name: {
          name: 'name',
          type: GraphQLString
        },
        text: {
          name: 'text',
          type: GraphQLString
        }
      },
      resolve: resolvePostMessage
    }
  }
});

export default Mutation;
