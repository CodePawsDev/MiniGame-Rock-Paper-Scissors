function GameControl({ isPaused, togglePause, handleEndGame, resetGame, isGameOver }) {
    return (
      <div className="py-4 flex sm:flex-col w-full">
        <button 
            className={`w-[90px] sm:mb-3 sm:w-[120px] py-2 ${isPaused ? "bg-teal-800 text-black" : "bg-orange-500"} rounded-xl font-semibold text-white`}
            onClick={togglePause}
            disabled={isGameOver}
        >{isPaused ? "Resume" : "Pause"}
        </button>
        <button
            className="w-[90px] mx-4 sm:mx-0 sm:mb-3 sm:w-[120px] py-2 bg-black rounded-xl font-semibold text-white"
            onClick={handleEndGame}
        >End Game
        </button>
        <button 
            className="w-[90px] sm:w-[120px] py-2 bg-red-800 rounded-xl font-semibold text-white"
            onClick={resetGame}
            disabled={isPaused}
        >Reset
        </button>     
      </div>
    );
  }
  
  export default GameControl;