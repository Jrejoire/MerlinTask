const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

function permuting(string) {
    //Finding permutations with a recursive function
    if (string.length < 2) return string;
    var permutations = [];

    for (var i = 0; i < string.length; i++) {
        var char = string[i];

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

        for (var subPermutation of permuting(remainingString))
            permutations.push(char + subPermutation)
    }
    //Sorting alphabetically
    permutations = permutations.sort();

    //Removing duplicates
    permutations = [...new Set(permutations)];

    return permutations;
}

function findingIndex(stringParam) {
    const initialString = "ODIDULA";
    let permutations = permuting(initialString);
    let resultIndex = permutations.findIndex(string => string === stringParam);

    if (resultIndex >= 0) {
        return resultIndex;
    } else {
        return undefined;
    }
}

app.get('/permutation-index/:string', function (req, res) {
    console.time('calculation time');
    const { string } = req.params;
    const result = {
        "indexOfGivenPermutation": findingIndex(string)
    };
    if (string !== null) {
        res.json(result);
    }
    console.timeEnd('calculation time');
});

app.listen(4000, function () {
    console.log('Listening on port 4000!')
});