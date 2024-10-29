import { useMutation } from "@apollo/client";
import { graphql } from "../gql";
import { ChatFragment } from "../fragments/chat.fragment";

const createChatDocument = graphql(`

    mutation CreateChat($createChatInput: CreateChatInput!)    {
        createChat(createChatInput:$createChatInput) {
            _id
            userId
            userIds
            isPrivate
            name
        }
    }
`);


const useCreateChat = () => {
    return useMutation(createChatDocument,{
        update(cache, {data}) { // actualizar el cache de graphql en el frontend para refrescar cambios automaticamente
            // cuando se crea un nuevo chat
            cache.modify({
                fields: {
                    chats(existingChats = []) {
                        const newChatRef = cache.writeFragment({
                            data: data?.createChat,
                            fragment: ChatFragment
                        });

                        return [...existingChats, newChatRef];
                    }
                }
            })
        }
    });   
}


export {  useCreateChat };