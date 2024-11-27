import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider
} from "@mui/material";
import Grid2 from "@mui/material/Grid2/Grid2";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import { SnackbarNotification } from "./components/snackbar/Snackbar-notification";
import { ChatList } from "./components/chat-list/ChatList";
import useAuth from "./hooks/useAuth";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

const Routes = () => {
  return (
    <Container>
      {routes}
    </Container>
  );
};

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <BrowserRouter>
            <Header />
            {isAuthenticated
              ? <Grid2 container>
                  <Grid2 size={{ xs: 6, md: 4 }}>
                    <ChatList />
                  </Grid2>
                  <Grid2 size={{ xs: 4, md: 8 }}>
                    <Routes />
                  </Grid2>
                </Grid2>
              : <Routes />}
            <SnackbarNotification />
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

/*

<ApolloProvider client={client}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <BrowserRouter>
        <Header/>
        <Container>
          {routes}
        </Container>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </ApolloProvider>

*/
