import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_ME } from '../gql/auth/getMe';
import { useQuery } from '@apollo/client';
import { authenticatedVar } from '../constants/authenticated';

const useAuthRedirect = (isAuthenticated: boolean) => {
    const navigate = useNavigate();
    const { data, loading, error } = useQuery(GET_ME, {
        skip: !isAuthenticated, // No ejecutar si no está autenticado
    });

    useEffect(() => {
        if (loading) return;

        if (data) {
            navigate('/');
            authenticatedVar(true);
        } else if (error) {
            // Asegúrate de que solo redirija si el error es UNAUTHORIZED
            if (error?.graphQLErrors[0]?.extensions?.code === "UNAUTHORIZED") {
                navigate('/login');
            }
        }
    }, [navigate, data, error, loading]);
};

export default useAuthRedirect;