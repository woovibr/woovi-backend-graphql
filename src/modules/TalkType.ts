import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import UserType from "./UserType";

export const TalkType = new GraphQLObjectType({
  name: "Talk",
  fields: () => ({
    name: {
      type: GraphQLNonNull(GraphQLString),
      resolve: (obj) => obj.name,
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
      resolve: (obj) => obj.description,
    },
    speaker: {
      type: GraphQLNonNull(UserType),
      resolve: (obj) => obj.speaker,
    },
    host: {
      type: GraphQLNonNull(UserType),
      resolve: (obj) => obj.host,
    },
  }),
});

export default TalkType;
