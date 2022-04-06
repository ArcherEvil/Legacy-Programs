function button() {
    let input = document.getElementById("box").value;
    
    let bef = ""
    let calculation = []
    for (let n = 0; n < input.length; n++) { // loop para adicionar na lista
        if (!isNaN(input[n])) {
            bef += String(input[n])
            continue
        
        }
        else if ( input[n] == "+" || input[n] == "-" || input[n] == "*" || input[n] == "/") {
            calculation.push(bef)
            calculation.push(input[n])
            bef = ""
            continue
        }
        else {
            continue
        }
    }
    calculation.push(bef)

    // variaveis para a proxima for loop
    var result = parseFloat("0");
    const operators = ["+", "-", "*", "/", ]
    var last = "+"
    for (let i = 0; i < calculation.length; i++) {
        if ( calculation[i] == "+" || calculation[i] == "-" || calculation[i] == "*" || calculation[i] == "/") {
 
            last = calculation[i]
            continue
        }
        else {
            if (last == '+') {
 
                result = result + parseFloat(calculation[i])
            }
            else if (last == '*') {

                result = result * parseFloat(calculation[i])
            }
            else if (last == '-') {

                result = result - parseFloat(calculation[i])
            }
            else if (last == '/') {

                result = result / parseFloat(calculation[i])
            }
            
        }
    }
    let resultado = document.getElementById("result")
    resultado.innerText ="Result: " +  result
}