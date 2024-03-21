import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
  constructor (props) {
    super(props);
    this.state = {
        userSelect: {
            name: "Initial",
            img: "https://mblogthumb-phinf.pstatic.net/MjAxODA4MjRfMjkz/MDAxNTM1MDk3ODg2OTU1.zwhbmmb81LGMV1n3z--8SQ9dBxYdyp7Gt_l9oRFK5Asg.pZqC-_Vb_3mGrxPTPhc5qEW_Kv429YJAUJ0I5Qmo9NAg.PNG.drawinart/%EC%89%AC%EC%9A%B4_%EB%82%A8%EC%9E%90_%EC%82%AC%EB%9E%8C_%EA%B7%B8%EB%A6%BC%EA%B7%B8%EB%A6%AC%EA%B8%B0.png?type=w800"
          },
          computerSelect: {
            name: "Initial",
            img: "https://cdn-icons-png.flaticon.com/512/2004/2004699.png"
          },
        userResult: "",
        computerResult: "",
        choice: {
            rock: {
              name: "Rock",
              img: "https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg"
            },
            scissors: {
              name: "Scissors",
              img: "https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png"
            },
            paper: {
              name: "Paper",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30omx2sH1rhccqt7M4gc_uibIuh4zew5J7XQjx1Yihw&s"
            },
        }          
    }
  }
  
  randomChoice = () => {
    let itemArray = Object.keys(this.state.choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return this.state.choice[final];
  }
  
  judgement = (player1, player2) => {
    if (player1.name === player2.name){
      return "tie"
    }
    else if (player1.name === "Rock") {
      return player2.name === "Scissors" ? "win" : "lose"
    }
    else if (player1.name === "Scissors") {
      return player2.name === "Paper" ? "win" : "lose"
    }
    else if (player1.name === "Paper") {
      return player2.name === "Rock" ? "win" : "lose"
    }
  };

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({userSelect: this.state.choice[userChoice], computerSelect: computerChoice});
    this.setState({userResult: this.judgement(this.state.choice[userChoice], computerChoice), computerResult: this.judgement(computerChoice, this.state.choice[userChoice])});
  };
    
  boxStyle = (user) => {
    if (user === "win")
      return {borderColor: 'green'}
    else if (user === "tie")
      return {borderColor: 'black'}
    else
      return {borderColor: 'red'}
  }

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.userResult} boxstyle={this.boxStyle(this.state.userResult)} />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.computerResult} boxstyle={this.boxStyle(this.state.computerResult)} />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}