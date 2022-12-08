import { GraphQLNonNull, GraphQLObjectType, GraphQLInt } from "graphql";

export const LikeType = new GraphQLObjectType({
  name: "Like",
  fields: () => ({
    count: {
      type: GraphQLNonNull(GraphQLInt),
      resolve: (obj) => obj.count,
    },
  }),
});

export default LikeType;
