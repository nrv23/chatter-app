import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_BACKEND } from "./urls";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: `${API_BACKEND}/graphql`
});

export default client;