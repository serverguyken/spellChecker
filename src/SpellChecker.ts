import { words, isWord, getWord, getExample, getDefinition } from "./words"

const levenshteinDistance = (str1: string, str2: string) => {
    const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
        track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
        track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1, // deletion
                track[j - 1][i] + 1, // insertion
                track[j - 1][i - 1] + indicator, // substitution
            );
        }
    }
    return track[str2.length][str1.length];
};
const findClosestWords = (w: string): string => {
    if (w === "") {
        return "Please provide a word for suggestion"
    }
    let result: any= "";
    let closestWords = words.sort((a: any, b: any) => levenshteinDistance(w, a.word) - levenshteinDistance(w, b.word));
    let closestWordsPercent = closestWords.filter((word: any) => levenshteinDistance(w, word.word) <= 1);
    let closestWord = closestWords.find((word: any) => levenshteinDistance(w, word.word) === 0);
    if (closestWord) {
        result = closestWord.word;
    }
    else if (closestWordsPercent.length > 0) {
        result = `Did you mean: ${closestWordsPercent[0].word} instead of ${w}?`;
    }
    else {
        result = `No suggestions found for ${w}`;
    }
    return result;
}



const checkWord = (w: string) => {
    if (w === "") {
        return "Please provide a word for suggestion"
    }
    let suggestion: string = "";
    let wordToLowerCase = w.toLowerCase()
    let wSplit = word.split("");
    for (word in wSplit) {
        if(isWord(wordToLowerCase)) {
            suggestion = "Correct spelling"
        }
        else {
            suggestion = findClosestWords(wordToLowerCase)
        }
    }
    return suggestion
}

console.log(checkWord("script"));
