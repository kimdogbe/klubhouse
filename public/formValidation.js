const email = document.querySelector('#email');
const country = document.querySelector('#country');
const postcode = document.querySelector('#post-code');
const pw = document.querySelector('#pw');
const pwConfirm = document.querySelector('#pw-confirm');

const errorEmail = document.querySelector('#email-error');
const errorPostcode = document.querySelector('#postcode-error');
const errorCountry = document.querySelector('#country-error');
const errorPw = document.querySelector('#pw-error');
const errorPwConfirm = document.querySelector('#pw-confirm-error');

function validateEmail () {
  if (email.validity.valid){
    errorEmail.textContent = '';
  }
  else if (email.validity.typeMismatch) {
    errorEmail.textContent = 'That ain\'t no email address';
  }
  else if (email.validity.tooShort){
    errorEmail.textContent = 'Email not long enough... Size matters!';
  }
  else if (email.validity.valueMissing){
    errorEmail.textContent = 'You gotta enter something';
  }
}

function validatePostCode () {  
  if (postcode.validity.valid){
    errorPostcode.textContent = '';
  }
  else if (postcode.validity.typeMismatch) {
    errorPostcode.textContent = 'That ain\'t no email address';
  }
  else if (postcode.validity.tooShort){
    errorPostcode.textContent = 'Email not long enough... Size matters!';
  }
  else if (postcode.validity.valueMissing){
    errorPostcode.textContent = 'You gotta enter something';
  }
}

function validateCountry () {
  if (country.validity.valid){
    errorCountry.textContent = '';
  }
  else if (country.validity.valueMissing) {
    errorCountry.textContent = 'Please select a country';
  }
}

function validatePassword () {
  if (pw.validity.valid){
    errorPw.textContent = '';
  }
  else if (pw.validity.valueMissing) {
    errorPw.textContent = 'Please enter a password';
  }
  else if (pw.validity.tooShort){
    errorPw.textContent = 'Password must have minimum of 8 characters';
  }
}

function validatePasswordConfirmation () {
  if (pwConfirm.value !== pw.value) {
    errorPwConfirm.textContent = 'Must be same as password';
  }
  else if (pwConfirm.validity.valid){
    errorPwConfirm.textContent = '';
  }
}

addEventListener('submit', (event) => {
  event.preventDefault();
  validateEmail();
  validatePostCode();
  validateCountry();
  validatePassword();
  validatePasswordConfirmation();
});