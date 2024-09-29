import { gql, useMutation } from "@apollo/client";
import { IAuthResponseType } from "../interfaces/AuthResponseType.interface";

interface LoginInput {
    loginInput: {
        email: string;
        password: string;
    }

}

const LOGIN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      user {
        _id
        email
      }
    }
  }
`

const useLogin = () => {
    //const [errorMessage, setErrorError] = useState<string>("");    
    return useMutation<IAuthResponseType, LoginInput>(LOGIN);
};


export { useLogin }