const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// Gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {

    // Contoh Lain data arrays 
    const users = [
        { user: 'Mang Sopa', umur: 25 },
        { user: 'Mang Soto', umur: 27 },
        { user: 'Mang Kantong', umur: 28 }
    ]

    // Bikin varial user dan title yang akan di kirim ke halaman index
    res.render('index', {
        user: 'Mang Sopa',
        title: 'Halaman Home Bro',
        users,
        layout: 'layouts/main-layout',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About Bro'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact Bro'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})