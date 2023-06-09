import logo from './logo.svg';
import './App.css';
function App() {
  let myWeakMap = new WeakMap();
  let myElement = {};

  myWeakMap.set(myElement, {timesClicked:0});
  function handleClick() {
    let logoData = myWeakMap.get(myElement);
    logoData.timesClicked++;

    console.log(`You've pressed the log for ${logoData.timesClicked} times.`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
