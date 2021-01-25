function Add(x,y){
    console.log(x+y);
}
function sub(x,y){
    console.log(x-y);
}
function mult(x,y){
    console.log(x*y);
}
function div(x,y){
    if (y>0){
        console.log(x/y)
    }
    else{
        console.log("division by zero")
    }
}
function sum(arr) {
    var a = 0;
    arr.forEach(number => {
        a = a + number;
    });
    console.log(a);

}

function multiply(arr) {
    var product = 1;
    arr.forEach(number => {
        product = product * number;
    });
    console.log(product);
}
(function () {
    let z = eval(prompt("Choose an operation\n 1 for addition by array \n 2 for by array multiplication \n 3 for subtraction \n 4 for division \n 5 for simple add \n 6 for simple mult"))
    if (z == 1 | z == 2) {
        let arr = [];
        let size = prompt("how many number do have?");
        for (let i = 0; i < parseInt(size); i++) {
            arr[i] = eval(prompt("item number " + (i + 1)));
        }

        if (z == 1) {
            sum(arr);
        } else {
            multiply(arr)
        }
    } else {
        let x = eval(prompt("Enter the first number"))
        let y = eval(prompt("Enter the second number"))
        if (z == 3) {
            subtract(x, y);}
        else if( z==4) {
            divide(x, y);
        }
        else if (z == 5) {
            Add(x, y);
        }
        else if (z == 6) {
            mult(x, y);
        }


    }
})()