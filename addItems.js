// Function to add Cards

function addCards() {

    document.getElementById('addCardBtn').addEventListener('click', function (event) {
        event.preventDefault();

        //Fetching details from input field
        const cardDetails = document.getElementById('cardDets').value;

        if (!cardDetails) {
            alert("Please enter card details.");
            console.log("Please enter card details.");
            return;
        }

        else {

            const userData = localStorage.getItem('StoredCurrUser');
            const parsedData = JSON.parse(userData);

            if (!parsedData.cards) {
                parsedData.cards = [];
            }
            parsedData.cards.push(cardDetails); 

            localStorage.setItem('StoredCurrUser', JSON.stringify(parsedData));

           
            document.getElementById('cardDets').value = '';
            console.log('Updated cards', parsedData.cards);
        }

        
    })

}

// Function to remove cards
function removeCards(){
    document.getElementById('removeCardBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const cardDetails = document.getElementById('cardDets').value;

        if (!cardDetails) {
            alert("Please enter card details.");
            console.log("Please enter card details.");
            return;
        }

        else{
            const userData = localStorage.getItem('StoredCurrUser');
            const parsedData=JSON.parse(userData);

            const ind=parsedData.cards.indexOf(cardDetails);

            if(ind===-1){
                alert('Card not found');
                console.log('Card not found');
                return;
            }

            parsedData.cards.splice(ind,1);

            localStorage.setItem('StoredCurrUser',JSON.stringify(parsedData));

            document.getElementById('cardDets').value = '';
            console.log('Updated cards after removal', parsedData.cards);
        }

    });
}

// Functuin to edit cards

