let data = {
    "maleficent_2": {
        "creator": "Joachim Ronning",
        "national": "Mỹ,Anh",
        "year": 2019,
        "debut_date": "16/10/2019",
        "time": "118 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "Joker": {
        "creator": "Todd Phillips",
        "national": "Mỹ,Canada",
        "year": 2019,
        "debut_date": "1/10/2019",
        "time": "122 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "Frozen 2": {
        "creator": "Chris Buck,Jennifer Lee",
        "national": "Mỹ",
        "year": 2019,
        "debut_date": "22/11/2019",
        "time": "120 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "Endgame": {
        "creator": "Joe Russo, Anthony Russo",
        "national": "Mỹ",
        "year": 2019,
        "debut_date": "24/4/2019",
        "time": "181 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "The theory of everything": {
        "creator": "James Marsh",
        "national": "Anh",
        "year": 2014,
        "debut_date": "1/1/2019",
        "time": "123 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "Transformer 5:The last knight": {
        "creator": "Michael Bay",
        "national": "Mỹ",
        "year": 2017,
        "debut_date": "23/6/2017",
        "time": "149 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "Pacific Rim": {
        "creator": "Guillermo Del Toro",
        "national": "Mỹ",
        "year": 2013,
        "debut_date": "11/7/2013",
        "time": "131 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "Jumanji": {
        "creator": "Jake Kasdan",
        "national": "Mỹ",
        "year": 2017,
        "debut_date": "22/12/2017",
        "time": "119 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "Chappie": {
        "creator": "Neill Blomkamp",
        "national": "Mỹ,Mexico",
        "year": 2015,
        "debut_date": "6/3/2015",
        "time": "120 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "One Piece": {
        "creator": "Todd Phillips",
        "national": "Mỹ,Canada",
        "year": 2019,
        "debut_date": "1/10/2019",
        "time": "122 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "District 9": {},
    "Suicide squad": {
        "creator": "David Ayer",
        "national": "Mỹ,Canada",
        "year": 2016,
        "debut_date": "5/8/2019",
        "time": "135 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    }
}
var dataReceive =
    fetch('https://my-json-server.typicode.com/namnguyen6595/data/db')
        .then(response => { return response.json() })
        .then(json => { data = json })

function onSearch() {
    const value = document.getElementById("search").value;
    console.log(data)
}









