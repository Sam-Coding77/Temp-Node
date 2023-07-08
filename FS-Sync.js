const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./first.txt', 'utf8');
const second = readFileSync('./second.txt', 'utf8');
console.log('start');
console.log(first, second);

writeFileSync(
     './result-sync.txt', 
     `Here is the result: ${first}, ${second}`
     , {flag: 'a'}
     );

console.log('done with this task');
console.log('starting the next one');