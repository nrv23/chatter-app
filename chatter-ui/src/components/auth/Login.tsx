import { Link, useNavigate } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import { useLogin } from "../../hooks/useLogin";
import { extractErrorMessage } from "../../utils/error";
import {  useState } from "react";
import { LocalStorageUtil } from "../../utils/localstorage";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import { authenticatedVar } from "../../constants/authenticated";
import { snackVar } from "../../constants/snack";

const Login = () => {
  const [login] = useLogin();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useAuthRedirect(!new LocalStorageUtil().getItem("toke"));

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
            const storage = new LocalStorageUtil();
            storage.setItem("token", data?.login.token!);
            authenticatedVar(true);
            navigate("/");
          } catch (error) {
            console.log({ error1: error });
            const errorMessage = extractErrorMessage(error);
            if (errorMessage) {
              //setError(errorMessage)
              snackVar({
                message: errorMessage,
                type: "error"
              })
            };
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
