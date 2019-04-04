import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import image from './img/911.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">



        <div class="row">
          <div class="col s12 m7">
            <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
   <img class="activator" src={image}/>
 </div>
              </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
