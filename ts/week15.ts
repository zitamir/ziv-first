fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        response.json()
    })
    .then((data) => {
        
    })
    .catch((error) => {
        console.error('error')
    })