import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import packageJson from "../../package.json";
import { GraphQLContext } from "../types";
import UserType from "../modules/UserType";
import TalkType from "../modules/TalkType";

const { version } = packageJson;

const host = {
  id: "1",
  name: "Daniel Cavalcante",
};

const speaker = {
  id: "2",
  name: "Danilo Assis",
};

const users = [speaker, host];

const talk = {
  id: "1",
  name: "GraphQL - Real World",
  description: "Meetup Paraiba Js",
  speaker: {
    ...speaker,
  },
  host: {
    ...host,
  },
};

const talks = [talk];

export const QueryType = new GraphQLObjectType<
  Record<string, unknown>,
  GraphQLContext
>({
  name: "Query",
  fields: () => ({
    version: {
      type: GraphQLString,
      resolve: () => version,
    },
    me: {
      type: UserType,
      resolve: () => ({
        ...speaker,
      }),
    },
    users: {
      type: GraphQLList(UserType),
      resolve: (_) => {
        return users;
      },
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (_, args) => {
        const user = users.find((user) => user.id === args.id);

        return {
          ...user,
        };
      },
    },
    talks: {
      type: GraphQLList(TalkType),
      resolve: (_) => {
        return talks;
      },
    },
    talk: {
      type: TalkType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (_, args) => {
        const talk = talks.find((talk) => talk.id === args.id);

        return {
          ...talk,
        };
      },
    },
  }),
});
