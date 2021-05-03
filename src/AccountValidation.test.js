const {hasMinimumOfThreeRecords} = require('./AccountValidation');

test('should return true if account has length minimum length of 3', () =>{
  const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
  ]

  expect(hasMinimumOfThreeRecords(accountBalanceHistory)).toBeTruthy();
});

test('should return false when less than 3 account balances', () =>{
  const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    }
  ]

  expect(hasMinimumOfThreeRecords(accountBalanceHistory)).toBeFalsy();
});