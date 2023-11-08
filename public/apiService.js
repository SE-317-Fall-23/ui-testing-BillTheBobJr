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

var response;
await fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
  .then(response => response.json())
  .then(data =>{response = data;})
  .then(() => console.log(response))
  .catch(error => console.log('error', error));


return response;
}

export default submit;