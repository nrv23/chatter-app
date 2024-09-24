
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {

  const { login, error } = useLogin()

  return (
    <>
      <Auth submitLabel="Login" onSubmit={async (request) => {
        try {
          await login(request);
        } catch (error) {
          console.log({error});
        }
      }} error={error? "Invalid Credentials" : ""}>
        <Link to={"/signup"} style={{ alignSelf: "center" }}>
          <MUILink>Signup</MUILink>
        </Link>
      </Auth>
    </>
  );
};

export default Login;
