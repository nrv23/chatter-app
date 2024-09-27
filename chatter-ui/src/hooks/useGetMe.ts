import { useQuery, gql } from '@apollo/client';
import { User } from '../models/User';

const GET_ME = gql`

query Me {
  me {
    _id
    email
  }
}
`

const useGetMe = () => {
  return useQuery<{ me: User }>(GET_ME, {
    fetchPolicy: 'no-cache', // Evitar problemas de caché
    context: {
      credentials: 'include', // Asegúrate de enviar las cookies
    }
  });
}

export { useGetMe };