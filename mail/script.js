// Lista degli invitati
const listaInvitati = ["marcorossi@gmail.com", "giovannirossi@gmail.com", "michelerossi@gmail.com", "federicarossi@gmail.com", "claudiorossi@gmail.com"];

const message = document.querySelector(".messaggio");
console.log(message);
const myMail = document.querySelector("input");
console.log(myMail);
const myButton = document.querySelector("button");
console.log(myButton);

// Messaggio di benvenuto se in lista altrimenti rifiuto
myButton.addEventListener("click",
    function(){
        let userEmail = myMail.value;
        console.log(userEmail);
        if (listaInvitati.includes(userEmail)){
            message.append ("Benvenuto!")
        } else {
            message.append ("Non sei in lista!")
        }       
    }
)