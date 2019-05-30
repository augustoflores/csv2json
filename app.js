const fs = require('fs');
var jsonFormat = require('./node_modules/json-format');

let arrMentores = [];
let csv = fs.readFileSync('./file/mentorsList.csv', 'utf8');
csv = csv.split("\n");
csv.shift();

arrMentores =csv.map(elem => {
    elem = elem.split(',')
    return { "name": elem[0], "course": elem[1] } 
})

let json = { "mentors": arrMentores }
fs.writeFileSync('./file/mentores.json', jsonFormat(json));