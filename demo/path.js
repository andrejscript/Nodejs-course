const path = require('path')

console.log('Название файла', path.basename(__filename));

console.log('Имя директории', path.dirname(__filename));

console.log('Имя расширения', path.extname(__filename)); 

console.log('Parse', path.parse(__filename)); // объект переменной файла

console.log('Parse specific', path.parse(__filename).name); //конкретное поле объекта

//формирование пути к директории/файлу
console.log(path.join(__dirname, 'server', 'index.html'));