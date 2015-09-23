import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql';
import {userType} from './types';
import {resolveUsers} from './resolver';

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
      resolve: resolveUsers
    }
  }
});

export default Query;
