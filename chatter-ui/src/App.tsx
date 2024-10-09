import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider
} from "@mui/material";
import Grid2 from '@mui/material/Grid2/Grid2';
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import { SnackbarNotification } from "./components/snackbar/Snackbar-notification";
import { ChatList } from "./components/chat-list/ChatList";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <BrowserRouter>
            <Header />

            <Grid2 container>
              <Grid2 columns={3}>
                <ChatList />
              </Grid2>
              <Grid2 columns={9}>
                <Container>
                  {routes}
                </Container>
              </Grid2>
            </Grid2>

            <SnackbarNotification />
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
