const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Untuk respon format JSON
app.get('/about', (req, res) => {
    // res.send('Ini adalah halaman about')

    // Aktifkan yang ini
    res.json({
        nama: 'John Doe',
        email: 'johnDoe@xyz.com',
        noHp: '23172381'
    })
})

// Untuk mengembalikan respon format HTML 
app.get('/html', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})

// Untuk mengembalikan respon ID
// app.get('/produk/:id', (req, res) => {
//     res.send('Product ID : ' + req.params.id)
// })

// Untuk mengembalikan respon ID Pertama dan ID Selanjutnya
// app.get('/produk/:id/category/:idCat', (req, res) => {
//     res.send(`Product ID : ${req.params.id} Category : ${req.params.idCat}`)
// })

// Untuk mengembalikan respon ID dan query string
app.get('/produk/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.category}`)
})

// Untuk mengirim respon apapun yang web terima
app.use('/', (req, res) => {
    res.status(404).send('Halaman yang anda cari tidak ditemukan')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})