import { GraphQLSchema } from "graphql";

import { MutationType } from "./MutationType";
import { QueryType } from "./QueryType";
import SubscriptionType from "./SubscriptionType";

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  subscription: SubscriptionType,
});
