const {response, application} = require("express");

fetch('http://localhost:3000/api/users/1', {
    method: 'DELETE',
    headers: {
        'ContenType': 'application/json',
        'user-role' : 'admin'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(Error => console.log(Error));