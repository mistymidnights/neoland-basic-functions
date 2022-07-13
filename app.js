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


/* Iteración #3: Calcular la suma/cúmulo */

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(listNum) {
    let acc = 0;
    for(let value of listNum){
        acc += value;
    }
    return acc;
}
let sumTotal = sumAll(numbers);
console.log(sumAll(numbers));


/* Iteración #4: Calcular el promedio */

const numbersPromedio = [12, 21, 38, 5, 45, 37, 6];
const average = (listNumbers) => {
    return sumAll(listNumbers) / listNumbers.length;
}

let promedio = average(numbersPromedio);
console.log(promedio);


/* Iteración #5: Calcular promedio de strings */
/* Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud 
del string y lo sume. Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(list) {
    let totalMixed = 0;
  for (const element of list) {
    if (typeof element === 'string'){
        totalMixed = totalMixed + element.length;
    } else if (typeof element === 'number'){
        totalMixed = totalMixed + element;
        
    }
    
  }
  console.log(totalMixed);
}
averageWord(mixedElements);