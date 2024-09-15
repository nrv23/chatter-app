
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";

const Signup = () => {

  const [createUser] = useCreateUser();
  return (
    <Auth submitLabel="Signup" onSubmit={async ({email, password}) => {
      try {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password
            }
          }
        })
      } catch (error) {
        console.log({error})
      }
    }}>
      <Link to={"/login"} style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
