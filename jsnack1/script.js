const firstNameGuest = ["Andrea", "Giulia", "Riccardo", "Pietro", "Valerio", "Salvatore", "Pasquale", "Florian", "Alessio", "Michele"];
const lastNameGuest = ["Linza", "Carluccio", "Leone", "Corrado", "Leica", "Crea", "Spiller", "Collura", "Bono", "Isabelli"];

const containerGuest = document.querySelector(".container-guest");

const guestName =[];
const btnGenerator = document.getElementById("btn-generator");
const btnReset = document.getElementById("btn-reset");


btnGenerator.addEventListener("click", function(){

    
    for (i = 0; i < 20; i++){
        const firstName = firstNameGuest[Math.floor(Math.random() * firstNameGuest.length)];
        
        const lastName = lastNameGuest[Math.floor(Math.random() * lastNameGuest.length)];
        
        const guest =  `${firstName}` + " " + `${lastName}`;
        containerGuest.innerHTML += `<div class"col">${guest}</div>`;
        
        guestName.push(guest);
        console.log(guest)
        
    }
    
})
btnReset.addEventListener("click", function(){

    
    location.reload()
    
})