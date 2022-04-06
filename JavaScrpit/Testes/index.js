import fetch from 'node-fetch';
import fs from 'fs'

fetch('https://pokeapi.co/api/v2/pokemon?limit=1126')
    .then(res => res.json())
    .then(json => {
        const results = json.results;
        for (var i = 0; i < results.length; i++) {
        fs.appendFile('names.txt', results[i].name + '\n' , function (err) {
            if (err) throw err;
            console.log(results[i].name);
        })}; 
    });