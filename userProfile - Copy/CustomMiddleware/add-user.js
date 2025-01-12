const {respon} = require("express");

fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name : 'Enjeli',
        email : 'enjeli060606@gmail.com',
        phone : '087236286432'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))