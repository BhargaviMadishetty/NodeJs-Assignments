const readline = require('readline');
const r1 = readline.createInterface(process.stdin, process.stdout);
r1.question('Please enter your name: ', (answer) => {
    console.log('Hello ' + answer);
    r1.close();
});


// run the file
// enter the name
// check the output