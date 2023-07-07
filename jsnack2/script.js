
const allNumber = [];
const numberEven = [];
const numberOdd = [];
// let somma = 0;

for (let i = 0; i < 5; i++) {
    // const numero = Math.floor(Math.random() * 100 + 1);
    // if(i%2 !== 0){
    //     somma+=numero;
    // }
    const numero = Math.floor(Math.random() * 100 + 1)
    allNumber.push(numero)
    if (i % 2 !== 0 ) {
        numberOdd.push(numero);
    }
    else {
        numberEven.push(numero);

    }

}

let totNumber = 0;
for (let i = 0; i < allNumber.length; i++) {
    totNumber += allNumber[i];
    document.getElementById("tot-number").innerHTML = `${totNumber}`
}
let totNumberEven = 0;
for (let i = 0; i < numberEven.length; i++) {
    totNumberEven += numberEven[i];
    document.getElementById("tot-even").innerHTML = `${totNumberEven}`
}
let totNumberOdd = 0;
for (let i = 0; i < numberOdd.length; i++) {
    totNumberOdd += numberOdd[i];
    document.getElementById("tot-odd").innerHTML = `${totNumberOdd}`
}


/*const totNumberOdd = 0;
const sumWithInitial = numberOdd.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    totNumberOdd
    );
    console.log(sumWithInitial)

 */
console.log(totNumberOdd)
console.log(allNumber)
console.log(numberEven)
console.log(numberOdd)

