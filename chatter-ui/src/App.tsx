import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider
} from "@mui/material";

import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import routes from "./components/Routes";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';

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
          <Header/>
          <Container>
            {routes}
          </Container>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
