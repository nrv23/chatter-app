import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../gql/auth/getMe';
import { LocalStorageUtil } from './localstorage';
// Asegúrate de que esta es la consulta correcta para obtener el usuario

// Define el tipo de las props que recibirá el componente
interface ProtectedRouteProps {
    children: ReactNode; // Puede recibir cualquier nodo de React
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { loading, error, data } = useQuery<{ me: any }, any>(GET_ME, { // Ajusta los tipos según tu implementación
        fetchPolicy: "network-only", // Asegúrate de no usar caché para esta verificación
    });

    // Mientras se carga la consulta, puedes mostrar un spinner o mensaje
    if (loading) return <p>Loading...</p>;

    // Si hay un error o no hay datos del usuario, redirige al login
    if (error || !data?.me) {
        new LocalStorageUtil().removeItem("token"); // Limpia el token en caso de error
        return <Navigate to="/login" />;
    }

    // Si el usuario está autenticado, renderiza los hijos (la ruta protegida)
    return <>{children}</>;
};

export default ProtectedRoute;