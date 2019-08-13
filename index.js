const axios = require('axios');
// para usar import, debemos usa babel.


// 
axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(x => {
    console.log(x.status)
    console.log(x.data)
})
.catch(err => console.err(err))
