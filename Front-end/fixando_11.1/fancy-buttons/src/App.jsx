import React from 'react';
import './App.css';



class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    function handleClick1() {
      console.log('C1!')
    }
    function handleClick2() {
      console.log('C2!')
    }
    function handleClick3() {
      console.log('C3!')
    }
    function handleClick4() {
      console.log('C14')
    }
    function handleClick5() {
      console.log('C5')
    }
    return (
      <div>
        <button onClick={handleClick1}>Meu botão</button>
        <button onClick={handleClick2}>Meu botão</button>
        <button onClick={handleClick3}>Meu botão</button>
        <button onClick={handleClick4}>Meu botão</button>
        <button onClick={handleClick5}>Meu botão</button>

        
      </div>
    )

  }
}

export default App;
