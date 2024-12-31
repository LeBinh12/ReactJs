import logo from './logo.svg';
import './App.scss';
import TestComponent from './Example/testComponent';
/**
 * 
 *  co 2 loại components : class component và function components
 * 
 * 
 * 
 */




function App() { // arrow function
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello cả 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestComponent/>
      </header>
    </div>
  );
}

export default App;
