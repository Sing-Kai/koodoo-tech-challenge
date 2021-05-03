const accountBalanceHistory = require('./AccountBalanceHistory');
const accountTypeChecker = require('./AccountTypeChecker');
const {hasMinimumOfThreeRecords} = require('./AccountValidation');

//to calculate account type account balance must have at least 3 records
if(hasMinimumOfThreeRecords(accountBalanceHistory)){
  const accountType = accountTypeChecker(accountBalanceHistory)
  console.log(`Account type ${accountType}`);
} else{
  console.log('Not enough data')
}