import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_ME } from '../gql/auth/getMe';
import { useQuery } from '@apollo/client';
import { LocalStorageUtil } from "../utils/localstorage";
const useGetMe = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const token = new LocalStorageUtil().getItem("token");

  const { data, loading, error } = useQuery(GET_ME, {
    skip: !token,
    fetchPolicy: "network-only" 
  });

  useEffect(() => {
    if (loading) return; // No hacer nada mientras se está cargando

    if (data) {
      // Si obtenemos datos, significa que el usuario está autenticado
      setIsAuthenticated(true);
    } else if (error) {
      if (error?.graphQLErrors[0]?.extensions?.code === "UNAUTHORIZED") {
        new LocalStorageUtil().removeItem("token");
        setIsAuthenticated(false);
        navigate("/login"); // Redirige solo si hay un error
      }
    }
  }, [data, loading, error, navigate]);

  return { isAuthenticated, loading };
};

export default useGetMe;

