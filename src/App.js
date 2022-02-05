import logo from './logo.svg';
import AppBar from './components/AppBar/AppBar'
const navLinks = [{
  href: "/univer",
  text: "univer",
},
  {
    href: "/facultet",
    text: "facultet",
}]
function App() {
  return <AppBar links={navLinks} />;
}

export default App;
