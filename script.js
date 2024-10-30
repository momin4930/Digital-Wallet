// For index.html
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('SignUps').addEventListener('click', SignUps);
document.getElementById('SignIns').addEventListener('click', SignIns);

function SignUps() {
    const name = document.getElementById('signUp-name').value;
    const email = document.getElementById('signUp-email').value;
    const password = document.getElementById('signUp-pass').value;
    const balance = document.getElementById('signUp-IB').value;

    // For checking that All the field are filled

    if (name === '' || email === '' || password === '' || balance === '') {
        alert("Please fill all the fields");
        return;
    }

    // If the user exists

    if (localStorage.getItem(email)) {
        alert('Account already exists.');
        return;
    }

    // Store in local storage

    const userData = {
        name: name,
        email:email,
        password: password,
        balance: parseFloat(balance),
        cards:[],
        tickets:[],
        passwords:[],

    };

    localStorage.setItem(email, JSON.stringify(userData));
    alert('Registration successfull!');
    console.log('Registration successfull!');

    // Optionally, clear the input fields after registration
    document.getElementById('signUp-name').value = '';
    document.getElementById('signUp-email').value = '';
    document.getElementById('signUp-pass').value = '';
    document.getElementById('signUp-IB').value = '';

    container.classList.remove('active');

}

function SignIns() {
    const email = document.getElementById('signIn-email').value;
    const password = document.getElementById('signIn-pass').value;

    if (email === '' || password === '') {
        alert("Please fill all the fields");
        return;
    }

    const currUser = localStorage.getItem(email);

    if (currUser) {
        const userData = JSON.parse(currUser);

        if (userData.password === password) {
            alert('login successful!');

            const CurruserData = {
                email:email,
                balance: userData.balance,
                cards:userData.cards ,
                tickets:userData.tickets ,
                passwords:userData.passwords
            };
        
             localStorage.setItem('StoredCurrUser', JSON.stringify(CurruserData));
//             console.log('Current user data before storing:', CurruserData);
// localStorage.setItem('StoredCurrUser', JSON.stringify(CurruserData));
// console.log('Stored user data:', localStorage.getItem('StoredCurrUser'));


             window.location.href = 'dashboard.html';

            if (userData.balance < 5000) {
                alert('Low on credit, Please recharge');
            }

            // Optionally, clear the input fields after registration

            document.getElementById('signIn-email').value = '';
            document.getElementById('signIn-pass').value = '';

            

        }

        else {
            alert('Incorrect Password');
        }
    }

    else {
        alert('User not found. Consider creating a new account');
        console.log('not foiund');
        container.classList.add('active');
    }
}

