/* JavaScript: Counts the number of vowels within a string 
 Example string: 'The quick brown fox'

Expected Output: 5
*/

function countVowels( strng ){
  
  const ENGLISH_VOWELS = "aeiouAEIOU";
  const VOWELS = ENGLISH_VOWELS.split('');
  let counter = 0;
  for (let i = 0; i < strng.length; i++){
    for (let t = 0; t < VOWELS.length; t++){   
      if( strng[i] === VOWELS[t]){
        counter++;
      }
    }
  }
  return counter
}
console.log(countVowels('a quick brown fox'));
console.log(countVowels('I just had to leave my house'));