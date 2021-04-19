const {  bowl  } = require('/Users/lucy.donnelly/Documents/md-monthly-bootcamps/apprentice-boot-camp-fundamentals-2/exercises/javascript/main/bowling/bowling.js')

describe('Bowling tests', () => {
  test('GIVEN an array of scores that are all 0, WHEN the total score is calculated from the array of scores, THEN it should return 0 ', () => {
    const rolls = [0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0 ,0,0]; 
    const result = bowl(rolls)
    expect(result).toEqual(0)
  }); 
});


