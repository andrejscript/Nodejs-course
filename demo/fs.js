// File system
const fs = require('fs');
const path = require('path');

// ------------- CREATE DIR

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) {
//         throw err
//     }

//     console.log('Папка создана!')
// })

const filePath = path.join(__dirname, 'test', 'text.txt');

// ---------- CRAETE FILE & CONTENT

// fs.writeFile(filePath, 'Hello NodeJS', err => {
//     if(err) {
//         throw err
//     }

//     console.log('Файл создан!');
// }) 

// ----------- ADD CONTENT IN FILE


// fs.appendFile(filePath, '\nHello again', err => {
//     if(err) {
//         throw err
//     }

//     console.log('Файл дополнен!');
// }) 


// ----------- READ FILE

fs.readFile(filePath, 'utf-8', (err, content) => {
        if(err) {
        throw err
    }

    // const data = Buffer.from(content);
    // console.log('Content:', data.toString());

    console.log(content);
}) 