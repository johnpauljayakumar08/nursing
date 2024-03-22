import logo from './logo.svg';
import './App.css';
import { Banner } from './Components/Banner/banner';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { About } from './Components/About/about';
import { Service } from './Components/services/service';
import { Example } from './Components/json/exapmle';
import { Footer } from './Components/footer/footer';
import { Menu } from './Components/menu/menu';
import { Howweare } from './Components/how we are/how_we_are';
function App() {
  return (
    <>
      <Menu/>  
      <Banner/>
      <About/>
      <Howweare/>
      <Service/>
      {/* <Example/> */}
      <Footer/>
    </>
  );
}

export default App;
