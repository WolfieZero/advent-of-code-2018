require('fs').readFile(__dirname + '/input-1.txt', 'utf8', (error, input) => {
    let frequency = 0;
    let frequencies = [];
    let duplicateFrequency = false;
    while (duplicateFrequency == false) {
        duplicateFrequency = input.split("\n").some(change => {
            if (!isNaN(change = parseInt(change))) {
                frequency += change;
                if (frequencies.indexOf(frequency) > 0) return true;
                frequencies.push(frequency);
            }
        });
    }
    console.log(frequency);
});
