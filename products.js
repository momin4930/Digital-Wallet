function buyCap() {
    document.getElementById('buyCap').addEventListener('click', function (event) {

        event.preventDefault();

        const userEmail = localStorage.getItem('StoredCurrUser');

        // Fetch the user's balance

        if (!userEmail) {
            console.error('User not found. Unable to display balance.');
            return;
        }

        const userData = JSON.parse(userEmail);

        //Deduct cap price

        if(userData.balance<700){
            const notificationElement = document.createElement('div');
            notificationElement.className = 'notification warning';
            notificationElement.textContent = "Warning: Your balance is below 700!";
            document.body.appendChild(notificationElement);

            // Optionally, remove the notification after a few seconds
            setTimeout(() => {
                notificationElement.remove();
            }, 5000);
        }
        else{
        userData.balance=userData.balance-700;
        localStorage.setItem('StoredCurrUser', JSON.stringify(userData));

        alert('Purchase Successful');
        console.log('Updated balance after edit',userData.balance );
        }
    });
}

function buyHoodie() {
    document.getElementById('buyHoodie').addEventListener('click', function (event) {

        event.preventDefault();

        const userEmail = localStorage.getItem('StoredCurrUser');

        // Fetch the user's balance

        if (!userEmail) {
            console.error('User not found. Unable to display balance.');
            return;
        }

        const userData = JSON.parse(userEmail);

        //Deduct cap price

        if(userData.balance<1500){
            const notificationElement = document.createElement('div');
            notificationElement.className = 'notification warning';
            notificationElement.textContent = "Warning: Your balance is below 1500!";
            document.body.appendChild(notificationElement);

            // Optionally, remove the notification after a few seconds
            setTimeout(() => {
                notificationElement.remove();
            }, 5000);
        }
        else{
        userData.balance=userData.balance-1500;
        localStorage.setItem('StoredCurrUser', JSON.stringify(userData));

        alert('Purchase Successful');
        console.log('Updated balance after edit',userData.balance );
        }
    });
}


function buyShirt() {
    document.getElementById('buyShirt').addEventListener('click', function (event) {

        event.preventDefault();

        const userEmail = localStorage.getItem('StoredCurrUser');

        // Fetch the user's balance

        if (!userEmail) {
            console.error('User not found. Unable to display balance.');
            return;
        }

        const userData = JSON.parse(userEmail);

        //Deduct cap price

        if(userData.balance<1000){
            const notificationElement = document.createElement('div');
            notificationElement.className = 'notification warning';
            notificationElement.textContent = "Warning: Your balance is below 1000!";
            document.body.appendChild(notificationElement);

            // Optionally, remove the notification after a few seconds
            setTimeout(() => {
                notificationElement.remove();
            }, 5000);
        }

        else{
        userData.balance=userData.balance-1000;
        localStorage.setItem('StoredCurrUser', JSON.stringify(userData));

        alert('Purchase Successful');
        console.log('Updated balance after edit',userData.balance );
        }
    });
}

function buyShoes() {
    document.getElementById('buyShoes').addEventListener('click', function (event) {

        event.preventDefault();

        const userEmail = localStorage.getItem('StoredCurrUser');

        // Fetch the user's balance

        if (!userEmail) {
            console.error('User not found. Unable to display balance.');
            return;
        }

        const userData = JSON.parse(userEmail);

        //Deduct cap price

        if(userData.balance<2500){
            const notificationElement = document.createElement('div');
            notificationElement.className = 'notification warning';
            notificationElement.textContent = "Warning: Your balance is below 2500!";
            document.body.appendChild(notificationElement);

            // Optionally, remove the notification after a few seconds
            setTimeout(() => {
                notificationElement.remove();
            }, 5000);
        }

        else{
        userData.balance=userData.balance-2500;
        localStorage.setItem('StoredCurrUser', JSON.stringify(userData));

        alert('Purchase Successful');
        console.log('Updated balance after edit',userData.balance );
        }
    });
}


function buyPants() {
    document.getElementById('buyPant').addEventListener('click', function (event) {

        event.preventDefault();

        const userEmail = localStorage.getItem('StoredCurrUser');

        // Fetch the user's balance

        if (!userEmail) {
            console.error('User not found. Unable to display balance.');
            return;
        }

        const userData = JSON.parse(userEmail);

        //Deduct cap price

        if(userData.balance<1700){
            const notificationElement = document.createElement('div');
            notificationElement.className = 'notification warning';
            notificationElement.textContent = "Warning: Your balance is below 1700!";
            document.body.appendChild(notificationElement);

            // Optionally, remove the notification after a few seconds
            setTimeout(() => {
                notificationElement.remove();
            }, 5000);
        }

        else{
        userData.balance=userData.balance-1700;
        localStorage.setItem('StoredCurrUser', JSON.stringify(userData));
        alert('Purchase Successful');
        console.log('Updated balance after edit',userData.balance );
    }
    });
}

function buyJacket() {
    document.getElementById('buyJacket').addEventListener('click', function (event) {

        event.preventDefault();

        const userEmail = localStorage.getItem('StoredCurrUser');

        // Fetch the user's balance

        if (!userEmail) {
            console.error('User not found. Unable to display balance.');
            return;
        }

        const userData = JSON.parse(userEmail);

        //Deduct cap price

        if(userData.balance<4000){
            const notificationElement = document.createElement('div');
            notificationElement.className = 'notification warning';
            notificationElement.textContent = "Warning: Your balance is below 4000!";
            document.body.appendChild(notificationElement);

            // Optionally, remove the notification after a few seconds
            setTimeout(() => {
                notificationElement.remove();
            }, 5000);
        }

        else{
        userData.balance=userData.balance-4000;
        localStorage.setItem('StoredCurrUser', JSON.stringify(userData));

        alert('Purchase Successful');
        console.log('Updated balance after edit',userData.balance );
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    buyCap();
    buyHoodie();
    buyShirt();
    buyShoes();
    buyPants();
    buyJacket();

});