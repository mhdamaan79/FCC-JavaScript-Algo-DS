function rot13(str) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ans = "";
  for( let i = 0; i < str.length; i++ ) {
    if( alphabets.indexOf(str[i]) >= 13 ) {
      ans += alphabets[alphabets.indexOf(str[i])-13];
    } else if( alphabets.indexOf(str[i]) < 13 && alphabets.indexOf(str[i]) > -1 ) {
      ans += alphabets[alphabets.indexOf(str[i])+13];
    } else {
      ans += str[i]
    }
  }
  return ans;
}

console.log(rot13("SERR PBQR PNZC"));
