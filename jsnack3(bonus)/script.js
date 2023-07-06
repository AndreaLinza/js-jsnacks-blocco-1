const array1 = [];
const array2 = [];
const btnEqual = document.getElementById("btn-equal");

let numArray1 = 0
let numArray2 = 0
for (let i = 0; i <=8; i++){
    numArray1 = Math.floor(Math.random() * 8 + 1);
    array1.push(numArray1)
    
}
array1.push(numArray1);
for (let i = 0; i <=8; i++){
    numArray2 = Math.floor(Math.random() * 8 - 1);

}
//Math.floor(Math.random() * 15 + 1);



document.getElementById("first").innerHTML = `${array1}`
document.getElementById("second").innerHTML = `${array2}`
/* for (i = 0; i <= 40; i++) {
document.getElementById("first").innerHTML = `${array1}`

    array1.push(i);
}*/
console.log(array1[numArray1])

/*for (i = 0; i <= 20; i++) {
    array2.push(i);

}*/
console.log(array2)

btnEqual.addEventListener("click", function () {



    if (array2.length < array1.length) {
        for (i = array2.length; i < array1.length; i++) {

        }

    }

})