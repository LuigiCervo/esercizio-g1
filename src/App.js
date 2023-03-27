import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Kitten from "./components/Kitten";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button ButtonText="Questo testo è stato generato da una prop del functiom component" />{" "}
        <Kitten ImageSrc="https://placekitten.com/500" AltName="Cute Kitten" />
      </header>
    </div>
  );
}

export default App;
