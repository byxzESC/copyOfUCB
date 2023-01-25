function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  let newStr = '';
  for (let i = str.length - 1 ; i >= 0; i--) {
    newStr += str.charAt(i) 
  }
  return newStr;
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  for (let i = 0; i < str.length/2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i))
      return false;
  }
  return true;
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  let words = str.split(' ');
  for (let i = 0; i < words.length; i ++) {
    words[i].charAt(0).toUpperCase();
  }
  return words.join(' ');
};

module.exports = Algo;
