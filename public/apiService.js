function submit(){
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": "your_username",
  "firstName": "Your First Name",
  "lastName": "Your Last Name",
  "address": {
    "street": "123 Main St",
    "street2": "Apt 4B",
    "city": "Your City",
    "state": "Your State",
    "zip": "12345"
  },
  "email": "your.email@example.com"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export default submit;