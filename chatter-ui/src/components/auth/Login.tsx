import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import { useLogin } from "../../hooks/useLogin";
import { extractErrorMessage } from "../../utils/error";
import { useState } from "react";

const Login = () => {
  const [login] = useLogin();
  const [error, setError] = useState("");
  return (
    <>
      <Auth
        submitLabel="Login"
        onSubmit={async ({ email, password }) => {
          try {
            const { data } = await login({
              variables: {
                loginInput: {
                  email,
                  password
                }
              }
            });
            setError("");
            console.log(data);
            localStorage.setItem("token", data?.login.token!);
          } catch (error) {
            console.log({ error });
            const errorMessage = extractErrorMessage(error);
            if (errorMessage) setError(errorMessage);
          }
        }}
        error={error ? "Invalid Credentials" : ""}
      >
        <Link to={"/signup"} style={{ alignSelf: "center" }}>
          <MUILink>Signup</MUILink>
        </Link>
      </Auth>
    </>
  );
};

export default Login;
