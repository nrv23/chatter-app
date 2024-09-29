import { GET_ME } from "../gql/auth/getMe";

import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const useGetMe = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Llamada a la query getMe para verificar la autenticación
  const { data, loading, error } = useQuery(GET_ME, {
    onError: () => {
      // Si hay un error en la consulta, significa que no está autenticado o el token es inválido
      setIsAuthenticated(false);
      navigate('/login');
    },
  });

  useEffect(() => {
    if(error)   setIsAuthenticated(false);
    
    if (!loading && data) {
      // Si obtenemos datos, significa que el usuario está autenticado
      setIsAuthenticated(true);
    }

    
  }, [data, loading, error]);

  return { isAuthenticated, loading };
};

export default useGetMe;