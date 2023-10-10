function GetReversedSentence(sentence) {
    const breakedSentence = sentence.split(" ");
    const rever = breakedSentence.map(word => word.split("").reverse().join(""));
    return rever.join(" ")
}


const inputSentence = "Hello world";
const reversedSentence = GetReversedSentence(inputSentence);
console.log(reversedSentence);
