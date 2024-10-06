import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useState } from "react";
import { extractErrorMessage } from "../../utils/error";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import { LocalStorageUtil } from "../../utils/localstorage";

const Signup = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("");

  useAuthRedirect(!new LocalStorageUtil().getItem("toke"));
  return (
    <Auth
      submitLabel="Signup"
      error={error}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password
              }
            }
          });

          setError("");
        } catch (error) {
          console.log({ error });
          const errorMessage = extractErrorMessage(error);
          if (errorMessage) setError(errorMessage);
        }
      }}
    >
      <Link to={"/login"} style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
