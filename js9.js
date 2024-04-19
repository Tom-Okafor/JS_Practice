

//FIND THE LONGEST WORD IN A SENTENCE

let sentence = "Food Science and Technologicalized Developmentals";
  let resultIndex = 0;
let sentenceArray = sentence.split(" ");


for (let i = 1; i < sentenceArray.length; i++){
  if ( sentenceArray[resultIndex].length < sentenceArray[i].length ){
    resultIndex = i
  }
}

console.log(sentenceArray[resultIndex]);