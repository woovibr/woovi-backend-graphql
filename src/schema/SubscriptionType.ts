import { GraphQLObjectType } from "graphql";

import LikeNew from "../modules/LikeNewSubscription";

const SubscriptionType = new GraphQLObjectType({
  name: "Subscription",
  fields: {
    LikeNew: LikeNew as any,
  },
});

export default SubscriptionType;
