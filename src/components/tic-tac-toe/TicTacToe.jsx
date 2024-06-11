import { useCallback, useEffect, useState } from "react";
import "./TicTacToe.css";

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  const calcWinner = useCallback((squares) => {
    const winningPatterns = [
      [0, 1, 2], // 1st row
      [3, 4, 5], // 2nd row
      [6, 7, 8], // 3rd row
      [0, 3, 6], // 1st col
      [1, 4, 7], // 2nd col
      [2, 5, 8], // 3rd col
      [0, 4, 8], // left to right diagonal
      [2, 4, 6], // right to left diagonal
    ];

    for (let idx = 0; idx < winningPatterns.length; idx++) {
      const [x, y, z] = winningPatterns[idx];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    setStatus(`It is ${isXTurn ? "X" : "O"}'s turn.`);
    return null;
  }, [isXTurn]);

  const handleClick = (currentSquare) => {
    if (isGameOver || squares[currentSquare] !== "") return;

    let squaresCopy = [...squares];

    squaresCopy[currentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(squaresCopy);

    if (calcWinner(squaresCopy) !== null) {
      setIsGameOver(true);
    }
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
    setIsGameOver(false);
  };

  useEffect(() => {
    if (!calcWinner(squares) && squares.every((cell) => cell !== "")) {
      // setIsGameOver(true);
      setStatus(`The game ended in a draw! Please restart the game.`);
    }
  }, [squares, isXTurn, calcWinner]);
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      {isGameOver ? (
        <h2>Winner is: {calcWinner(squares)}</h2>
      ) : (
        <h2>{status}</h2>
      )}

      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default TicTacToe;
