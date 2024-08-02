import './App.css';

// Imports all the sections for the page.
import { Navbar } from './Components/Navbar'
import { Introduction } from './Components/Introduction'
import { About } from './Components/About'
import { Steps } from './Components/Steps'
import { Reviews } from './Components/Reviews';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className = "App">
      <Navbar/>
      <Introduction/>
      <About/>
      <Steps/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
