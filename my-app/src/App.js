import './App.css';
import Vector from "./img/Vector.png"
import AlertLogo from "./img/alert.png"

function App() {
  return (
    <div>
      <div className="Logo">
        <div className="Logo2">
          <img className="Vector" src={Vector}/>
        </div>
      </div>
    <form>
      <input className="Text" type="text" placeholder={"Ingrese el texto aquì"}/>
      <div className="Alert">
        <img src={AlertLogo}/>
        <p className="Alert-Text">solo letras miúsculas y sin acentos</p>
      </div>
      <div className="Buttons">
        <div className="Encriptar">
          <button className="Button-Encriptar">Encriptar</button>
        </div>
        <div className="Desencriptar">
          <button className="Button-Desencriptar">Desencriptar</button>
        </div>
      </div>
    </form>

    </div>
  );
}

export default App;
