var dataReceive = fetch('https://my-json-server.typicode.com/namnguyen6595/data/db')
    .then(response => response.json())
    .then(json => console.log(json))

console.log(dataReceive)
