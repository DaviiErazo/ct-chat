import { QueryHandler } from "../../../Shared/domain/QueryHandler";
import { Query } from "../../../Shared/domain/Query";
import { RoomsByCriteriaSearcher } from "./RoomsByCriteriaSearcher";
import { SearchRoomsByCriteriaQuery } from "./SearchRoomsByCriteriaQuery";
import { Room } from "../../infrastructure/persistence/typeorm/entity/Room";

export class SearchRoomsByCriteriaQueryHandler implements QueryHandler<SearchRoomsByCriteriaQuery, Room[]> {
  constructor(private searcher: RoomsByCriteriaSearcher) {}

  subscribedTo(): Query {
    return SearchRoomsByCriteriaQuery.name;
  }

  handle(query: SearchRoomsByCriteriaQuery): Promise<Room[]> {
    return this.searcher.run(query);
  }
}
