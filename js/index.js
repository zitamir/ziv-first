// console.log('hey man');
// //# sourceMappingURL=index.js.map



// try{
//     console.log('wwww')
//     console.log(car)
// } catch(e){
//     console.log(e)
// }

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        const el = document.getElementById('body')
        const title = document.createElement('h2')
        title.textContent = data.title;
        const content = document.createElement('p')
        content.textContent = data.body;
        el.appendChild(title)
        el.appendChild(content)

    })
    .catch((error) => {
        console.error('error')
    })