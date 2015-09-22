import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

import { userType } from './types';
import db from '../database/index';

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
      resolve: async function(rootValue, {name} ){
        let id = await db.where('name', name).select('id').from('users');
            id = id[0].id
        let messages = await db.where('user_id', id).select('text', 'created_at').from('messages');
        return [{ id: id, name: name, messages: messages }];
      }
    }
  }
});

export default Query;
