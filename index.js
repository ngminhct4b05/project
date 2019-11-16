let data, idFilm;
const idFilms = document.getElementById('films')
var dataReceive =
    fetch('https://arcane-ridge-39561.herokuapp.com/api/film')
        .then(response => { return response.json() })
        .then(json => { data = json })

function onSearch() {
    const value = document.getElementById("search").value;
    console.log(data)
}

function onLoadData(id) {
    console.log(id)
}

function filmID(id) {
    idFilm = id
    // location.href = 'maleficent.html'
}









