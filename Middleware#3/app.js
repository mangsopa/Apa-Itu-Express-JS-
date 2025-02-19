const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// Gunakan ejs
app.set('view engine', 'ejs')

// Third-party Middleware
app.use(expressLayouts)
app.use(morgan('dev'))

// Built-in middleware
app.use(express.static('public'))

// Appplicatiion level middleware
app.use((req, res, next) => {
    console.log('Time ', Date.now())

    // kasih next untuk melanjutkan render halaman
    next()
})

app.get('/', (req, res, next) => {

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

app.use((req, res) => {
    res.status(404)
    res.send('<h1>Not Found 404</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})