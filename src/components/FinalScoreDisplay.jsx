function FinalScoreDisplay({ roundWinner, isGameOver, gameWinner, playerScore, compScore }) {
    return (
      <>
        <p 
          className="py-4 font-extrabold sm:text-3xl text-black text-center">
            {roundWinner && roundWinner}
        </p>

        {isGameOver && (
            <div className="pb-2 sm:py-4 font-extrabold sm:text-2xl text-center">
            <p>Computer's Score: {compScore}</p>
            <p>Your Score: {playerScore}</p>
            <p>
                {gameWinner === "player"
                ? "Congratulations! You won the game!"
                : gameWinner === "computer"
                ? "Computer wins the game."
                : "It's a tie! The game ended in a draw."}
            </p>
            </div>
        )}
      </>
    );
  }
  
  export default FinalScoreDisplay;