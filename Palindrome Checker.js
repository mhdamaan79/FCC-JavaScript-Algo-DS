function palindrome(str) {
  // removing all non-alphanumeric characters
  let stringArr = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>{}[\]\\\/]/gi, "");

  // convert our string to array, using split()
  stringArr = stringArr.toLowerCase().split("");

  // traverse over array elements using for loop
  for (let i = 0; i < Math.floor(stringArr.length / 2); i++) {
    if (stringArr[i] !== stringArr[stringArr.length - i - 1]) {
      return false; // condition: no, str is not a palindrome
    }
  }

  return true; // condition: yes, str is a palindrome
}

console.log(palindrome("eye")); // Output: true

//palindrome("eye") should return a boolean.

//palindrome("eye") should return true.

//palindrome("_eye") should return true.

//palindrome("race car") should return true.

//palindrome("not a palindrome") should return false.

//palindrome("A man, a plan, a canal. Panama") should return true.

//palindrome("never odd or even") should return true.

//palindrome("nope") should return false.

//palindrome("almostomla") should return false.

//palindrome("My age is 0, 0 si ega ym.") should return true.

//palindrome("1 eye for of 1 eye.") should return false.

//palindrome("0_0 (: /-\ :) 0-0") should return true.

//palindrome("five|\_/|four") should return false.
