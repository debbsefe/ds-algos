var isPalindrome = function (x: number) {
  if (x < 0) {
    return false;
  }

  return x === reversedInteger(x);
};

var reversedInteger = function (x: number) {
  var reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reversed;
};
