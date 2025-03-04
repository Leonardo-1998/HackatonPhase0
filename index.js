// let name = prompt("Please enter your name")

let data = [
    {
        judulLagu: "Blinding Lights",
        artis: "The Weeknd",
        link: "https://www.youtube.com/watch?v=fHI8X4OXluQ",
        id: 0
    },
    {
        judulLagu: "Shape of You",
        artis: "Ed Sheeran",
        link: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
        id: 1
    },
    {
        judulLagu: "Bohemian Rhapsody",
        artis: "Queen",
        link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        id: 2
    },
    {
        judulLagu: "Billie Jean",
        artis: "Michael Jackson",
        link: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
        id: 3
    },
    {
        judulLagu: "Smells Like Teen Spirit",
        artis: "Nirvana",
        link: "https://www.youtube.com/watch?v=hTWKbfoikeg",
        id: 4
    },
    {
        judulLagu: "Someone Like You",
        artis: "Adele",
        link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
        id: 5
    },
    {
        judulLagu: "Believer",
        artis: "Imagine Dragons",
        link: "https://www.youtube.com/watch?v=7wtfhZwyrcc",
        id: 6
    },
    {
        judulLagu: "Hotel California",
        artis: "Eagles",
        link: "https://www.youtube.com/watch?v=EqPtz5qN7HM",
        id: 7
    },
    {
        judulLagu: "Rolling in the Deep",
        artis: "Adele",
        link: "https://www.youtube.com/watch?v=rYEDA3JcQqw",
        id: 8
    },
    {
        judulLagu: "Take On Me",
        artis: "a-ha",
        link: "https://www.youtube.com/watch?v=djV11Xbc914",
        id: 9
    }

]

function submit() {
    // Mengambil property text input
    let judulLagu = document.getElementById("judulLagu")
    let artis = document.getElementById("artis")
    let link = document.getElementById("link")

    // Menampilkan element yang diambil di console
    console.log(judulLagu)
    console.log(artis)
    console.log(link)

    // Meanmpilkan nilai yang diambil di console
    console.log(judulLagu.value)
    console.log(artis.value)
    console.log(link.value)

    // Memasukan nilai dalam property
    let objectOfPlaylist = {
        judulLagu: judulLagu.value,
        artis: artis.value,
        link: link.value,
        id: data.length
    }
    // Mempush data yang diambil kedalam array of object
    data.push(objectOfPlaylist)

    // Mengecek nilai data
    console.log(data)

    // Mengosongkan kembali input text box
    judulLagu.value = ""
    artis.value = ""
    link.value = ""

    loadBody()
}

function edit(editId) {
    let editJudulLagu = document.getElementById("judulLagu")
    let editArtis = document.getElementById("artis")
    let editLink = document.getElementById("link")
    console.log(judulLagu)
    console.log(artis)
    console.log(link)

    let filter = data.filter((lagu) => lagu.id === editId)
    editJudulLagu.value = filter[0].judulLagu
    editArtis.value = filter[0].artis
    editLink.value = filter[0].link

    remove(filter[0].id)
}

function remove(deleteId) {
    data = data.filter((lagu) => {
        return lagu.id !== deleteId
    })
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i])
        data[i].id = i;
    }

    loadBody()
}

function loadBody() {
    let body = document.getElementById("tableBody")
    body.innerHTML = ""

    for (let { judulLagu, artis, link, id } of data) {
        body.innerHTML += `
            <tr> 
                <td>${id + 1}</td>
                <td>${judulLagu}</td>
                <td>${artis}</td>
                <td>
                    <button onclick="edit(${id})">Edit</button>
                    <button onclick="remove(${id})">Delete</button>
                    <button> <a target="_blank" href="${link}">Play</a></button>
                </td>
            </tr>`
    }
}
