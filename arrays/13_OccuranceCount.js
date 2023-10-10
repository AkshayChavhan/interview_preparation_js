function GetCountOccurance(sentence) {
    let count = {};
    let newSentence = sentence.split("");
    for (const item of newSentence) {
        if (!count[item]) {
            count[item] = 1;
        } else {
            count[item] = ++count[item];
        }
    }
    return count;
}

const inputSentence = "Hellow worldw";
const countData = GetCountOccurance(inputSentence)
console.log(countData);