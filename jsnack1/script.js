const firstNameGuest = ["Andrea", "Giulia", "Riccardo", "Pietro", "Valerio", "Salvatore", "Pasquale", "Florian", "Alessio", "Michele"];

const lastNameGuest = ["Linza", "Carluccio", "Leone", "Corrado", "Leica", "Crea", "Spiller", "Collura", "Bono", "Isabelli"];

const guestName =[];



for (i = 0; i < 10; i++){
    const firstName = firstNameGuest[Math.floor(Math.random() * firstNameGuest.length)];
    
    const lastName = lastNameGuest[Math.floor(Math.random() * lastNameGuest.length)];
    
    
    const guest = `${firstName}` + " " + `${lastName}`;
    
    guestName.push(guest);
    console.log(guest)
    
}

