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


function BasicOperation() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let c = document.getElementById("sign").value;

    let result = 0;

    if (isNaN(a) || isNaN(b)) {
        alert("Invalid input: Please enter valid numbers.");
        document.getElementById("result").textContent = "";
    } else {
        switch (c) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                if (b === 0) {
                    alert("Division by zero is not allowed.");
                    document.getElementById("result").textContent = "";

                } else {
                    result = a / b;
                }
                break;
            default:
                alert("Unexpected error occurred.");
                break;
        }
        console.log("Result: ", result);
        document.getElementById("result").textContent = result;
    }
}





function SquareRoot() {

    let squareRoot = parseFloat(document.getElementById("num_Root").value);
    let result = 0;

    result = Math.sqrt(parseFloat(squareRoot)).toFixed(2);


    if (isNaN(squareRoot) || squareRoot == "") {
        console.log("Empty Value entered");
        document.getElementById("resultRoot").textContent = "";
        alert("Invalid input: Please enter valid numbers.");
    }
    else {
        console.log(result);
        document.getElementById("resultRoot").textContent = result;
    }

}




class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    // Método para sumar números imaginarios
    add(other) {
        let realPart = this.real + other.real;
        let imaginaryPart = this.imaginary + other.imaginary;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Método para representar el número complejo como una cadena
    toString() {
        if (this.imaginary >= 0) {
            return `${this.real} + ${this.imaginary}i`;
        } else {
            return `${this.real} - ${Math.abs(this.imaginary)}i`;
        }
    }
}

let QuadraticFormula = () => {
    let a = parseFloat(document.getElementById("A").value);
    let b = parseFloat(document.getElementById("B").value);
    let c = parseFloat(document.getElementById("C").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Empty or invalid value entered");
        document.getElementById("resultCuadratic").innerHTML = "";
        alert("Invalid input: Please enter valid numbers.");
    } else {
        let discriminant = b ** 2 - 4 * a * c;

        if (discriminant >= 0) {
            let sqrtDiscriminant = Math.sqrt(discriminant);
            let result1 = ((-b + sqrtDiscriminant) / (2 * a)).toFixed(2);
            let result2 = ((-b - sqrtDiscriminant) / (2 * a)).toFixed(2);

            document.getElementById("resultCuadratic").innerHTML = `x = ${result1} <br/>x = ${result2}`;
        } else {
            let realPart = -b / (2 * a);
            let imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
            let result1 = new ComplexNumber(realPart.toFixed(2), imaginaryPart.toFixed(2));
            let result2 = new ComplexNumber(realPart.toFixed(2), -imaginaryPart.toFixed(2));

            document.getElementById("resultCuadratic").innerHTML = `x = ${result1.toString()} <br/>x = ${result2.toString()}`;
        }
    }
}



class Fraccion {
    constructor(numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }

    simplify() {
        const gcd = (a, b) => {
            if (b === 0) {
                return a;
            }
            return gcd(b, a % b);
        };

        const commonDivisor = gcd(this.numerador, this.denominador);
        this.numerador /= commonDivisor;
        this.denominador /= commonDivisor;
    }
}

let FractionsSubmission = () => {
    //fraccion numero1
    let a = parseFloat(document.getElementById("Fnum1").value);
    let b = parseFloat(document.getElementById("Fnum2").value);
    //fraccion numero2
    let c = parseFloat(document.getElementById("Fnum3").value);
    let d = parseFloat(document.getElementById("Fnum4").value);
    //signo
    let key = document.getElementById("key").value;
    //numerador and denominador
    let result1 = 0;
    let result2 = 0;

    if (b == 0 || d == 0) {
        alert("Error: Denominator can't be 0.");
        document.getElementById("Frac_resultOne").innerHTML = "";
        document.getElementById("Frac_resultTwo").innerHTML = "";

    } else if (isNaN(a) || isNaN(c)) {
        alert("Invalid input: Please enter valid numbers.");
        document.getElementById("Frac_resultOne").innerHTML = "";
        document.getElementById("Frac_resultTwo").innerHTML = "";
    }


    if (a == 0 && c == 0) {
        document.getElementById("Frac_resultOne").innerHTML = 0;
        document.getElementById("Frac_resultTwo").innerHTML = 0;
    } else {


        switch (key) {
            case '+':
                result1 = (a * d + b * c);
                result2 = (b * d);
                break;
            case '-':
                result1 = (a * d - b * c);
                result2 = (b * d);
                break;
            case '*':
                result1 = (a * c);
                result2 = (b * d);
                break;
            case '/':
                result1 = (a * d);
                result2 = (b * c);
                break;
            default:
                alert("Unexpected error occurred.");
                break;
        }

        let fractionResult = new Fraccion(result1, result2);
        fractionResult.simplify();

        document.getElementById("Frac_resultOne").innerHTML = fractionResult.numerador;
        document.getElementById("Frac_resultTwo").innerHTML = fractionResult.denominador;
    }
}







//5 20 32





