let name = prompt("Please enter your name")
let data = [
    {
        judulLagu : "Blinding Lights",
        artist : "The Weeknd",
        link : "https://www.youtube.com/watch?v=fHI8X4OXluQ"
    },
    {
        judulLagu : "Shape of You",
        artist : "Ed Sheeran",
        link : "https://www.youtube.com/watch?v=JGwWNGJdvx8"
    },
    {
        judulLagu : "Bohemian Rhapsody",
        artist : "Queen",
        link : "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
    },
    {
        judulLagu : "Billie Jean",
        artist : "Michael Jackson",
        link : "https://www.youtube.com/watch?v=Zi_XLOBDo_Y"
    },
    {
        judulLagu : "Smells Like Teen Spirit",
        artist : "Nirvana",
        link : "https://www.youtube.com/watch?v=hTWKbfoikeg"
    },
    {
        judulLagu : "Someone Like You",
        artist : "Adele",
        link : "https://www.youtube.com/watch?v=hLQl3WQQoQ0"
    },
    {
        judulLagu : "Believer",
        artist : "Imagine Dragons",
        link : "https://www.youtube.com/watch?v=7wtfhZwyrcc"
    },
    {
        judulLagu : "Hotel California",
        artist : "Eagles",
        link : "https://www.youtube.com/watch?v=EqPtz5qN7HM"
    },
    {
        judulLagu : "Rolling in the Deep",
        artist : "Adele",
        link : "https://www.youtube.com/watch?v=rYEDA3JcQqw"
    },
    {
        judulLagu : "Take On Me",
        artist : "a-ha",
        link : "https://www.youtube.com/watch?v=djV11Xbc914"
    }

]

function submit() {
    // Mengambil property text input
    let judulLagu = document.getElementById("judulLagu")
    let artis = document.getElementById("artis")
    let link = document.getElementById("link")

    // Testing nilai yang diambil
    console.log(judulLagu.value)
    console.log(artis.value)
    console.log(link.value)

    // Memasukan nilai dalamp property
    let objectOfPlaylist = {
        judulLagu: judulLagu.value,
        artis: artis.value,
        link: link.value
    }
    // Mempush data yang diambil kedalam array of object
    data.push(objectOfPlaylist)

    // Mengecek nilai data
    console.log(data)
}
