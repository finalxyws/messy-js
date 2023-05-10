import logo from './logo.svg';
import './App.css';
import {nested_func, recursive_func} from "./utils";

function App() {
  // recursive call
  recursive_func(3);

  // nested call
  console.log(nested_func(3,4));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
