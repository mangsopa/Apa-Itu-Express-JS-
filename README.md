# Panduan Belajar Express.js

Express.js adalah framework untuk Node.js yang digunakan untuk membangun aplikasi web dan API dengan cepat dan mudah. Berikut adalah alur belajar Express.js dari dasar hingga implementasi lanjutan.

---

## 1. Pengenalan Express.js

Sebelum memulai, pastikan Anda sudah menginstal **Node.js** di komputer Anda. Anda dapat mengecek versi Node.js dengan perintah berikut:

```sh
node -v
```

### Instalasi Express.js

Untuk memulai proyek Express.js, buat folder proyek baru dan jalankan perintah berikut:

```sh
mkdir belajar-express
cd belajar-express
npm init -y
npm install express
```

Buat file `server.js` dan tambahkan kode berikut untuk membuat server sederhana:

```js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
```

Jalankan server dengan perintah:

```sh
node server.js
```

Buka browser dan akses `http://localhost:3000/` untuk melihat hasilnya.

---

## 2. Pengenalan Request dan Response

Express.js menyediakan berbagai metode untuk menangani request dan response:

### 2.1 Handling Request dengan **req**

- `req.query` → Mengambil query parameter
- `req.params` → Mengambil parameter dari URL
- `req.body` → Mengambil data dari body request (harus menggunakan middleware `express.json()`)

Contoh penggunaan:

```js
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
```

Akses di browser: `http://localhost:3000/user/123`

### 2.2 Handling Response dengan **res**

- `res.send()` → Mengirim teks atau HTML
- `res.json()` → Mengirim data dalam format JSON
- `res.status()` → Mengatur status response HTTP

Contoh penggunaan:

```js
app.get("/json", (req, res) => {
  res.json({ message: "Ini adalah response dalam format JSON" });
});
```

---

## 3. Implementasi View Engine

View Engine digunakan untuk merender tampilan pada aplikasi Express.js. Salah satu yang paling populer adalah **EJS**.

### 3.1 Instalasi EJS

```sh
npm install ejs
```

### 3.2 Konfigurasi View Engine

Tambahkan kode berikut di `server.js`:

```js
app.set("view engine", "ejs");
app.set("views", "./views");
```

Buat folder `views` dan buat file `index.ejs` dengan isi:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Express EJS</title>
  </head>
  <body>
    <h1>Halo, <%= name %>!</h1>
  </body>
</html>
```

Lalu buat route untuk menampilkan halaman ini:

```js
app.get("/home", (req, res) => {
  res.render("index", { name: "Express.js" });
});
```

Buka browser dan akses `http://localhost:3000/home`.

---

## 4. Penggunaan Middleware

Middleware adalah fungsi yang memiliki akses ke objek **request**, **response**, dan fungsi **next()**. Middleware digunakan untuk menangani autentikasi, logging, parsing request, dll.

### 4.1 Middleware Dasar

Contoh middleware untuk logging request:

```js
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
app.use(logger);
```

### 4.2 Middleware Body Parser

Untuk menangani request **POST**, gunakan `express.json()`:

```js
app.use(express.json());
app.post("/data", (req, res) => {
  res.json({ receivedData: req.body });
});
```

Kirim request POST menggunakan **Postman** atau **cURL**:

```sh
curl -X POST http://localhost:3000/data -H "Content-Type: application/json" -d '{"name":"Express"}'
```

---

## **Kesimpulan**

Anda sekarang sudah memahami dasar-dasar Express.js mulai dari:

1. **Membuat server sederhana**
2. **Menangani request dan response**
3. **Menggunakan View Engine (EJS)**
4. **Menggunakan Middleware**

Selanjutnya, Anda bisa mempelajari:

- **Routing yang lebih kompleks**
- **Menghubungkan Express.js dengan Database (MongoDB, MySQL, dll.)**
- **Implementasi autentikasi dengan JWT atau OAuth**

Selamat belajar! 🚀
