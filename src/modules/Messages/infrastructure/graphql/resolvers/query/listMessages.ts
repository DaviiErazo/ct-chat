import { QueryResolvers } from "../../../../../Shared/domain/types";
import { ApolloServerContext } from "../../context";
import { ListMessagesQuery } from "../../../../application/List/ListMessagesQuery";
import { GqlListMessagePresenter } from "../../../../infrastructure/presenter/GqlListMessagePresenter";

export const listMessages: QueryResolvers<ApolloServerContext> = {
  listMessages: async (_parent, args, { queryBus }) => {
    const command = new ListMessagesQuery(args.input);
    const presenter: GqlListMessagePresenter = await queryBus.ask(command);
    const response = presenter.getResponse();

    return response;
  },
};