function editCards() {
    document.getElementById('editCardBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const cardDetails = document.getElementById('cardDets').value;

        if (!cardDetails) {
            alert("Please enter card details to edit.");
            console.log("Please enter card details to edit.");
            return;
        } else {
            const userData = localStorage.getItem('StoredCurrUser');
            const parsedData = JSON.parse(userData);

            const cardIndex = parsedData.cards.indexOf(cardDetails);

            if (cardIndex === -1) {
                alert("Card not found.");
                return;
            }

            // Prompt for new card details
            const newCardDetails = prompt("Enter new card details:", cardDetails);

            if (newCardDetails) {
                parsedData.cards[cardIndex] = newCardDetails;

                // Save updated user data back to localStorage
                localStorage.setItem('StoredCurrUser', JSON.stringify(parsedData));

                document.getElementById('cardDets').value = '';
                console.log('Updated cards after edit', parsedData.cards);
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const userData = localStorage.getItem('StoredCurrUser');

    if (!userData) {
        console.error('User not found. Unable to display cards.');
        return;
    }

    const parsedData = JSON.parse(userData);
    console.log('Cards:', parsedData.cards);

    addCards();
    removeCards();
    editCards();

});

// Function to add Tickets

function addTicket() {

    document.getElementById('addTicketBtn').addEventListener('click', function (event) {
        event.preventDefault();

        //Fetching details from input field
        const ticketDetails = document.getElementById('ticketDets').value;

        if (!ticketDetails) {
            alert("Please enter ticket details.");
            console.log("Please ticket card details.");

        }

        else {
            
            const userData = localStorage.getItem('StoredCurrUser');
            const parsedData = JSON.parse(userData);

            if (!parsedData.tickets) {
                parsedData.tickets = [];
            }

            parsedData.tickets.push(ticketDetails); 
    
            // Save updated user data back to localStorage
            localStorage.setItem('StoredCurrUser', JSON.stringify(parsedData));
    
           
            document.getElementById('ticketDets').value = '';

            console.log('Updated tickets', parsedData.tickets);
            
        }

    })

}

// Function to remove Tickets

function removeTickets(){
    document.getElementById('removeTicketBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const ticketDetails = document.getElementById('ticketDets').value;

        if (!ticketDetails) {
            alert("Please enter ticket details.");
            console.log("Please enter ticket details.");
            return;
        }

        else{
            const userData = localStorage.getItem('StoredCurrUser');
            const parsedData=JSON.parse(userData);

            const ind=parsedData.tickets.indexOf(ticketDetails);

            if(ind===-1){
                alert('Ticket not found');
                console.log('Ticket not found');
                return;
            }

            parsedData.tickets.splice(ind,1);
            alert('Ticket removed');

            localStorage.setItem('StoredCurrUser',JSON.stringify(parsedData));

            document.getElementById('ticketDets').value = '';
            console.log('Updated tickets after removal', parsedData.tickets);
        }

    });
}

// Functuin to edit Tickets

function editTickets() {
    document.getElementById('editTicketBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const ticketDetails = document.getElementById('ticketDets').value;

        if (!ticketDetails) {
            alert("Please enter ticket details to edit.");
            console.log("Please enter ticket details to edit.");
            return;
        } else {
            const userData = localStorage.getItem('StoredCurrUser');
            const parsedData = JSON.parse(userData);

            const ticketIndex = parsedData.tickets.indexOf(ticketDetails);

            if (ticketIndex === -1) {
                alert("Ticket not found.");
                return;
            }

            // Prompt for new card details
            const newticketDetails = prompt("Enter new ticket details:", ticketDetails);

            if (newticketDetails) {
                parsedData.tickets[ticketIndex] = newticketDetails;

                // Save updated user data back to localStorage
                localStorage.setItem('StoredCurrUser', JSON.stringify(parsedData));

                document.getElementById('ticketDets').value = '';
                console.log('Updated tickets after edit', parsedData.tickets);
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const userData = localStorage.getItem('StoredCurrUser');

    if (!userData) {
        console.error('User not found. Unable to display cards.');
        return;
    }

    const parsedData = JSON.parse(userData);
    console.log('Tickets:', parsedData.tickets);

    addTicket();
    removeTickets();
    editTickets();

});

// Function to add Passwords

function addPasswords() {

    document.getElementById('addPassBtn').addEventListener('click', function (event) {
        event.preventDefault();

        //Fetching details from input field
        const passDetails = document.getElementById('passDets').value;

        if (!passDetails) {
            alert("Please enter password details.");
            console.log("Please password details.");

        }

        else {
            
            const userData = localStorage.getItem('StoredCurrUser');
            const parsedData = JSON.parse(userData);

            if (!parsedData.passwords) {
                parsedData.passwords = [];
            }

            parsedData.passwords.push(passDetails); 
    
            // Save updated user data back to localStorage
            localStorage.setItem('StoredCurrUser', JSON.stringify(parsedData));
    
           
            document.getElementById('passDets').value = '';

            console.log('Updated passwords', parsedData.passwords);
            
        }

    })

}

// Function to remove Passwords

function removePasswords(){
    document.getElementById('removePassBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const passDetails = document.getElementById('passDets').value;

        if (!passDetails) {
            alert("Please enter password details.");
            console.log("Please enter password details.");
            return;
        }

        else{
            const userData = localStorage.getItem('StoredCurrUser');
            const parsedData=JSON.parse(userData);

            const ind=parsedData.passwords.indexOf(passDetails);

            if(ind===-1){
                alert('Password not found');
                console.log('Password not found');
                return;
            }

            parsedData.passwords.splice(ind,1);
            alert('Password removed');

            localStorage.setItem('StoredCurrUser',JSON.stringify(parsedData));

            document.getElementById('passDets').value = '';
            console.log('Updated passwords after removal', parsedData.passwords);
        }

    });
}


// Functuin to edit passwords

function editPasswords() {
    document.getElementById('editPassBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const passDetails = document.getElementById('passDets').value;

        if (!passDetails) {
            alert("Please enter password details to edit.");
            console.log("Please enter password details to edit.");
            return;
        } else {
            const userData = localStorage.getItem('StoredCurrUser');
            const parsedData = JSON.parse(userData);

            const passIndex = parsedData.passwords.indexOf(passDetails);

            if (passIndex === -1) {
                alert("Password not found.");
                return;
            }

            // Prompt for new card details
            const newPassDetails = prompt("Enter new password details:", passDetails);

            if (newPassDetails) {
                parsedData.passwords[passIndex] = newPassDetails;

                // Save updated user data back to localStorage
                localStorage.setItem('StoredCurrUser', JSON.stringify(parsedData));

                document.getElementById('ticketDets').value = '';
                console.log('Updated password after edit', parsedData.passwords);
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {

    const userData = localStorage.getItem('StoredCurrUser');

    if (!userData) {
        console.error('User not found. Unable to display passwords.');
        return;
    }

    const parsedData = JSON.parse(userData);
    console.log('Passwords:', parsedData.passwords);

    addPasswords();
    removePasswords();
    editPasswords();

});