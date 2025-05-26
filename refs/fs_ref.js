const fs = require('fs');
const path = require('path');

// File system
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err;

//     console.log('Directory created...');
// })

// fs.mkdirSync //(did't blocked, if big file)

// fs.writeFile(path.join(__dirname, 'notes', 'note.txt'), 'Hello world', err => {
//     if (err) throw err;
//     console.log('File written to...');

//     fs.appendFile(path.join(__dirname, 'notes', 'note.txt'), '\nNode.js is awesome', err => {
//         if (err) throw err;
//         console.log('File new to...');

//         fs.readFile(path.join(__dirname, 'notes', 'note.txt'), 'utf8', (err, data) => {
//             if (err) throw err;
//             // console.log(Buffer.from(data).toString()); -> utf8
//             console.log(data);
//         });
//     });
// });

// fs.readFile(path.join(__dirname, 'notes', 'note.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     // console.log(Buffer.from(data).toString()); -> utf8
//     console.log(data);
// });

fs.rename(path.join(__dirname, 'notes', 'note.txt'), path.join(__dirname, 'notes', 'note2.txt'), err => {
    if (err) throw err;
    console.log('File renamed...');
});