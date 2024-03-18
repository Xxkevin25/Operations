// function removeExclamationMark(str) {
//   // Check if the last character is an exclamation mark
//   if (str.slice(-1) == "!") {
//     // Remove the exclamation mark by slicing the string from the start to the second last character
//     return str.slice(0, -1);
//   } else {
//     // If the last character is not an exclamation mark, return the string as it is
//     return str;
//   }
// }

// console.log(removeExclamationMark("hi! hi!!!"));


//const list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

//console.log(list.sort((a, b) => a  - b));


function getValueAndEnviar() {
    var input1 = document.getElementById("num1");
    var input2 = document.getElementById("num2");
    var sign = document.getElementById("sign");

    let a = input1.value;
    let b = input2.value;
    let c = sign.value;

    let sum = 0;

    if (a == "" || b == "") {
        console.log("Empty Value entered");
        document.getElementById("result").textContent = "0";
    } else {
        switch (c) {
            case "+":
                sum = parseFloat(a) + parseFloat(b);
                break;
            case "-":
                let z = parseFloat(a);
                let y = parseFloat(b);
                sum = z - y;
                break;
            case "/":
                sum = parseFloat(a) / parseFloat(b);
                break;
            case "x":
            case "X":
            case "*":
                sum = parseFloat(a) * parseFloat(b);
                break
            case "%":
                sum = parseFloat(a) % parseFloat(b);
                break;
            default:
                sum = 0;
                break;
        }
        console.log(sum);
        document.getElementById("result").textContent = sum;
    }

}




//Math.sqrt(number);

function SquareRoot() {

    let sRoot = document.getElementById("num_Root");
    let squareRoot = sRoot.value;
    let result = 0;

    result = Math.sqrt(parseFloat(squareRoot)).toFixed(2);


    if (squareRoot == "") {
        console.log("Empty Value entered");
        document.getElementById("resultRoot").textContent = "0";
    }
    else {
        console.log(result);
        document.getElementById("resultRoot").textContent = result;
    }

}


