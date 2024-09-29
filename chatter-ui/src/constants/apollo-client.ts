import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { API_BACKEND } from "./urls";



const httpLink = new HttpLink({
    uri: `${API_BACKEND}/graphql`,
    credentials: "include"
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
    
});

export default client;