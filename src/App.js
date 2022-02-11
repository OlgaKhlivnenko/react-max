import logo from './logo.svg';
import AppBar from './components/AppBar/AppBar'
import Navigation from './components/Navigation/navigation'
import UserMenu from './components/UserMenu/userMenu'
import ToggleButton from './components/ToggleButton';
import LayoutManager from './components/LayoutManager';
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
    <LayoutManager>
      <AppBar>
        {{
        navigation: <Navigation links={navLinks} />,
        userMenu: <UserMenu />,
    }}
    </AppBar>
    </LayoutManager>
  );
}

export default App;
