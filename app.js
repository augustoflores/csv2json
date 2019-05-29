const fs = require('fs');

let jsonDoc = [];
let doc = fs.readFileSync('./file/mentorsList.csv', 'utf8');
doc = doc.split("\n");
doc.shift();

doc.forEach(elem => {
    elem = elem.split(',')
    let obj = `{"name":"${elem[0]}","course":"${elem[1]}"}`
    jsonDoc.push(obj);
});


let json = `{"mentors":${jsonDoc}}`
console.log(json, typeof(json))
json = JSON.stringify(json);
console.log(json, typeof(json))
    //fs.writeFileSync('./file/mentores.json', json, 'utf8');