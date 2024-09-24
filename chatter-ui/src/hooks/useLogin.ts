import { useState } from "react";
import { API_BACKEND } from "../constants/urls";
import client from "../constants/apollo-client";

interface LoginRequest {
    email: string;
    password: string;
}

const useLogin = () => {
    const [error, setError] = useState<string>("");

    const login = async (request: LoginRequest) => {
        const res = await fetch(`${API_BACKEND}/auth/login`,{
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(res)
        if(!res.ok) {
            setError(
                res.status === 401 
                    ? 'Invalid credentials'
                    : 'Unkown error ocurred'
            );
        }
        else {
            // borrar el caché de graphql y re cargar los queries activos
            setError("");
            await client.refetchQueries({include: 'active'});
        }
    }

    return { login, error };
}

export { useLogin }