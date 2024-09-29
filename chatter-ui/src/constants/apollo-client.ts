import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { API_BACKEND } from "./urls";
import { setContext } from '@apollo/client/link/context';
import { LocalStorageUtil } from "../utils/localstorage";


// Configura el contexto para incluir el token de autenticación
const authLink = setContext((_, { headers }) => {
    // Obtiene el token de localStorage o de donde lo estés almacenando
    const token = new LocalStorageUtil().getItem("token"); // o usa el método que estés utilizando
    console.log({token})
    // Devuelve los headers con el token de autorización si existe
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '', // Añade el token a los headers
        },
    };
});

const httpLink = new HttpLink({
    uri: `${API_BACKEND}/graphql`,
    credentials: "include"
})

// Crea el cliente de Apollo
const client = new ApolloClient({
    link: authLink.concat(httpLink), // Concatena el authLink con httpLink
    cache: new InMemoryCache(),
});

export default client;