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
    var sRoot = document.getElementById("num_Root");

    var a = input1.value;
    var b = input2.value;
    var c = sign.value;
    var squareRoot = sRoot.value;

    enviar(a, b, c);
    SquareRoot(squareRoot);

}

//Math.sqrt(number);

function SquareRoot(valueRoot) {

    result = Math.sqrt(parseFloat(valueRoot)).toFixed(2);

    document.getElementById("resultRoot").textContent = result;
    
}

function enviar(value1, value2, sign) {
    let sum = 0;

    if (value1 == "" || value2 == "") {
        document.getElementById("result").textContent = "0";
    } else {
        switch (sign) {
            case "+":
                sum = parseFloat(value1) + parseFloat(value2);
                break;
            case "-":
                let z = parseFloat(value1);
                let y = parseFloat(value2);
                sum = z - y;
                break;
            case "/":
                sum = parseFloat(value1) / parseFloat(value2);
                break;
            case "x":
            case "X":
            case "*":
                sum = parseFloat(value1) * parseFloat(value2);
                break
            case "%":
                sum = parseFloat(value1) % parseFloat(value2);
                break;
            default:
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                break;
        }
        document.getElementById("result").textContent = sum;
    }
}

