import { GraphQLObjectType } from "graphql";
import LikeType from "./LikeType";
import pubSub, {EVENTS} from "../pubSub";

const LikeNewPayload = new GraphQLObjectType({
  name: "LikeNewPayload",
  fields: () => ({
    like: {
      type: LikeType,
      resolve: (obj) => obj.like,
    },
  }),
});

const LikeNewSubscription = {
  name: "LikeNew",
  type: LikeNewPayload,
  args: {},
  // eslint-disable-next-line
  subscribe: (input, context) => {
    return pubSub.asyncIterator(EVENTS.LIKE.NEW);
  },
  resolve: (obj) => {
    return {
      id: obj.like.id,
    }
  },
};

export default LikeNewSubscription;
