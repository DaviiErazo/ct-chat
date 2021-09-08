import { MutationResolvers } from "../../../../../Shared/domain/types";
import { ApolloServerContext } from "../../context";
import { DeleteRoomCommand } from "../../../../application/Delete/DeleteRoomCommand";
import { GqlDeleteRoomPresenter } from "../../../../infrastructure/presenter/GqlDeleteRoomPresenter";

export const deleteRoom: MutationResolvers<ApolloServerContext> = {
  deleteRoom: async (_parent, args, { commandBus }) => {
    const deleteRoomCommand = new DeleteRoomCommand(args);
    const presenter: GqlDeleteRoomPresenter = await commandBus.dispatch(deleteRoomCommand);
    const response = presenter.getResponse();

    return response;
  },
};
