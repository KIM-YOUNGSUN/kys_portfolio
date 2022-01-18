// import logo from './logo.svg';
import Header from './component/Header';
import ViewBox from './component/ViewBox';
import './App.css';

function App() {
  const title = 'portfolio';
  return (
    <div className="App">
      <Header heading={title}/>
      <ViewBox />
    </div>
  );
}

export default App;
