//
const express = require('express');
const app = express();
const fs = require('fs');


async function myfunction() {
const res = await fetch('http://jsonplaceholder.typicode.com/posts');
let commits = await res.json();
var jsonOn = JSON.parse(commits)
console.log(jsonOn);
}

// stringify JSON Object
var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);
 
fs.writeFile("post.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});

let result = JSON.stringify(json, null, 2);
fs.writeFileSync('post.json', data);

app.get('/', function (_req, res) {

 
  res.send(json)
 
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});