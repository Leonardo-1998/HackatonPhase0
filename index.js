let username = prompt("Please enter your name")
let user = document.getElementById("Hello")
user.innerText = `Hello, ${username? username: "Guest"}!`
let edited = false;
let idOfEditedData;

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

    if(edited){
        data[idOfEditedData].judulLagu =judulLagu.value;
        data[idOfEditedData].artis = artis.value;
        data[idOfEditedData].link = link.value;
        edited = false;
        idOfEditedData
    } else {
        // Mempush data yang diambil kedalam array of object
        data.push(objectOfPlaylist)
    }

    // Mengecek nilai data
    console.log(data)

    // Mengosongkan kembali input text box
    judulLagu.value = ""
    artis.value = ""
    link.value = ""

    loadBody()
}

// Terdapat bug pada Edit ini
function edit(editId) {
    // Mengambil element
    let editJudulLagu = document.getElementById("judulLagu")
    let editArtis = document.getElementById("artis")
    let editLink = document.getElementById("link")

    // Mengecek element
    console.log(judulLagu)
    console.log(artis)
    console.log(link)

    // Mencari data yang sesuai dengan Id nya yang di cari
    let filter = data.filter((lagu) => lagu.id === editId)
    editJudulLagu.value = filter[0].judulLagu
    editArtis.value = filter[0].artis
    editLink.value = filter[0].link

    // Flagging
    edited = true;
    idOfEditedData = editId;
    // loadBody()
}

function remove(deleteId) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // Mencari data yang memiliki id berbeda dengan deleteId
    data = data.filter((lagu) => {
        return lagu.id !== deleteId
    })
    // Mengatur ulang id yang ada pada data
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i])
        data[i].id = i;
    }

    loadBody()
}

function loadBody(){
    // Mnengambil elemen data dengan id #tableBody
    let tableBody = document.getElementById("tableBody")
    // Mengosongkan dulu isi dari html id #tableBody
    tableBody.innerHTML = ""

    // Untuk setiap {judulLagu, artis, link, id} dari setiap data diambil
    for (let { judulLagu, artis, link, id } of data) {
        tableBody.innerHTML += `
            <tr>
                <td style="text-align:center">${id+1}</td>
                <td>${judulLagu}</td>
                <td>${artis}</td>
                <td style="text-align:center" class="dataButton">
                    <button onclick="edit(${id})"><img src="edit icon.png" alt="Edit" class="editImage"></button>
                    <button onclick="remove(${id})"><img src="delete icon.png" alt="Delete" class="deleteImage"></button>
                    <a target="_blank" href="${link}">
                        <button><img src="play icon.png" alt="Play" class="playImage"></button>
                    </a>    
                </td>
            </tr>
        `
    }
}

// function loadBody() {
//     // Mnengambil elemen data dengan id #tableBody
//     let tableBody = document.getElementById("tableBody")
//     // Mengosongkan dulu isi dari html id #tableBody
//     tableBody.innerHTML = ""

//     // Untuk setiap {judulLagu, artis, link, id} dari setiap data diambil
//     for (let { judulLagu, artis, link, id } of data) {
//         // Menambahkan isi tag element html pada id #tableBody dengan 
//         // console.log(id)
//         // console.log(judulLagu)
//         let row = document.createElement("tr");
        
//         let idCell = document.createElement("td");
//         idCell.textContent = id+1;
//         row.appendChild(idCell);
        
//         let judulLaguCell = document.createElement("td");
//         judulLaguCell.textContent = judulLagu;
//         row.appendChild(judulLaguCell);

//         let artisCell = document.createElement("td");
//         artisCell.textContent = artis;
//         row.appendChild(artisCell)

//         let buttonElement = document.createElement("td");

//         let editButton = document.createElement("button");
//         editButton.textContent = "Edit";
//         editButton.addEventListener("click",()=>edit(id));
//         buttonElement.appendChild(editButton);

//         let deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", () => remove(id));
//         buttonElement.appendChild(deleteButton)

//         let playButton = document.createElement("button");
//         let playLink = document.createElement("a");
//         playButton.textContent = "Play";
//         playLink.target = "_blank";
//         playLink.href = link;
//         playLink.appendChild(playButton)
//         buttonElement.appendChild(playLink)

//         row.appendChild(buttonElement)

//         tableBody.appendChild(row)
//     }
// }

