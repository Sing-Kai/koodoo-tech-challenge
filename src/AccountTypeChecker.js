const balanceHelper = require('./BalanceHelper');

//Assumptions:
//account balance history has at least 3 records
//account doesn't skip a month
//balances always has an amount
//order of records goes from current month -> last month -> two months ago
const accountTypeChecker = (accountBalanceHistory) => {

  const balance = balanceHelper.getBalance(accountBalanceHistory);
  const initialDifference = balanceHelper.firstAndSecondBalanceDifference(balance);
  const balanceDifference = balanceHelper.getDifferenceBetweenBalances(balance);
  const isVariedAccount = balanceHelper.hasVaryingDifference(balanceDifference, initialDifference);

  return isVariedAccount ? "A" : "B";
};

module.exports = accountTypeChecker;