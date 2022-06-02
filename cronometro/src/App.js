import React,{ Component } from "react";
import cronometro from './assets/cronometro.png'
import './style/style.css'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      botao:'Iniciar'
    }
    this.timer = null
    this.initial = this.initial.bind(this)
    this.clear = this.clear.bind(this)
  }
  
  initial(){
    let state = this.state

    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
      state.botao = 'Iniciar'

    }else{
      this.timer = setInterval(() => {
        let state = this.state
        state.numero += 0.1
        state.botao = 'Parar'
        this.setState(state)
      }, 100)
    }
    this.setState(state)
    
  }

  clear(){
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
    }
    let state = this.state
    state.numero = 0
    state.botao = 'Iniciar'
    this.setState(state)
  }

  render(){
    return (
      <div className="container">
        <img src={cronometro} alt="cronometro" className="img" />
        <time className="timer">{this.state.numero.toFixed(1)}</time>
  
        <div className="areaBtn">
          <button className="botao" type="button" onClick={this.initial}>{this.state.botao}</button>
          <button className="botao" type="button" onClick={this.clear}>Limpar</button>
        </div>
      </div>
    );
  }
}

export default App;
