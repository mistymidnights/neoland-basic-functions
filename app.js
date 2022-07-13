/* Iteración #1: Buscar el máximo */

const sum = (numberOne, numberTwo) => {
    return (numberOne > numberTwo) ? numberOne : numberTwo;
}
    console.log(sum(183, 267));


/* Iteración #2: Buscar la palabra más larga */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman molon', 'Captain M.'];
const findLongestWord = (list) => {
    let longestWord = "";
    list.forEach((element) => {
        longestWord = element.length > longestWord.length ? element : longestWord;
    })
    return longestWord;
}

    console.log(findLongestWord(avengers));  