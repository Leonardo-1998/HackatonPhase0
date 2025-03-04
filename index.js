// let name = prompt("Please enter your name")


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
        id : data.length
    }
    // Mempush data yang diambil kedalam array of object
    data.push(objectOfPlaylist)

    // Mengecek nilai data
    console.log(data)

    // Mengosongkan kembali input text box
    judulLagu.value = ""
    artis.value = ""
    link.value = ""
}
