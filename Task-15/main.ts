// QUESTION :15
// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guests : string []=["Hasan","Ahmed","Muhammad"];
let unableToAttend = "Ahmed";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Rafeya";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
