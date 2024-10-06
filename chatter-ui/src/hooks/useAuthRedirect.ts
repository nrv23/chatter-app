


// src/hooks/useAuthRedirect.ts
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_ME } from '../gql/auth/getMe';
import { useQuery } from '@apollo/client';

const useAuthRedirect = () => {
    const navigate = useNavigate();
    const { data ,error } = useQuery(GET_ME);

    useEffect(() => {

        if (data) {
            navigate('/');
        }
        if(error) {
            navigate('/login');
        }
    }, [navigate, data, error]);
};

export default useAuthRedirect;
