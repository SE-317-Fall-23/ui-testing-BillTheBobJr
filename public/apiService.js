async function submit(user, firstName, lastName, street, city, state, zip, email){
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": user,
  "firstName": firstName,
  "lastName": lastName,
  "address": {
    "street": street,
    "city": city,
    "state": state,
    "zip": zip
  },
  "email": email
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
  .then(response => {return response})
  .catch(error => console.log('error', error))
  .then(error => {return error});
}

export default submit;