const array1 = [];
const array2 = [];
const btnEqual = document.getElementById("btn-equal");

let numArray1 = 0
let numArray2 = 0
for (let i = 0; i <= 5; i++) {
    numArray1 = Math.floor(Math.random() * 10);
    array1.push(numArray1)

}

for (let i = 0; i <= 15; i++) {
    numArray2 = Math.floor(Math.random() * 10);
    array2.push(numArray2)

}


document.getElementById("first-length").innerHTML = `${array1.length}`
document.getElementById("second-length").innerHTML = `${array2.length}`

let diff = array1.length - array2.length;

diff = Math.abs(diff)
console.log(diff)

console.log(array1)
console.log(array2)
/* for (i = 0; i <= 40; i++) {
    document.getElementById("first").innerHTML = `${array1}`
    
    array1.push(i);
}*/

/*for (i = 0; i <= 20; i++) {
    array2.push(i);
    
}*/
btnEqual.addEventListener("click", function () {


    for (let i = 0; i < diff; i++) {

        if (array1.length < array2.length) {
            array1.push(2)
            document.getElementById("first-equal").innerHTML = `${array1.length}`
        }
        else if (array1.length > array2.length) {
            array2.push(3)
            document.getElementById("second-equal").innerHTML = `${array2.length}`
        }
        else {
            break;

        }
    }

    document.querySelector(".yeah").innerHTML = `FUNZIONA`

    console.log(array1)
    console.log(array2)


})