function ScoreDisplay({ compScore, playerScore }) {
  return (
    <section className="hidden sm:flex justify-evenly items-center font-semibold text-lg">
        <p>Computer's Score: {compScore}</p>
        <p>Your Score: {playerScore}</p>
    </section>
  );
}

export default ScoreDisplay;