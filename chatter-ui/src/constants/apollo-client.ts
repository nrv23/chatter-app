import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from '@apollo/client/link/error';
import { API_BACKEND } from "./urls";
import { excludeRoutes } from "./excluded-routes";
import router from "../components/Routes";


const logoutLink = onError((error) => {
    if(
        error.graphQLErrors?.length
        && (error.graphQLErrors[0].extensions?.originalError as any).statusCode === 401
    ) {
        if(!excludeRoutes.includes(window.location.pathname)) {
            router.navigate('/login');
            client.resetStore();
        }
    }
});


const httpLink = new HttpLink({uri: `${API_BACKEND}/graphql`})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: logoutLink.concat(httpLink)
    
});

export default client;