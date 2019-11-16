let data = {
    "maleficent_2": {
        "creator": "Joachim Ronning",
        "national": "Mỹ,Anh",
        "year": 2019,
        "debut_date": "16/10/2019",
        "time": "118 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt",
        "name_with_key": "Maleficent 2"
    },
    "joker": {},
    "frozen_2": {},
    "endgame": {},
    "the_theory_of_everything": {},
    "transformer_5": {},
    "pacific_rim": {},
    "jumanji": {},
    "chappie": {},
    "one_piece": {},
    "district_9": {},
    "suicide_squad": {}
}
// function dataReceive() {
//     fetch('http://localhost:3000/api/film')
//         .then(response => response.json())
//         .then(json => { data = json })
// }

function onLoadData(id) {
    data.map(item => {
        if (id === item.type) {
            console.log("Found", item)
        }
    })

}

function onSearch() {
    const value = document.getElementById("search").value;
    console.log(data)
}









