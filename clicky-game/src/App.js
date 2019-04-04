import React, { Component } from 'react';
import './App.css';
import porsche from './img/911.jpg';

class App extends Component {

handleClick(){
    console.log("hello");
}

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
            <div onClick={this.handleClick} className="card-image waves-effect waves-block waves-light">
              <img alt="Not Found" className="activator" src={porsche}/>
             </div>
             </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
