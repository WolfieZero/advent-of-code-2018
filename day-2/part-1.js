require('fs').readFile(__dirname + '/input-1.txt', 'utf8', (error, input) => {
    let numTwo = 0;
    let numThree = 0;
    input.split("\n").forEach(id => {
        let countTwo = true;
        let countThree = false;
        let characters = {};
        id.split('').forEach(character => {
            if (characters[character]) characters[character]++
            else characters[character] = 1
        });
        for (let character of Object.keys(characters)) {
            if (characters[character] === 2 && countTwo) {
                ++numTwo;
                countTwo = false;
            } else if (characters[character] === 3 && countThree) {
                ++numThree;
                countThree = false;
            }
        }
    });
    console.log(numTwo * numThree);
});
