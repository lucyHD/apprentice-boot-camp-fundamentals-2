

const bowl = (rolls) => {
        // return scoreArray.reduce( (total, currentVal) => total + currentVal,0)

        let score = 0;

         for(let i = 0; i < rolls.length; i += 2){

              score += rolls[i]
              score += rolls[i+1]



         }

         return score;

}

module.exports = {
    bowl
}; 