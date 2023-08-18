
const email =document.getElementById('inputemail')
const password =document.getElementById('inputpassword')
const login =document.getElementById('login_btn')

console.log("Client side run");
console.log(emailInput, passwordInput);

loginBtn.addEventListener('click', () => {
    //e.preventDefault(); // Prevent the default form submission

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    console.log(emailValue, passwordValue);

    const userData = {
        email: emailValue,
        password: passwordValue
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data received", data);
    })
    .catch(error => {
        console.log(error);
    });
});