import logo from './logo.svg';
import AppBar from './components/AppBar/AppBar'
import Navigation from './components/Navigation/navigation'
import UserMenu from './components/UserMenu/userMenu'

const navLinks = [{
  href: "/univer",
  text: "univer",
},
  {
    href: "/facultet",
    text: "facultet",
}]
function App() {
  return (
    <AppBar>{{
        navigation: <Navigation links={navLinks} />,
        userMenu: <UserMenu />,
    }}
    </AppBar>
  );
}

export default App;
