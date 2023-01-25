const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("should return a reverse version string", () => {
      const obj = new Algo();
      let str = 'book';
  
      expect(obj.reverse(str)).toEqual('koob');
    })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should return boolean", () => {
      const obj = new Algo();
      let str = 'deed';
  
      expect(obj.isPalindrome(str)).toEqual(true);
    })
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("should return a capitalized string", () => {
      const obj = new Algo();
      let str = 'book';
  
      expect(obj.capitalize(str)).toEqual('Book');
    })
  });
});
