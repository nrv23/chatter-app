

import { gql, useMutation } from "@apollo/client";
import { User } from "../models/User";

interface LoginInput {
    loginInput: {
        email: string;
        password: string;
    }

}

const LOGIN = gql`

mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    user {
      _id
      email
    }
  }
}
`

const useLogin = () => {
    //const [errorMessage, setErrorError] = useState<string>("");    
    return useMutation<User, LoginInput>(LOGIN);
};


export { useLogin }