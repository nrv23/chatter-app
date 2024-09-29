import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider
} from "@mui/material";

import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import routes from "./components/Routes";
import { BrowserRouter as Router } from 'react-router-dom';

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
          <Container>
            <Router>
            {routes}
            </Router>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
