import './App.css';
import Vector from "./img/Vector.png"
import AlertLogo from "./img/alert.png"
import Munieco from "./img/Muñeco.png"
import { useState } from 'react';

function App() {
  const [msg, setMsg] = useState("")
  const [res, setRes] = useState("")
  const [textoBoton, setTextoBoton] = useState('Copiar');
  
  const handleChange = (e) => {
    setMsg(e.target.value)
  }

  const Encriptar = (e) => {
    e.preventDefault()

    if(msg === ""){
      return
    }

    else{
      let array = msg.split("")
      let vocals = ["a", "e", "i", "o", "u"]

      for(let i = 0; i < array.length; i++){
        if(vocals.includes(array[i])){
          if(array[i] === "a"){
            array[i] = "ai"
          }
          else if (array[i] === "e"){
            array[i] = "enter"
          }
          else if (array[i] === "i"){
            array[i] = "imes"
          }
          else if (array[i] === "o"){
            array[i] = "ober"
          }
          else {
            array[i] = "ufat"
          }
        }
      }
      setRes(array.join(""))
    }
  }

  const Desencriptar = (e) => {
    e.preventDefault()

    if(msg === ""){
      return
    }

    else{
      let text = ""
      let vocals = ["a", "e", "i", "o", "u"]

      for(let i = 0; i < msg.length; i++){
        if(vocals.includes(msg[i])){
          if(msg.slice(i, i + 2) === "ai"){
            text += "a"
            i += 1
          }
          else if (msg.slice(i, i + 5) === "enter"){
            text += "e"
            i += 4
          }
          else if (msg.slice(i, i + 4) === "imes"){
            text += "i"
            i += 3
          }
          else if (msg.slice(i, i + 4) === "ober"){
            text += "o"
            i += 3
          }
          else if(msg.slice(i, i + 4) === "ufat"){
            text += "u"
            i += 3
          }
          else{
            text += msg[i]
          }
        }
        else{
          text += msg[i]
        }
      }
      setRes(text)
    }
  }

  function handleClick() {
    navigator.clipboard.writeText(res)
      .then(() => setTextoBoton('¡Copiado!'))
      .then(() => setTimeout(() => {setTextoBoton('Copiar'); }, 3000))
      .catch(() => setTextoBoton('Error al copiar'));
  }

  return (
    <div className="Contenedor">
      <div>
        <div className="Logo">
          <div className="Logo2">
            <img className="Vector" src={Vector}/>
          </div>
        </div>
        <form>
          <textarea 
            className="Text" 
            type="text" 
            name="Msg"
            maxLength={400}
            placeholder={"Ingrese el texto aquì"}
            onChange={e => handleChange(e)}
          />
          <div className="Alert">
            <img src={AlertLogo}/>
            <p className="Alert-Text">solo letras miúsculas y sin acentos</p>
          </div>
          <div className="Buttons">
            <button className="Encriptar" name="Encriptar" onClick={e => Encriptar(e)}>
              <p className="Button-Encriptar">Encriptar</p>
            </button>
            <button className="Desencriptar" name="Desencriptar" onClick={e => Desencriptar(e)}>
              <p className="Button-Desencriptar">Desencriptar</p>
            </button>
          </div>
        </form>
      </div>
      <div className="OutPut">
        {
          res === "" ? 
            <div>
              <img className="Munieco" src={Munieco}/>
              <div className="Empty">
              <h4 className="Empty-Text1">Ningùn mensaje fue encontrado</h4>
              <p className="Empty-Text2">Ningún mensaje fue encontrado Ingresa el texto que desees encriptar o desencriptar.</p>
              </div>
            </div>
           : 
            <div>
              <div>
                <p className="Res">{res}</p>
              </div>
              <button className="Copi" onClick={handleClick}>
                <p className="Copi-Text">{textoBoton}</p>
              </button>
            </div>
        }

      </div>
    </div>
  );
}

export default App;
