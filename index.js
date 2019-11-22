let data, idFilm, dataID;
var container = document.getElementById('film')
const idFilms = document.getElementById('films')
var dataReceive =
    fetch('https://dev-c4t-test.herokuapp.com/api/film')
        .then(response => { return response.json() })
        .then(json => { data = json })

function onSearch() {
    const value = document.getElementById("search").value;
    data.map(item => {
        const name = item.name_with_key.toLowerCase()
        if (value === name) {
            var html = `<div class="nentong">
            <div class="phimtong">
                <div class="img"><img src="${item.thumbnail}" alt="This is a picture"></div>
                <div class="ok">
                    <h2>${item.name_with_key}</h2>
                    <h3>Creator: ${item.creator}</h3>
                    <h3>National: ${item.national},Year: ${item.year}</h3>
                    <h3>Debut_date: ${item.debut_date}</h3>
                    <h3>Time: ${item.time}</h3>
                    <h3>Quality: ${item.quality}</h3>
                    <h3>Language: ${item.language}</h3>
                </div>,
            </div>
            <div class="dienvien">
                ${item.actor.map(act => {
                return `<div class="khungdienvien">
                    <img src="${item.thumbnail}" alt="actor" class="anhdienvien">
                    <h3 class="vitri">
                        <form style="color:beige;"></form>
                        <h4>${act}</h4>
                    </h3>
                </div>`
            })}
        </div>
            <div class="phimnho">
                <h3>Nội dung phim</h3>
               <h5>${item.content}</h5>
            </div>
        </div>`
        }

        container.insertAdjacentHTML("beforeend", html)

    })
    document.getElementById("all_films").style.display = "none"
}

function onLoadData(id) {
    if (id === "home") {
        window.location.reload()
    }
}
function filmID(id) {
    data.map(item => {
        if (id === item.key) {
            console.log(item.actor)
            dataID = item
            var html = `<div class="nentong">
            <div class="phimtong">
                <div class="img"><img src="${item.thumbnail}" alt="This is a picture"></div>
                <div class="ok">
                    <h2>${item.name_with_key}</h2>
                    <h3>Creator: ${item.creator}</h3>
                    <h3>National: ${item.national},Year: ${item.year}</h3>
                    <h3>Debut_date: ${item.debut_date}</h3>
                    <h3>Time: ${item.time}</h3>
                    <h3>Quality: ${item.quality}</h3>
                    <h3>Language: ${item.language}</h3>
                </div>,
            </div>
            <div class="dienvien">
                ${item.actor.map(actor => {
                return `<div class="khungdienvien">
                    <img src="pic/angelina jolie.jpg" alt="actor" class="anhdienvien">
                    <h3 class="vitri">
                        <form style="color:beige;"></form>
                        <h4>${actor}</h4>
                    </h3>
                </div>`
            })}
        </div>
            <div class="phimnho">
                <h3>Nội dung phim</h3>
               <h5>${item.content}</h5>
            </div>
        </div>`
            container.insertAdjacentHTML("beforeend", html)
        }
    })
    document.getElementById("all_films").style.display = "none"
    // location.href = 'phim.html'

}

function backHome() {
    location.reload()
}








