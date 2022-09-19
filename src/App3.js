import './App.css';
import { useRef } from 'react';

function App3() {
  const danielRef = useRef(null);
  const joaoRef = useRef(null);
  const pedroRef = useRef(null);

  function handleClickDaniel() {
    danielRef.current.style.fontSize = '30px';
    danielRef.current.style.color = 'red';
  }
  function handleClickJoao() {
    joaoRef.current.style.fontSize = '60px';
    joaoRef.current.style.color = 'green';
  }
  function handleClickPedro() {
    pedroRef.current.style.fontSize = '90px';
    pedroRef.current.style.color = 'blue';
  }

  return (
    <div className="App">
      <strong
        ref={danielRef}
        onClick={() => handleClickDaniel()}
      >
        Daniel
      </strong>
      <strong
        ref={joaoRef}
        onClick={() => handleClickJoao()}
      >
        João
      </strong>
      <strong
        ref={pedroRef}
        onClick={() => handleClickPedro()}
      >
        Pedro
      </strong>
    </div>
  );
}

export default App3;
