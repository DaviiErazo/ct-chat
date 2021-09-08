import { MutationResolvers } from "../../../../../Shared/domain/types";
import { ApolloServerContext } from "../../context";
import { CreateMessageCommand } from "../../../../application/Create/CreateMessageCommand";
import { GqlCreateMessagePresenter } from "../../../presenter/GqlCreateMessagePresenter";

export const createMessage: MutationResolvers<ApolloServerContext> = {
  createMessage: async (_parent, args, { commandBus, pubSub }) => {
    const createMessageCommand = new CreateMessageCommand(args.input);
    const presenter: GqlCreateMessagePresenter = await commandBus.dispatch(createMessageCommand);
    const response = presenter.getResponse();

    pubSub.publish(args.input.roomId, response);

    return response;
  },
};
