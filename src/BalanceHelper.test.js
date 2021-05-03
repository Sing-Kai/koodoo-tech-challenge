const balanceHelper = require('./BalanceHelper');

test('calculates difference between second and first element in array', ()=>{
  expect(balanceHelper.firstAndSecondBalanceDifference([0, 100])).toEqual(100);
});

test('calculates difference between elements in array', ()=> {
  expect(balanceHelper.getDifferenceBetweenBalances([-100, 0, 100, 200, 350])).toEqual([100, 100, 100, 150]);
});

test('should return true if array has vary values compared to initial balance difference', ()=>{
  const initialDifference = 100;
  const inputArray = [100, 100, 200]
  expect(balanceHelper.hasVaryingDifference(inputArray, initialDifference)).toBeTruthy();
});

test('should return false if array values are same as the inititial difference ', ()=>{
  const initialDifference = 100;
  const inputArray = [100, 100, 100]
  expect(balanceHelper.hasVaryingDifference(inputArray, initialDifference)).toBeFalsy();
});