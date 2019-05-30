const fs = require('fs');

let jsonDoc = [];
let doc = fs.readFileSync('./file/mentorsList.csv', 'utf8');
doc = doc.split("\n");
doc.shift();


//utilizar map
doc.forEach(elem => {
    elem = elem.split(',')
    let [mentorName, courseName] = elem
    let obj = { "name": elem[0], "course": elem[1] } //llaves desde el archivo
    jsonDoc.push(obj);
});


let json = { "mentors": jsonDoc }
json = JSON.stringify(json, '\n');
console.log(json, typeof(json))
fs.writeFileSync('./file/mentores.json', json);