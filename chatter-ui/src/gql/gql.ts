/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n    fragment  ChatFragment on Chat {\n        _id\n        userId\n        userIds\n        isPrivate\n        name\n    }\n    \n": types.ChatFragmentFragmentDoc,
    "\n\n    mutation CreateChat($createChatInput: CreateChatInput!)    {\n        createChat(createChatInput:$createChatInput) {\n            _id\n            userId\n            userIds\n            isPrivate\n            name\n        }\n    }\n": types.CreateChatDocument,
    "\n\nmutation CreateUser($createUserInput: CreateUserInput!) {\n  createUser(createUserInput: $createUserInput) {\n    _id\n    email\n  }\n}\n": types.CreateUserDocument,
    "\n    \n    query Chats {\n        chats {\n            ...ChatFragment\n        }\n    }    \n": types.ChatsDocument,
    "\n  mutation Login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput) {\n      token\n      user {\n        _id\n        email\n      }\n    }\n  }\n": types.LoginDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment  ChatFragment on Chat {\n        _id\n        userId\n        userIds\n        isPrivate\n        name\n    }\n    \n"): (typeof documents)["\n    fragment  ChatFragment on Chat {\n        _id\n        userId\n        userIds\n        isPrivate\n        name\n    }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\n    mutation CreateChat($createChatInput: CreateChatInput!)    {\n        createChat(createChatInput:$createChatInput) {\n            _id\n            userId\n            userIds\n            isPrivate\n            name\n        }\n    }\n"): (typeof documents)["\n\n    mutation CreateChat($createChatInput: CreateChatInput!)    {\n        createChat(createChatInput:$createChatInput) {\n            _id\n            userId\n            userIds\n            isPrivate\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\nmutation CreateUser($createUserInput: CreateUserInput!) {\n  createUser(createUserInput: $createUserInput) {\n    _id\n    email\n  }\n}\n"): (typeof documents)["\n\nmutation CreateUser($createUserInput: CreateUserInput!) {\n  createUser(createUserInput: $createUserInput) {\n    _id\n    email\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    \n    query Chats {\n        chats {\n            ...ChatFragment\n        }\n    }    \n"): (typeof documents)["\n    \n    query Chats {\n        chats {\n            ...ChatFragment\n        }\n    }    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput) {\n      token\n      user {\n        _id\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput) {\n      token\n      user {\n        _id\n        email\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;