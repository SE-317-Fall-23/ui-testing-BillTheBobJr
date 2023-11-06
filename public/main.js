// import submit from './apiService.js';
import apiService from './apiService.js';
const userModel = {
validateName: function (name) {
    //va
    return true;
}
};

//on dom load call init
function init() {
//call apiService submit method when submit button is clicked
document.getElementById('submit').addEventListener('click', apiService.submit);

}

window.onload = init;
export default userModel;