import { QueryResolvers, Room } from "../../../../../Shared/domain/types";

import { ApolloServerContext } from "../../context";
import { SearchRoomsByCriteriaQuery } from "../../../../application/SearchByCriteria/SearchRoomsByCriteriaQuery";
import { parseFilters } from "../../../../../Shared/domain/ParseFilters";
import { FilterType } from "../../../../../Shared/domain/FilterType";

export const listRooms: QueryResolvers<ApolloServerContext> = {
  listRooms: async (_parent, args, { queryBus }) => {
    let rooms: Room[];
    const { filters, orderBy, order, limit, offset } = args.query;

    const query = new SearchRoomsByCriteriaQuery(
      parseFilters(filters as Array<FilterType>),
      orderBy as string,
      order as string,
      limit ? Number(limit) : undefined,
      offset ? Number(offset) : undefined
    );

    rooms = await queryBus.ask(query);

    return { items: rooms };
  },
};
