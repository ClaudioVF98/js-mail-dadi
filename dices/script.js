// Lista Numeri
const listaNumeri = [1, 2, 3, 4, 5, 6];

const myButton = document.querySelector ("button");
const user = document.querySelector (".user");
const computer = document.querySelector (".computer");
const message = document.querySelector (".messaggio");

// Generare un numero a caso per utente e per computer
myButton.addEventListener ("click",
    function() {
        const userNum = Math.floor((Math.random() * 6) + 1);
        user.append(userNum);

        const computerNum = Math.floor((Math.random() * 6) + 1);
        computer.append(computerNum);
         
        if (userNum > computerNum) {
            message.append("User vince!");
        } else if (computerNum > userNum) {
            message.append("Computer vince!")
        } else {
            message.append("Pareggio")
        }
    }
)