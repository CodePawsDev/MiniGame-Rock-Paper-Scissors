import { useState } from "react";
import img_comp_paper from "./assets/images/comp_paper.png";
import img_comp_rock from "./assets/images/comp_rock.png";
import img_comp_scissors from "./assets/images/comp_scissors.png";
import img_player_paper from "./assets/images/player_paper.png";
import img_player_rock from "./assets/images/player_rock.png";
import img_player_scissors from "./assets/images/player_scissors.png";

function App() {
  const options = ["rock", "paper", "scissors"];

  const [playerChoice, setPlayerChoice] = useState("rock");
  const [compChoice, setCompChoice] = useState("rock");
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false); 
  const [roundWinner, setRoundWinner] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameWinner, setGameWinner] = useState("");

  const randomCompChoice = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const checkWinner = (player, comp) => {
    if (player === comp) return "It's a tie!";
    if (
      (player === "rock" && comp === "scissors") ||
      (player === "paper" && comp === "rock") ||
      (player === "scissors" && comp === "paper")
    ) {
      setPlayerScore(playerScore + 1);
      return "You win!";
    }
    setCompScore(compScore + 1);
    return "Computer wins!";
  };

  const handleChoice = (playerChoose) => {
    if (!playing) return;
    if (isPaused) return;

    const compChoose = randomCompChoice();
    setPlayerChoice(playerChoose);
    setCompChoice(compChoose);
    const winner = checkWinner(playerChoose, compChoose);
    setResult(winner);
    setRoundWinner(winner)
  };

  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  const resetGame = () => {
    setPlayerChoice("rock");
    setCompChoice("rock");
    setResult("");
    setPlayerScore(0);
    setCompScore(0);
    setPlaying(true);
    setRoundWinner("");
  };

  const handleEndGame = () => {
    setIsGameOver(true);
    setRoundWinner("");
    
    if (playerScore > compScore) {
      setGameWinner("player");
    } else if (playerScore < compScore) {
      setGameWinner("computer")
    } else {
      setGameWinner("tie")
    }
  }

  const renderedPlayerChoice = options.map((option) => {
    return (
      <button
        key={option}
        onClick={() => handleChoice(option)}
        disabled={!playing}
        className="py-2 rounded-xl bg-green-700 w-[150px] m-3 font-semibold text-2xl text-white"
      >
        {option}
      </button>
    );
  })

  return (
    <div className="bg-amber-100 w-full sm:h-screen">  
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl sm:text-5xl py-10">Rock Paper Scissors</h1>
        <section className="grid grid-cols-4 gap-2">
          <button 
            className={`w-[120px] py-2 ${isPaused ? "bg-yellow-400 text-black" : "bg-red-800"} rounded-xl font-semibold text-white`}
            onClick={togglePause}
          >{isPaused ? "Resume" : "Pause"}
          </button>
          <button
            className="w-[120px] py-2 bg-black rounded-xl font-semibold text-white"
            onClick={handleEndGame}
          >End Game
          </button>
          <div></div>
          <button 
            className="w-[120px] py-2 bg-black rounded-xl font-semibold text-white"
            onClick={resetGame}
          >Reset
          </button>          
        </section>
        <section className="hidden max-w-[800px] sm:grid sm:grid-cols-4 gap-2 font-semibold pt-5">
          <p>Computer's Score: {compScore}</p>
          <div></div>
          <div></div>
          <p>Your Score: {playerScore}</p>
        </section>
        <p className="py-4">{roundWinner && roundWinner}</p>

        {isGameOver && (
        <div className="py-4">
          <p>Total Computer's Score: {compScore}</p>
          <p>Total Your Score: {playerScore}</p>
          <p>
            {gameWinner === "player"
              ? "Congratulations! You won the game!"
              : gameWinner === "computer"
              ? "Computer wins the game."
              : "It's a tie! The game ended in a draw."}
          </p>
        </div>
      )}

        <section className="max-w-[800px] grid sm:grid-cols-2 gap-8 py-4">
            {/* computer choice */}
            <img
              src={
                compChoice === "rock"
                  ? img_comp_rock
                  : compChoice === "paper"
                  ? img_comp_paper
                  : img_comp_scissors
              }
              alt="Computer's Choice"
            />

            {/* player choice */}  
            <img
              src={
                playerChoice === "rock"
                  ? img_player_rock
                  : playerChoice === "paper"
                  ? img_player_paper
                  : img_player_scissors
              }
              alt="Player's Choice"
            />     
        </section>
        <section className="py-4 flex flex-col sm:flex-row">{renderedPlayerChoice}</section>
      </div>  
    </div>
  );
}

export default App;
