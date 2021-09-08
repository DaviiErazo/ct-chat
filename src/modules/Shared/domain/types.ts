import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type CreateMessageRequest = {
  content: Scalars['String'];
  roomId: Scalars['String'];
};

export type CreateMessageResponse = {
  __typename?: 'CreateMessageResponse';
  message?: Maybe<Message>;
};

export type CreateRoomRequest = {
  name: Scalars['String'];
};

export type CreateRoomResponse = {
  __typename?: 'CreateRoomResponse';
  room?: Maybe<Room>;
};

export type DeleteMessageResponse = {
  __typename?: 'DeleteMessageResponse';
  message?: Maybe<Message>;
};

export type DeleteRoomResponse = {
  __typename?: 'DeleteRoomResponse';
  room?: Maybe<Room>;
};

export type ListMessageResponse = {
  __typename?: 'ListMessageResponse';
  messages?: Maybe<Array<Maybe<Message>>>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  roomId: Scalars['String'];
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageCreatedResponse = {
  __typename?: 'MessageCreatedResponse';
  message?: Maybe<Message>;
};

export type ModelMessageFilterInput = {
  sortDirection: ModelSortDirection;
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export type ModelRoomConnection = {
  __typename?: 'ModelRoomConnection';
  items?: Maybe<Array<Maybe<Room>>>;
};

export type ModelRoomFilterInput = {
  field?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Mutation = {
  __typename?: 'Mutation';
  createMessage?: Maybe<CreateMessageResponse>;
  createRoom?: Maybe<CreateRoomResponse>;
  deleteMessage?: Maybe<DeleteMessageResponse>;
  deleteRoom?: Maybe<DeleteRoomResponse>;
};


export type MutationCreateMessageArgs = {
  input?: Maybe<CreateMessageRequest>;
};


export type MutationCreateRoomArgs = {
  input?: Maybe<CreateRoomRequest>;
};


export type MutationDeleteMessageArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRoomArgs = {
  id: Scalars['String'];
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  __typename?: 'Query';
  listMessages?: Maybe<ListMessageResponse>;
  listRooms?: Maybe<ModelRoomConnection>;
};


export type QueryListMessagesArgs = {
  input: ModelMessageFilterInput;
};


export type QueryListRoomsArgs = {
  query?: Maybe<QueryModelRoom>;
};

export type QueryModelRoom = {
  filters?: Maybe<Array<Maybe<ModelRoomFilterInput>>>;
  orderBy?: Maybe<OrderBy>;
  order?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageCreated: MessageCreatedResponse;
};


export type SubscriptionMessageCreatedArgs = {
  roomId: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  CreateMessageRequest: CreateMessageRequest;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateMessageResponse: ResolverTypeWrapper<CreateMessageResponse>;
  CreateRoomRequest: CreateRoomRequest;
  CreateRoomResponse: ResolverTypeWrapper<CreateRoomResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteMessageResponse: ResolverTypeWrapper<DeleteMessageResponse>;
  DeleteRoomResponse: ResolverTypeWrapper<DeleteRoomResponse>;
  ListMessageResponse: ResolverTypeWrapper<ListMessageResponse>;
  Message: ResolverTypeWrapper<Message>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  MessageCreatedResponse: ResolverTypeWrapper<MessageCreatedResponse>;
  ModelMessageFilterInput: ModelMessageFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ModelRoomConnection: ResolverTypeWrapper<ModelRoomConnection>;
  ModelRoomFilterInput: ModelRoomFilterInput;
  ModelSortDirection: ModelSortDirection;
  Mutation: ResolverTypeWrapper<{}>;
  OrderBy: OrderBy;
  Query: ResolverTypeWrapper<{}>;
  QueryModelRoom: QueryModelRoom;
  Room: ResolverTypeWrapper<Room>;
  Subscription: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  CreateMessageRequest: CreateMessageRequest;
  String: Scalars['String'];
  CreateMessageResponse: CreateMessageResponse;
  CreateRoomRequest: CreateRoomRequest;
  CreateRoomResponse: CreateRoomResponse;
  DateTime: Scalars['DateTime'];
  DeleteMessageResponse: DeleteMessageResponse;
  DeleteRoomResponse: DeleteRoomResponse;
  ListMessageResponse: ListMessageResponse;
  Message: Message;
  ID: Scalars['ID'];
  MessageCreatedResponse: MessageCreatedResponse;
  ModelMessageFilterInput: ModelMessageFilterInput;
  Int: Scalars['Int'];
  ModelRoomConnection: ModelRoomConnection;
  ModelRoomFilterInput: ModelRoomFilterInput;
  Mutation: {};
  Query: {};
  QueryModelRoom: QueryModelRoom;
  Room: Room;
  Subscription: {};
  Boolean: Scalars['Boolean'];
}>;

export type CreateMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateMessageResponse'] = ResolversParentTypes['CreateMessageResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateRoomResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateRoomResponse'] = ResolversParentTypes['CreateRoomResponse']> = ResolversObject<{
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteMessageResponse'] = ResolversParentTypes['DeleteMessageResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteRoomResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteRoomResponse'] = ResolversParentTypes['DeleteRoomResponse']> = ResolversObject<{
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ListMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListMessageResponse'] = ResolversParentTypes['ListMessageResponse']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  roomId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageCreatedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageCreatedResponse'] = ResolversParentTypes['MessageCreatedResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ModelRoomConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModelRoomConnection'] = ResolversParentTypes['ModelRoomConnection']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createMessage?: Resolver<Maybe<ResolversTypes['CreateMessageResponse']>, ParentType, ContextType, RequireFields<MutationCreateMessageArgs, never>>;
  createRoom?: Resolver<Maybe<ResolversTypes['CreateRoomResponse']>, ParentType, ContextType, RequireFields<MutationCreateRoomArgs, never>>;
  deleteMessage?: Resolver<Maybe<ResolversTypes['DeleteMessageResponse']>, ParentType, ContextType, RequireFields<MutationDeleteMessageArgs, 'id'>>;
  deleteRoom?: Resolver<Maybe<ResolversTypes['DeleteRoomResponse']>, ParentType, ContextType, RequireFields<MutationDeleteRoomArgs, 'id'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  listMessages?: Resolver<Maybe<ResolversTypes['ListMessageResponse']>, ParentType, ContextType, RequireFields<QueryListMessagesArgs, 'input'>>;
  listRooms?: Resolver<Maybe<ResolversTypes['ModelRoomConnection']>, ParentType, ContextType, RequireFields<QueryListRoomsArgs, never>>;
}>;

export type RoomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  messageCreated?: SubscriptionResolver<ResolversTypes['MessageCreatedResponse'], "messageCreated", ParentType, ContextType, RequireFields<SubscriptionMessageCreatedArgs, 'roomId'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  CreateMessageResponse?: CreateMessageResponseResolvers<ContextType>;
  CreateRoomResponse?: CreateRoomResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteMessageResponse?: DeleteMessageResponseResolvers<ContextType>;
  DeleteRoomResponse?: DeleteRoomResponseResolvers<ContextType>;
  ListMessageResponse?: ListMessageResponseResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessageCreatedResponse?: MessageCreatedResponseResolvers<ContextType>;
  ModelRoomConnection?: ModelRoomConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
}>;

