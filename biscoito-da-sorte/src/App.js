import React, { Component } from "react";
import biscoito from './assets/biscoito.png'
import './styles/estilo.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      textoFrase: ''
    }
    this.frases = ['A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?']

    this.quebraBiscoito = this.quebraBiscoito.bind(this)
  }

  quebraBiscoito(){
    let state = this.state
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = `'${this.frases[numeroAleatorio]}'`
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img className="img" src={biscoito} alt="Biscoito da sorte"/>
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
 render(){
   return(
     <div>
       <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
     </div>
   )
 }
}

export default App;
