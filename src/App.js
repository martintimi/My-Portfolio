import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from '../src/components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome';



function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer />
    </div>
  );
}

export default App;
