import { imageAssets } from "../data/imageAssets";

function ChoiceImages({ compChoice, playerChoice }) {
  return (
    <section className="flex flex-col sm:flex-row sm:justify-evenly sm:py-4">
      {/* computer choice */}
      <div className="flex justify-start">
        <img
          src={imageAssets[`comp_${compChoice}`].src}
          alt={imageAssets[`comp_${compChoice}`].alt}
          className="w-[150px] sm:max-w-[200px] lg:max-w-[300px] "
        />
      </div>
      

      {/* player choice */}
      <div className="flex justify-end">
        <img
          src={imageAssets[`player_${playerChoice}`].src}
          alt={imageAssets[`player_${playerChoice}`].alt}
          className="w-[150px] sm:max-w-[200px] lg:max-w-[300px]"
        />

      </div>
      
    </section>
  );
}

export default ChoiceImages;