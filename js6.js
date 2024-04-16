


// JavaScript: Find the first not repeated character 
// Sample arguments : 'abacddbec'

function findNonRepeatedCharacter(letters){
  let repeated;
  let result = ""
  for (let i = 0; i < letters.length; i++){
    repeated = 0;
    for (let t = 0; t < letters.length; t++){
      if (letters[i] == letters[t]){
        repeated++
      }
    }
    if (repeated == 1){
      result = letters[i];
      break;
    }
  }
  return result;
}

console.log(findNonRepeatedCharacter("abacddbec"))

