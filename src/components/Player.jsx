import { useState  } from "react";
import { useRef } from "react";

export default function Player() {

  const playerName = useRef();
  const myName = useRef("Salman");
  const [userName, setUsername] = useState('');

  function handleClick()
  {
    setUsername(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome { userName ? userName : "unknown entity" }</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
