const {  bowl  } = require('/Users/lucy.donnelly/Documents/md-monthly-bootcamps/apprentice-boot-camp-fundamentals-2/exercises/javascript/main/bowling/bowling.js')

describe('Bowling tests', () => {
  test('GIVEN an array of scores that are all 0, WHEN the array of scores is passed to the bowl function, THEN the bowl function should return 0 ', () => {
    const rolls = [0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0 ,0,0]; 
    const result = bowl(rolls)
    expect(result).toEqual(0)
  }); 
  test('GIVEN an array of scores that are all 1, WHEN the array of scores is passed to the bowl function, THEN the bowl function should return 20 ', () => {
    const rolls = [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1 ,1,1]; 
    const result = bowl(rolls)
    expect(result).toEqual(20)
  }); 
  test('GIVEN an array of scores where one frame equals 10, WHEN the array of scores is passed to the bowl function, THEN the bowl function should return 20 ', () => {
    const rolls = [5,5, 1,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0 ,0,0]; 
    const result = bowl(rolls)
    expect(result).toEqual(12)
  }); 
  test('GIVEN an array of scores where one roll equals 10, WHEN the array of scores is passed to the bowl function, THEN the bowl function should return 20 ', () => {
    const rolls = [10, 1,1, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0 ,0,0]; 
    const result = bowl(rolls)
    expect(result).toEqual(14)
  }); 
  
});



