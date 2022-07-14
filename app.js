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


/* **Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan 
los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    let result = [];
    for (let index = 0; index < duplicates.length; index++) {
        if (result.includes(duplicates[index])) {
        } else {
            result.push(duplicates[index]);
        }
    }
    console.log(result);
  }
  removeDuplicates(duplicates);
    


/*   **Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, 
en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función: */

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
    ];
    const finderName = (nameList) => {
    for (let finderNameList of nameFinder) {
        console.log(finderNameList.includes(nameList));
        }
    }
    console.log(nameFinder.includes('Tony'));
    console.log(nameFinder.indexOf('Tony'));

    
/**Iteration #8: Contador de repeticiones**
Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
let totalCount = [];
const repeatCounter = (elements) =>{
    counterWords.forEach((element) => {
        totalCount[element] = totalCount[element] + 1 || 1;
    })
    return totalCount;
  }
  console.log(repeatCounter(counterWords));