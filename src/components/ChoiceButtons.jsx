function ChoiceButtons({ options, handleChoice, playing}) {
    return (
        <div className="sm:py-4 flex flex-row items-center pt-5">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleChoice(option)}
              disabled={!playing}
              className="mx-2 py-2 rounded-xl bg-green-700 w-[90px] sm:w-[150px] sm:font-semibold sm:text-2xl text-white"
            >
              {option}
            </button>
          ))}
        </div>
    );
}     

export default ChoiceButtons;