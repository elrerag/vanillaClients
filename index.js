const axios = require('axios');
// para usar import, debemos usa babel.


// numUsuario: entero positivo
const preguntaUnUsuario = (numUsuario) => 
    axios.get('https://reqres.in/api/users/' + numUsuario)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

// numPag: entero positivo  
const preguntaTodosLosUsuariosPorPagina = (numPag) => 
    axios.get('https://reqres.in/api/users?page=' + numPag)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))


// Imprime el nombre y apellido de una lista de usuarios.
const recorreListaUsuarios = (numPag) =>
    axios.get('https://reqres.in/api/users?page=' + numPag)
        .then( res => {
            res.data.data.forEach(element => {
                console.log(element.first_name + ' ' + element.last_name)
            })
        })
        .catch(err => console.log(err))

// Imprime el nombre y apellido de un usuario
// manejando si el usuario no existe.
const imprimeNomApeErr001 = (numUser) => {
    axios.get('https://reqres.in/api/users/' + numUser)
    .then(res => 
        console.log(res.data.data.first_name + ' ' + res.data.data.last_name)
    )
    .catch(err => {
        console.log(err.toString())
    })
}

// encargada de crear un usuario.
const CREATE_URL = 'https://reqres.in/api/users'
const creaUsuario = (objUser) => {
    axios.post(CREATE_URL, objUser)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}







/**
 * Inicio de las pruebas
 */


// // Imprime el nombre del usuario 2.
// imprimeNomApeErr001(2)

// // Imprime el error que envía la app, cuando un usuario no es encontrado.
// imprimeNomApeErr001(24)

// Probamos si podemos ingresar un usuario
creaUsuario({"name": "Luis", "job": "desarrollador"})

