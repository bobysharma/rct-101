import { useState } from "react";
import "./styles.css";
import Timer from "./Timer";

export default function App() {
  const [timer, setTimer] = useState(true);
  return (
    <div className="App">
      {timer && <Timer />}
      <button onClick={() => setTimer(!timer)}> show timer /hide timer</button>
    </div>
  );
}
