function GetReversedSentence(sentence) {
    let reverse = "";
    reverse = sentence.split("").reverse().join("");
    return reverse ;
}


const inputSentence = "Hello world";
const reversedSentence = GetReversedSentence(inputSentence);
console.log(reversedSentence);