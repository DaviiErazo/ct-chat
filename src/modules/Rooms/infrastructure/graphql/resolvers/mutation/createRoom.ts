import { MutationResolvers } from "../../../../../Shared/domain/types";
import { ApolloServerContext } from "../../context";
import { CreateRoomCommand } from "../../../../application/Create/CreateRoomCommand";
import { GqlCreateRoomPresenter } from "../../../../infrastructure/presenter/GqlCreateRoomPresenter";

export const createRoom: MutationResolvers<ApolloServerContext> = {
  createRoom: async (_parent, args, { commandBus }) => {
    const createRoomCommand = new CreateRoomCommand(args.input);
    const presenter: GqlCreateRoomPresenter = await commandBus.dispatch(createRoomCommand);
    const response = presenter.getResponse();

    return response;
  },
};
