import { useRef } from 'react';
import './App.css';

function App2() {
  const h1Ref = useRef(null);

  function handleClick() {
    if (h1Ref.current.style.backgroundColor === 'black') {
      h1Ref.current.style.backgroundColor = 'white';
      h1Ref.current.style.color = 'black';
      return;
    }

    h1Ref.current.style.backgroundColor = 'black';
    h1Ref.current.style.color = 'white';
  }

  function handleMouseOver() {
    h1Ref.current.innerText = 'Mouse no strong';
  }

  function handleMouseLeave() {
    h1Ref.current.innerText = 'Mouse fora do strong';
  }

  return (
    <div className="App">
      <strong
        onClick={() => handleClick()}
        onMouseOver={() => handleMouseOver()}
        onMouseLeave={() => handleMouseLeave()}
      >
        Passe o mouse aqui...
      </strong>
      <h1 ref={h1Ref}></h1>
    </div>
  );
}

export default App2;