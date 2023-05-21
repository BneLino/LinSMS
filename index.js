const rl = require('readline-sync');
const colors = require('colors');
const title = require('./modules/title.js');
const fastBomber = require('./modules/sms.js');

title('LinoSMSBomber');

let telefon = rl.question('Hedef Numara +90: ' .green);
if (telefon.length != 10) {
    console.log('Telefon Numarasi 10 Haneli Olmalidir!. Ex: 5401234521'.red);
    process.exit(1);
}
title('Numara: ' + telefon);

let miktar = rl.question("Gonderilecek SMS Miktarı: ".green);
if(isNaN(miktar)) return console.log('Gecerli Bir Rakam Giriniz'.red) && process.exit(1);
if (miktar.length == 0) {
    console.log('Miktar Giriniz'.red);
    process.exit(1);
}
title(`Telefon: ${telefon} - Miktar: ${miktar}`);

console.log('SMS Bombardimani Basladi...'.rainbow);

fastBomber(telefon, miktar);
