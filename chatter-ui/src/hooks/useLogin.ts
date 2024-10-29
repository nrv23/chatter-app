import { useMutation } from "@apollo/client";
import { graphql } from "../gql";


const loginDocument = graphql(`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      user {
        _id
        email
      }
    }
  }
`);

const useLogin = () => {
    //const [errorMessage, setErrorError] = useState<string>("");    
    return useMutation(loginDocument);
};


export { useLogin }