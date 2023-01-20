# Whatsapp Bot via NodeJS

## Disclaimer

Penggunaan Bot menjadi tanggung jawab pengguna, ada kemungkinan nomor yang digunakan untuk WA Bot dapat diblokir oleh WA.

## Cara penggunaan

Untuk pustaka/library yang akan kita gunakan adalah pustaka [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)

```bash
mkdir [nama project] && cd [nama project] && npm init --y
yarn add whatsapp-web.js
yarn add qrcode-terminal
```

```js
// >>> index.js

// set pustaka yang akan digunakan
const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// Membuat Client Baru
const wa = new Client();

// Scan QR-Code
wa.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// Whatsapp-web.js siap digunakan
wa.on("ready", () => {
  console.log("Udah Siap!");

  const number = "+6282xxxxxxxxx"; // Nomor HP yang akan dikirim pesan
  const text = "Selamat pagi Bos!"; // Pesan yang akan dikirim
  const chatId = number.substring(1) + "@c.us";

  // Kirim pesan
  wa.sendMessage(chatId, text);
});

// Pesan masuk ke bot
wa.on("message", async (message) => {
  // Cek pesan apakah sama dengan halo
  if (message.body === "halo") {
    // balas pesan
    message.reply("Haii!!");
  }
});

// Client disconnect dari Whatsapp-web
wa.on("disconnected", (reason) => {
  console.log("disconnect Whatsapp-bot", reason);
});

wa.initialize();
```

Menjalankan Whatsapp Bot

```
node index.js
```

Contoh skrip penggunaan dapat dilihat pada link [ini](https://github.com/pedroslopez/whatsapp-web.js/blob/main/example.js)
