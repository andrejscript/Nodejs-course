const os = require('os');

console.log('Операц. сис-ма', os.platform());

console.log('Архитектура процессора', os.arch());

console.log('Процессоры', os.cpus());

console.log('Свободная память', os.freemem());

console.log('Вся память', os.totalmem());

console.log('Базовая директория', os.homedir());

console.log('Время работы (сек.)', os.uptime());
