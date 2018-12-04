require('fs').readFile(__dirname + '/input-1.txt', 'utf8', (error, input) => {
    input = input.split("\n");
    return input.some(firstId =>
        input.some(secondId => {
            const secondIdSplit = secondId.split('');
            let count = 0;
            let result = ''
            firstId.split('').some((character, index) => {
                if (character !== secondIdSplit[index]) {
                    if (++count > 1) return true
                    return false;
                }
                result += character;
            });
            if (count === 1) {
                console.log(result);
                return true;
            }
        })
    );
});
