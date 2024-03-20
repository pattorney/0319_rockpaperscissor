import {useState} from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
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
  }
};

// 승패 결과에 따라 색이 바뀐다.(이기면 초록, 지면 빨강, 비기면 검은색)
// 컴퓨터의 승패 결과를 보여준다.

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");
  
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setUserResult(judgement(choice[userChoice], computerChoice));
    setComputerResult(judgement(computerChoice, choice[userChoice]));
  };
  
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }
  
  const judgement = (player1, player2) => {
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

  const boxStyle = (user) => {
    if (user === "win")
      return {borderColor: 'green'}
    else if (user === "tie")
      return {borderColor: 'black'}
    else
      return {borderColor: 'red'}
  }

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={userResult} 
          initShow="가위,바위,보 중 선택하세요" boxstyle={boxStyle(userResult)} />
        <Box title="Computer" item={computerSelect} result={computerResult} 
          initShow="컴퓨터는 자동 선택입니다" boxstyle={boxStyle(computerResult)} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>  
  );
}

export default App;
