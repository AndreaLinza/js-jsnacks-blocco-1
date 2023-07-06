
const allNumber = [];
const numberEven=[];
const numberOdd =[];


for (i = 0; i <= 100; i++) {
    
    allNumber.push(i)
    if(allNumber.length % 2){
        numberEven.push(i);
    }
    else{
        numberOdd.push(i);
        
    }
    
}
let totNumberOdd = 0;
for (let i = 0; i < numberOdd.length; i++){
    totNumberOdd += numberOdd[i];
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

