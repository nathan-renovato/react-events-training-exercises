import { useRef } from 'react';
import './App.css';

function App() {
  const countRef = useRef(0);
  const incrementRef = useRef(null);
  const incrementLet = useRef(null);

  let count = 0;

  console.log('Renderizou');

  function handleIncrementRef() {
    countRef.current += 1;
    console.log(`Valor de countRef ${countRef.current}`);
  }

  function handleIncrementLet() {
    count += 1;
    console.log(`Valor de count ${count}`);
  }

  return (
    <div className="App">
      <button
        onClick={() => handleIncrementRef()}
        ref={incrementRef}
      >
        Increment Ref
      </button>
      <button
        onClick={() => handleIncrementLet()}
        ref={incrementLet}
      >
        Increment Let
      </button>
    </div>
  );
}

export default App;
