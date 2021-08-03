import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { validateGame, isBoardFull } from "../utils/game_utils";
import  { useHistory } from 'react-router-dom'
import Button from "../components/Button";
import "./Game.css";

const Game = () => {
  let history = useHistory()
  const { mode, score, getCurrentScore, setCurrentScore } = useContext(AppContext);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const nextSymbol = isXNext ? "X" : "O";
  const winner = validateGame(squares);

  const renderBtnClick = (i: number) => {
    return (
      <Button
        value={squares[i]}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = nextSymbol;
          setSquares(nextSquares);

          setIsXNext(!isXNext);
        }}
      />
    );
  };

  const getStatus = () => {
    if (winner) {
     if(winner  === "X"){
       let temp ={
         playerOne: score.playerOne+1,
         playerTwo: score.playerTwo
       }
       setCurrentScore(temp)
     }else if(winner  === "O"){
      let temp ={
        playerOne: score.playerOne,
        playerTwo: score.playerTwo+1
      }
      setCurrentScore(temp)
     }
      return <p className="stats">Winner: {winner}</p>;
    } else if (isBoardFull(squares)) {
      return <p className="stats">Draw !</p>;
    } else {
      return <p className="stats">Next player: {nextSymbol}</p>;
    }
  };

  useEffect(() => {
    getCurrentScore()
    let timerForPc: NodeJS.Timeout;
    if (mode === "single") {
      if (!isXNext) {
        timerForPc = setTimeout(() => {
          callBtnHandler();
        }, 2000);
      }
    }
    return () => {
      clearTimeout(timerForPc);
    };
  }, [isXNext]);

  const callBtnHandler = () => {
    let index = Math.floor(Math.random() * 8 - 3);
    let counter = 0;
    while (squares[index] !== null) {
      index = Math.floor(Math.random() * 8 + 1);
      counter++;
      if (counter === 8) {
        break;
      }
    }
    renderBtnClick(index);
    const arr = squares.slice();
    arr[index] = "O";
    setSquares(arr);
    setIsXNext(!isXNext);
  };
  return (
    <div className="container">
      <div className="score"><span>Player X: {score.playerOne}</span><span>Player O: {score.playerTwo}</span></div>
      <div style={{ textAlign: "center", color: "#142850" }}>{getStatus()}</div>

      <div className="center-div">
        <div className="top">
          <div className="lt">{renderBtnClick(0)}</div>
          <div className="mt">{renderBtnClick(1)}</div>
          <div className="rt">{renderBtnClick(2)}</div>
        </div>
        <div className="middle">
          <div className="lm">{renderBtnClick(3)}</div>
          <div className="mm">{renderBtnClick(4)}</div>
          <div className="rm">{renderBtnClick(5)}</div>
        </div>
        <div className="bottom">
          <div className="lb">{renderBtnClick(6)}</div>
          <div className="mb">{renderBtnClick(7)}</div>
          <div className="rb">{renderBtnClick(8)}</div>
        </div>
      </div>
      <div>
      <button
        className="restart"
        onClick={() => {
          history.push('/')
        }}
      >
        Go back
      </button>
      <button
        className="restart"
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
        }}
      >
        Play again
      </button>
      </div>
     
    </div>
  );
};

export default Game;
