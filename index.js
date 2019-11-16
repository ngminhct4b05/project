let data;
var dataReceive =
    fetch('https://my-json-server.typicode.com/namnguyen6595/data/db')
        .then(response => { return response.json() })
        .then(json => { data = json })

function onLoadData() {
    console.log(data)
}
