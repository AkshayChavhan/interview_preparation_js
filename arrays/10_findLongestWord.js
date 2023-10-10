function GetLongestWord(arr){
    let longestWord = "";
    for(const item of arr){
        if(item.length > longestWord.length) longestWord = item;
    }
    return longestWord;
}


const wordArray = ["apple", "banana", "cherry", "date","Akshays"];
const longestword = GetLongestWord(wordArray);
console.log(longestword);