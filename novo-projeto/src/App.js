import React,{ Component } from "react";
// import {Equipe} from "./components/Equipe"
export class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      user: '',
      password: '',
    }

    this.troca = this.troca.bind(this)
  }

  troca(e){
    let prevState = this.state
    const element = e.target.value
    const key = e.target.id

    prevState[`${key}`] = element

    this.setState(prevState)
  }

  render(){
    return (
      <div>
        <h2>Formulario</h2>

        <form>
          <div>
            <label>Nome:</label>
            <input type="text" id="name" value={this.state.name} onChange={this.troca}></input>
          </div>

          <div>
            <label>Email:</label>
            <input type="email" id="user" value={this.state.user} onChange={this.troca}></input>
          </div>

          <div>
            <label>Password:</label>
            <input type="password" id="password" value={this.state.senha} onChange={this.troca}></input>
          </div>
        </form>
      </div>
    );
  }
}

