import { AlertClock } from "./AlertClock";
import "./App.css";
import { Welcome } from "./Welcome";

function App() {
  function handleButtonClick() {
    alert("Current time: " + new Date().toLocaleTimeString());
  }
  return (
    <>
      <Welcome name={<strong>Luigi</strong>} />
      <AlertClock
        currentTime={<button onClick={handleButtonClick}>Click Me!</button>}
      />
    </>
  );
}

export default App;
