import { MessageCreatedResponse, SubscriptionResolvers } from "../../../../../Shared/domain/types";
import { ApolloServerContext } from "../../context";

export const messageCreated: SubscriptionResolvers<ApolloServerContext> = {
  messageCreated: {
    subscribe: (root: ApolloServerContext, args) => {
      return root.pubSub.asyncIterator([args.roomId])
    },
    resolve: (message: MessageCreatedResponse) => message,
  },
};
