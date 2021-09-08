import { MutationResolvers } from "../../../../../Shared/domain/types";
import { ApolloServerContext } from "../../context";
import { DeleteMessageCommand } from "../../../../application/Delete/DeleteMessageCommand";
import { GqlDeleteMessagePresenter } from "../../../presenter/GqlDeleteMessagePresenter";

export const deleteMessage: MutationResolvers<ApolloServerContext> = {
  deleteMessage: async (_parent, args, { commandBus }) => {
    const deleteMessageCommand = new DeleteMessageCommand(args);
    const presenter: GqlDeleteMessagePresenter = await commandBus.dispatch(deleteMessageCommand);
    const response = presenter.getResponse();

    return response;
  },
};
