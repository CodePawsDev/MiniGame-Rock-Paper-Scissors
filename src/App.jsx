import { useState } from "react";
import GameControl from "./components/GameControl";
import ScoreDisplay from "./components/ScoreDisplay";
import FinalScoreDisplay from "./components/FinalScoreDisplay";
import ChoiceImages from "./components/ChoiceImages";
import ChoiceButtons from "./components/ChoiceButtons";

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
    setRoundWinner(winner)
  };

  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  const resetGame = () => {
    setPlayerChoice("rock");
    setCompChoice("rock");
    setPlayerScore(0);
    setCompScore(0);
    setPlaying(true);
    setRoundWinner("");
    setIsGameOver(false);
  };

  const handleEndGame = () => {
    setIsGameOver(true);
    setRoundWinner("");
    setPlaying(false);
    
    if (playerScore > compScore) {
      setGameWinner("player");
    } else if (playerScore < compScore) {
      setGameWinner("computer")
    } else {
      setGameWinner("tie")
    }
  }

  return (
    <div className="bg-sky-200 w-full h-screen">  
      <div className="flex flex-col justify-center items-center">
        <h1 className="sm:0 font-bold text-2xl sm:text-5xl py-5 sm:py-10">Rock Paper Scissors</h1>
        <section className="absolute bottom-5 sm:top-24 sm:left-10">
          <GameControl 
            isPaused={isPaused}
            togglePause={togglePause}
            handleEndGame={() => handleEndGame(playerScore, compScore)}
            resetGame={resetGame}
            isGameOver={isGameOver}
          />
        </section>
        <section className="relative w-3/5">
          {!isGameOver && (
          <ScoreDisplay compScore={compScore} playerScore={playerScore} />)}
  
          <FinalScoreDisplay 
            roundWinner={roundWinner}
            isGameOver={isGameOver}
            gameWinner={gameWinner}
            playerScore={playerScore}
            compScore={compScore}
          />
          
          <ChoiceImages compChoice={compChoice} playerChoice={playerChoice}/>
        </section>
        
        <ChoiceButtons 
            options={options} 
            handleChoice={handleChoice} 
            playing={playing} 
          />
      </div>  
    </div>
  );
}

export default App;