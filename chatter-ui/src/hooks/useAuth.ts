import { useReactiveVar } from "@apollo/client";
import { authenticatedVar } from "../constants/authenticated";

const useAuth = () => {
    const user = useReactiveVar(authenticatedVar); // Suscríbete a los cambios en authVar
    
    console.log({user})
    return {
      isAuthenticated: !!user, // Devuelve true si hay un usuario autenticado
      user, // Devuelve el objeto de usuario si es necesario
    };

    
  };

  export default useAuth;