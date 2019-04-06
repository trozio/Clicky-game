import React, { Component } from 'react';
import './App.css';
import Card from "./components/card/card";
import Wrapper from "./components/wrapper/wrapper";
import supercars from "./supercars.json";

class App extends Component {

state = {
    supercars,
    score: 0,
    highscore: 0
  };

  handleIncorrect = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score}, function() {
      console.log(this.state.highscore);
      alert(`Nice job! New highscore: ${this.state.score}`);
      this.setState({score: 0});
    });
  }
  this.state.supercars.forEach(supercar => {
    supercar.count = 0;
  });
  alert(`Try again! Your score was: ${this.state.score}`);

  return true;
}


handleCorrect = id => {
  this.state.supercars.find((o, i) => {
    if (o.id === id) {
      if(supercars[i].count === 0){
        supercars[i].count = supercars[i].count + 1;
        this.setState({score: this.state.score + 1}, function(){
          console.log(this.state.score);
        });
        this.state.supercars.sort(() => Math.random() - 0.5)
        return true;
      } else {
        this.handleIncorrect();
      }
    }
  });
}

  render() {
    return (
        <Wrapper>
           {this.state.supercars.map(supercar => (
             <Card
               clickCount={this.handleCorrect}
               id={supercar.id}
               key={supercar.id}
               image={supercar.image}
             />
           ))}
         </Wrapper>
       );
     }
   }

export default App;
