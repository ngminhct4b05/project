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
    "Frozen_2": {
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
    "The_theory_of_everything": {
        "creator": "James Marsh",
        "national": "Anh",
        "year": 2014,
        "debut_date": "1/1/2019",
        "time": "123 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "Transformer_5:The last knight": {
        "creator": "Michael Bay",
        "national": "Mỹ",
        "year": 2017,
        "debut_date": "23/6/2017",
        "time": "149 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "Pacific_Rim": {
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
    "One_Piece": {
        "creator": "Eiichiro Oda",
        "national": "Nhật Bản",
        "year": 2016,
        "debut_date": "23/7/2019",
        "time": "105 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "District_9": {
        "creator": "Neill Blomkamp,Terri Tatchell",
        "national": "Mỹ,New Zealand",
        "year": 2009,
        "debut_date": "13/8/2009",
        "time": "112 phút",
        "quality": "Bản đẹp",
        "resolution": "Full HD",
        "language": "Phụ đề Việt"
    },
    "Suicide_squad": {
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

function onLoadData() {
    console.log(data)
}
