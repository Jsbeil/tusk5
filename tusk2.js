
function factorial(a){
    let temp = 1;
    for(let i = 1 ; i <= a ; i ++){
        temp *= i ;
    }
    return temp;
}

function tusk2(){
    let x = +prompt("введите число");
    let y = +prompt("введите число");

    let count = (factorial(x) + factorial(y))/factorial(x+1);
    alert(count)
}

