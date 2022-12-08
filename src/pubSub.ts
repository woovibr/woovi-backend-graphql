import { PubSub } from 'graphql-subscriptions';

export const EVENTS = {
    LIKE: {
        NEW: 'LIKE_NEW',
    },
};

export default new PubSub();
