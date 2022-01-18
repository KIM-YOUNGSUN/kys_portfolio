// import logo from './logo.svg';
import Header from './common/Header/Header';
import ViewBox from './page/Main/ViewBox';
import About from './page/About/About';
import './App.css';

function App() {
  const title = 'portfolio';
  return (
    <div className="App">
      <Header heading={title}/>
      <ViewBox />
      <About />
    </div>
  );
}

export default App;
