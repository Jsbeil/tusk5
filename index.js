let x = [0.3, 5.2, 9.4, 8];
let y = [43, 5, 3.4, 8, 20];

function sumArr(arr){
    let temp = 0;
    let sum = arr.reduce((acumulator, currenntValue) => acumulator + currenntValue + temp);
    return sum;
}
function sumZ(){
    let z = sumArr(x);
    let z1 = sumArr(y);
    let rez = (z + z1)/2;
    console.log(rez);
}

