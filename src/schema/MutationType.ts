import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import UserType from "../modules/UserType";

const CreateUserInputType = new GraphQLInputObjectType({
  name: "CreateUserInput",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
  }),
});

const CreateUserPayloadType = new GraphQLObjectType({
  name: "CreateUserPayload",
  fields: () => ({
    user: {
      type: UserType,
    },
  }),
});

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    CreateUser: {
      type: CreateUserPayloadType,
      description: "Create a new user",
      args: {
        input: {
          type: CreateUserInputType,
        },
      },
      resolve: (_, args) => {
        return {
          user: {
            name: args.input.name,
          },
        };
      },
    },
  }),
});
