const accountBalanceHistory = require('./AccountBalanceHistory');
const accountTypeChecker = require('./AccountTypeChecker');
const {hasMinimumOfThreeRecords} = require('./AccountValidation');

if(hasMinimumOfThreeRecords(accountBalanceHistory)){
  const accountType = accountTypeChecker(accountBalanceHistory)
  console.log(`Account type ${accountType}`);
} else{
  console.log('Not enough data')
}