import { graphql } from "../gql";

const ChatFragment = graphql(`
    fragment  ChatFragment on Chat {
        _id
        userId
        userIds
        isPrivate
        name
    }
    
`);

export { ChatFragment };