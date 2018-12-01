require('fs').readFile(__dirname + '/input-1.txt', 'utf8', (error, input) => {
    console.log(input.split("\n").reduce((frequency, change) =>
        parseInt(frequency) + (!isNaN(change = parseInt(change)) ? change : 0)
    ));
});
