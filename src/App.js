import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          App para Somar dois numeros inteiros 
        </p>
        <div className="Soma">
          <p>Coloque o primeiro valor inteiro</p>
          
          <input type="text" id="valor1"></input>
          <br></br>
          <p>Coloque o segundo valor inteiro</p>
          <input type="text" id="valor2"></input>
          <br></br>
          <button onClick={somarValores}>Somar</button>
          <br></br>
          <p>Resultado da Soma</p>
          <input type="text" id="resultado" readOnly="true"></input>
        </div>
      </header>
    </div>
  );
}

function somarValores() {
  var valor1 = parseInt(document.getElementById('valor1').value);
  var valor2 = parseInt(document.getElementById('valor2').value);  

  document.getElementById('resultado').value = valor1+valor2;
}

export default App;
