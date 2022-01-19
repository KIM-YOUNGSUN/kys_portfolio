import Header from './common/Header/Header';
import Main from './page/Main/Main';
import About from './page/About/About';
import Skills from './page/Skills/Skills';
import Project from './page/Project/Project';
import Contact from './page/Contact/Contact';
import Footer from './common/Footer/Footer';
import './App.css';

function App() {
  const title = 'portfolio';
  return (
    <div className="App">
      <Header heading={title}/>
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
