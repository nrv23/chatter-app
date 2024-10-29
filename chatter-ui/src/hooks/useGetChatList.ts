import { useQuery } from "@apollo/client";
import { graphql } from "../gql";


const getChatListDocument = graphql(`
    
    query Chats {
        chats {
            ...ChatFragment
        }
    }    
`);


const useGetChats = () => {
    return useQuery(getChatListDocument);
};


export { useGetChats };