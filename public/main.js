import submit from './apiService.js';
import apiService from './apiService.js';

const htmlModel = {
    validateFirstName: function () {
        let valid = userModel.validateFirstName(document.getElementById('firstName').value);
        if(valid){
            document.getElementById("firstError").classList.remove("was-validated");
        } else {
            document.getElementById("firstError").classList.add("was-validated");
        }
        return valid;
    },
    validateLastName: function () {
        let valid = userModel.validateLastName(document.getElementById('lastName').value);
        if(valid){
            document.getElementById("lastError").classList.remove("was-validated");
        } else {
            document.getElementById("lastError").classList.add("was-validated");
        }
        return valid;
    },
    validateUserName: function () {
        let valid = userModel.validateUserName(document.getElementById('username').value);
        if(valid){
            document.getElementById("userError").classList.remove("was-validated");
        } else {
            document.getElementById("userError").classList.add("was-validated");
        }
        return valid;
    },
    validateEmail: function () {
        let valid = userModel.validateEmail(document.getElementById('email').value);
        if(valid){
            document.getElementById("emailError").classList.remove("was-validated");
        } else {
            document.getElementById("emailError").classList.add("was-validated");
        }
        return valid;
    },
    validateDOB: function () {
        let valid = userModel.validateDOB(document.getElementById('dob').value);
        if(valid){
            document.getElementById("dobError").classList.remove("was-validated");
        } else {
            document.getElementById("dobError").classList.add("was-validated");
        }
        return valid;
    },
    validateStreet: function () {
        let valid = userModel.validateStreet(document.getElementById('street').value);
        if(valid){
            document.getElementById("streetError").classList.remove("was-validated");
        } else {
            document.getElementById("streetError").classList.add("was-validated");
        }
        return valid;
    },
    validateCity: function () {
        let valid = userModel.validateCity(document.getElementById('city').value);
        if(valid){
            document.getElementById("cityError").classList.remove("was-validated");
        } else {
            document.getElementById("cityError").classList.add("was-validated");
        }
        return valid;
    },
    validateState: function () {
        let valid = userModel.validateState(document.getElementById('state').value);
        if(valid){
            document.getElementById("stateError").classList.remove("was-validated");
        } else {
            document.getElementById("stateError").classList.add("was-validated");
        }
        return valid;
    },
    validateZip: function () {
        let valid = userModel.validateZip(document.getElementById('zip').value);
        if(valid){
            document.getElementById("zipError").classList.remove("was-validated");
        } else {
            document.getElementById("zipError").classList.add("was-validated");
        }
        return valid;
    }
}

const userModel = {
    validateFirstName: function (name) {
        const re = new RegExp("^([a-zA-Z' ]?-?){1,256}$");
        return re.test(name) ;
    },
    validateLastName: function (name) {
        const re = new RegExp("^([a-zA-Z' ]?-?){1,256}$");
        return re.test(name);
    },
    validateUserName: function (name) {
        const re = new RegExp("^([a-zA-Z0-9]?-?_?){1,256}$");
        return re.test(name);
    },
    validateEmail: function (email) {
        //This is not a good regex for email validation, I am meerly using it as a stand in for using a proper email regex
        //or for importing a Javascript Package/Module to handle validation for me
        const re = new RegExp("^[a-zA-Z.#_-]+@[a-zA-Z.#_-]+\.com$");
        console.log()
        return re.test(email);
    },
    validateDOB: function (dob) {
        const inputDate = new Date(dob);
        const currentDate = new Date();
        return inputDate < currentDate;
    },
    validateStreet: function (street) {
        const re = new RegExp("^[a-zA-Z0-9 ]{1,256}$");
        return re.test(street);
    },
    validateCity: function (city) {
        const re = new RegExp("^[a-zA-Z0-9 ]{1,256}$");
        return re.test(city);
    },
    validateState: function (state) {
        const re = new RegExp("^[a-zA-Z0-9 ]{1,256}$");
        return re.test(state);
    },
    validateZip: function (zip) {
        const re = new RegExp("^\\d\\d\\d\\d\\d$");
        return re.test(zip);
    }
};

function htmlSubmit(){
    const valid = htmlModel.validateFirstName() && htmlModel.validateLastName() && 
                     htmlModel.validateUserName() && htmlModel.validateEmail() &&
                     htmlModel.validateDOB() && htmlModel.validateStreet() && 
                     htmlModel.validateCity() && htmlModel.validateState() &&
                     htmlModel.validateZip();

    if(valid == true){
        submit(document.getElementById('username').value,
               document.getElementById('firstName').value,
               document.getElementById('lastName').value,
               document.getElementById('street').value,
               document.getElementById('city').value,
               document.getElementById('state').value,
               document.getElementById('zip').value,
               document.getElementById('email').value);
    }
}

//var temp = submit("user", "first", "last", "street", "city", "state", "12345", "email@email.com");

//on dom load call init
function init() {
//call apiService submit method when submit button is clicked
document.getElementById('submit').addEventListener('click', htmlSubmit);

document.getElementById('firstName').addEventListener('blur', htmlModel.validateFirstName);
document.getElementById('lastName').addEventListener('blur', htmlModel.validateLastName);
document.getElementById('username').addEventListener('blur', htmlModel.validateUserName);
document.getElementById('email').addEventListener('blur', htmlModel.validateEmail);
document.getElementById('dob').addEventListener('blur', htmlModel.validateDOB);
document.getElementById('street').addEventListener('blur', htmlModel.validateStreet);
document.getElementById('city').addEventListener('blur', htmlModel.validateCity);
document.getElementById('state').addEventListener('blur', htmlModel.validateState);
document.getElementById('zip').addEventListener('blur', htmlModel.validateZip);

var form = document.getElementById("submit");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
}

window.onload = init;
export default userModel;