//PUTTING OBJECTS AND FUNCTIONS TOGETHER


function handleGuestWelcome() {
  let welcomeMessage = "You are welcome";
  
  function welcomeGuest() {
    console.log(welcomeMessage);
  }
  
  function resetWelcomeMessage(guestName) {
    welcomeMessage = `Dear ${guestName}, you are welcome!`;
  }
  
  return {
    welcomeGuest: welcomeGuest,
    resetMessage: resetWelcomeMessage
  }
}

const welcomeGuestOne = handleGuestWelcome();
welcomeGuestOne.welcomeGuest();
welcomeGuestOne.resetMessage(prompt("Your name please?", 'name'));
welcomeGuestOne.welcomeGuest();
