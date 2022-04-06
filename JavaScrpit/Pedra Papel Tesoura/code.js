// Input do usuario
let user = "Pedra";
// Input da CPU
let cpu = Math.floor(Math.random() * 3);

let teste = 1


var PPT = {
    0 : 'Pedra',
    1 : 'Papel',
    2 : 'Tesoura'
}

console.log('O usuario escolheu: ' + user + "\n")
console.log('O cpu escolheu: ' + PPT[cpu] + "\n")

if (user == PPT[cpu]) {
    console.log("Empate")
}
else {
    switch (user) {
        case "Pedra":
            switch (PPT[cpu]) {
                case "Papel":
                    console.log("A CPU GANHOU ! \n")
                    break;
            
                case "Tesoura":
                    console.log("O USUARIO GANHOU ! \n")
                    break;
            }
            break;
    
        case "Papel":
            case "Tesoura":
                console.log("A CPU GANHOU ! \n")
                break;
        
            case "Pedra":
                console.log("O USUARIO GANHOU ! \n")
                break;
            
        
        case "Tesoura":
            case "Pedra":
                console.log("A CPU GANHOU ! \n")
                break;
        
            case "Papel":
                console.log("O USUARIO GANHOU ! \n")
                break;
            
    }
}