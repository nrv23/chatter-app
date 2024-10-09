import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Branding from "./Branding";
import MobileNavigation from "./mobile/MobileNavigation";
import MobileBranding from "./mobile/MobileBranding";
import Navigation from "./Navigation";
import Settings from "./Settings";
import { useReactiveVar } from "@apollo/client";
import { authenticatedVar } from "../../constants/authenticated";
import { IPage } from "../../interfaces/page.interface";

//const pages = ["Products", "Pricing", "Blog"];
const pages: IPage[] = [
  {
    title: 'Home',
    path: '/'
  }
]


const uauthenticatedPages: IPage[] = [
  {
    title: 'Login',
    path: '/login'
  },{
    title: 'Signup',
    path: '/signup'
  }
];

function Header() {

  const authenticated = useReactiveVar(authenticatedVar);

  const renderPages = authenticated ? pages : uauthenticatedPages;

  console.log({authenticated});
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Branding />
          <MobileNavigation pages={renderPages} />
          <MobileBranding />
          <Navigation pages={renderPages} />
          { authenticated &&  <Settings /> }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
