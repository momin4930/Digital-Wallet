// Function to display cards 

function dispCards(cardsArray){

    // Displaying the cards here
    const listGroup = document.querySelector('.list-group');

    listGroup.innerHTML='';

    cardsArray.forEach(card => {
        
        //Create new <li>

        const listItem=document.createElement('li');

        listItem.classList.add('list-group-item');

        listItem.textContent=card;

        listGroup.appendChild(listItem);

        console.log("from cards func");
        return;
    });

}

// Function to display tickets 

function dispTickets(ticketArray){

    // Displaying the cards here
    const listGroup = document.querySelector('.list-group2');

    listGroup.innerHTML='';

    ticketArray.forEach(ticket => {
        
        //Create new <li>

        const listItem=document.createElement('li');

        listItem.classList.add('list-group-item2');

        listItem.textContent=ticket;

        listGroup.appendChild(listItem);

        console.log("from ticket func");
        return;
    });

}

// Function to display passwords 

function dispPasswords(passArray){

    // Displaying the cards here
    const listGroup = document.querySelector('.list-group3');

    listGroup.innerHTML='';

    passArray.forEach(pass => {
        
        //Create new <li>

        const listItem=document.createElement('li');

        listItem.classList.add('list-group-item3');

        listItem.textContent=pass;

        listGroup.appendChild(listItem);

        console.log("from password func");
        return;
    });

}

function getBalance(userBalance){

    if (userBalance !== null) {

        // Select the span element that displays the balance

        const balanceElement = document.querySelector('.balance');
        if (balanceElement) {

            // Update the span with the current balance

            balanceElement.textContent = userBalance; // Set the user's balance
        }


        // Check if the balance is less than 500 and show a notification
        if (userBalance < 5000) {
            //alert("Warning: Your balance is below 5000!");
            
            // Alternatively, display a notification on the page instead of an alert
            const notificationElement = document.createElement('div');
            notificationElement.className = 'notification warning';
            notificationElement.textContent = "Warning: Your balance is below 5000!";
            document.body.appendChild(notificationElement);

            // Optionally, remove the notification after a few seconds
            setTimeout(() => {
                notificationElement.remove();
            }, 5000);
        }

        return;
    }

}

// Function to Add Funds

function AddFunds() {
    document.getElementById('addFunds').addEventListener('click', function (event) {

        event.preventDefault();

        const userEmail = localStorage.getItem('StoredCurrUser'); // Get email from localStorage

    // Fetch the user's balance

    if (!userEmail) {
        console.error('User not found. Unable to display balance.');
        return;
    }

    const userData = JSON.parse(userEmail);

    const newBalance = prompt("Enter new balance:", userData.balance);
    window.location.reload(); 

    if (newBalance) {
        userData.balance = newBalance;

        // Save updated user data back to localStorage
        localStorage.setItem('StoredCurrUser', JSON.stringify(userData));

        console.log('Updated balance after edit',userData.balance );

    }

    });
    }


// This is for displaying the current balance of user
document.addEventListener('DOMContentLoaded', () => {

    const userEmail = localStorage.getItem('StoredCurrUser'); // Get email from localStorage

    // Fetch the user's balance

    if (!userEmail) {
        console.error('User not found. Unable to display balance.');
        return;
    }

    const userData = JSON.parse(userEmail);

    console.log("Emaaaail", userData.email);
    console.log("Balance", userData.balance);


    getBalance(userData.balance);

    console.log("Cards",userData.cards);
    dispCards(userData.cards);

    console.log("Tickets",userData.tickets);
    dispTickets(userData.tickets);

    console.log("Passwords",userData.passwords);
    dispPasswords(userData.passwords);

    AddFunds();
    

});


// Logout functionality

document.getElementById('logoutBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevents the default link behavior

    // Optional: Clear specific session or user data
    localStorage.removeItem('StoredCurrUser'); // Removes the current user from localStorage

    // Redirect to login/signup page
    window.location.href = 'index.html'; // This will navigate to the login page
});
