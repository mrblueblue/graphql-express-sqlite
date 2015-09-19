import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql';

let count = 0;

let Schema = new GraphQLSchema({
  
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: () => {
          return count
        }
      }
    }
  }),

  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateCount: {
        type: GraphQLInt,
        description: 'Updates the count',
        resolve: function() {
          count += 1;
          return count;
        }
      }
    }
  })

});

export default Schema;
