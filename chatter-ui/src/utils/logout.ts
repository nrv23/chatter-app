import client from "../constants/apollo-client";
import { authenticatedVar } from "../constants/authenticated";
import { LocalStorageUtil } from "./localstorage";

// Define el tipo de la función setIsAuthenticated


const storage = new LocalStorageUtil();

const logout = async () => {
    console.log("logout function");
    authenticatedVar(false);
    storage.removeItem("token"); // Limpia el token
    await client.resetStore(); // Resetea el store de Apollo
   
};

export { logout };