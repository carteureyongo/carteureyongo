const passwordForm = document.querySelector('.password-form');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-button');

const correctPassword = 'CYBER gaby 1234'

submitButton.addEventListener('click', () =>{
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword){
        window.location.href = "index-coder.html";
    }else{
        alert("Mot de passe incorrect. Veuillez réessayer.");
    }
});