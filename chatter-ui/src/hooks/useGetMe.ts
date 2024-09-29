import { GET_ME } from "../gql/auth/getMe";

import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LocalStorageUtil } from "../utils/localstorage";

const useGetMe = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Llamada a la query getMe para verificar la autenticación
  const { data, loading, error } = useQuery(GET_ME);

  useEffect(() => {
    console.log({data, loading, error})
    if (!loading && data) {
      // Si obtenemos datos, significa que el usuario está autenticado
      setIsAuthenticated(true);
    } else {

      if (error?.graphQLErrors[0]?.extensions?.code === "UNAUTHORIZED") {
        // Redirigir al login si hay un error de autorización
        new LocalStorageUtil().removeItem("token"); // Opcionalmente limpiar el token
        setIsAuthenticated(false);
        navigate("/login"); // Usar navigate de react-router-dom
       
      }
      throw error;
    }
  }, [data, loading, error, navigate]);


  return { isAuthenticated, loading };
};

export default useGetMe;