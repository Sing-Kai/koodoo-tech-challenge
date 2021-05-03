const getBalance = (accountBalanceHistory) => {
  return accountBalanceHistory.map(a => a.account.balance.amount);
}  

const firstAndSecondBalanceDifference = (arr) => {
  const [first, second] = arr;
  return second - first;
}

//given an array of values return difference in between elements
// [100, 105, 110] -> [5, 10]
const getDifferenceBetweenBalances = (arr) => {
  return arr.slice(1).map((balance, idx) => (balance - arr[idx])); 
}

//checks array values are different or all the same
//initialDifference value should be calculated from firstAndSecondBalanceDifference
const hasVaryingDifference = (balanceDifferences, initialDifference) => {
  return balanceDifferences.some((val) => (val !== initialDifference));
}

module.exports = {
  getBalance,
  firstAndSecondBalanceDifference,
  getDifferenceBetweenBalances,
  hasVaryingDifference
}

