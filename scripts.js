function validate(e){
e.preventDefault();
}
const email=document.getElementById('email').value
const pass = document.getElementById('passwors').value
const age = document.getElementById('age').value
const msgBox= document.getElementById('message').value

let message='';
if (email===''){
    message='Enter an Email.';
    msgBox.style.colour='red';
}
 else if (pass === '') {
    message = 'Enter a password.';
    msgBox.style.colour = 'red';
}
 else if (age === '') {
    message = 'Enter an age.';
    msgBox.style.colour = 'red';
}
else  {
    message = 'Login successful.';
    msgBox.style.colour = 'green';
}

msgBox.innerText="message";









