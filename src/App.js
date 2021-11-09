import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
    };
 
  
    this.subtrair = this.subtrair.bind(this);
  }
  
  somar(){
    this.setState({
      numero: this.state.numero +1
      
    });
  }

  subtrair(){
    this.setState({
      numero: this.state.numero -1
    
      
    });
  }
 
  render(){
    return(
      <div>
        <center>
         
          <h1>Contador de Pessoas</h1>
           
          <section><h1>{this.state.numero}</h1></section><br></br>
          <button onClick={this.somar.bind(this)}><h1>   +   </h1></button> <p></p>
          <button onClick={this.subtrair}><h1>    -    </h1></button>
         
        </center>
      </div>
    );
  }
}
 
export default App;
