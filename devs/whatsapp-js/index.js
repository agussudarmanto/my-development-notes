// set pustaka yang akan digunakan
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Membuat Client Baru
const wa = new Client();

// Scan QR-Code
wa.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

// Whatsapp-web.js siap digunakan
wa.on('ready', () => {
  console.log('Udah Siap!');

  const number = '+6282xxxxxxxxx';               // Nomor HP yang akan dikirim pesan
  const text   = 'Selamat pagi Bos!';            // Pesan yang akan dikirim
  const chatId = number.substring(1) + '@c.us';

  wa.sendMessage(chatId, text);                  // Kirim pesan
});

// Pesan masuk ke bot
wa.on('message', async (message) => {
  if (message.body === 'halo') {                 // Cek pesan apakah sama dengan halo
    message.reply('Haii!!');                     // balas pesan
  }
});

// Client disconnect dari Whatsapp-web
wa.on('disconnected', (reason) => {
  console.log('disconnect Whatsapp-bot', reason);
});

wa.initialize();