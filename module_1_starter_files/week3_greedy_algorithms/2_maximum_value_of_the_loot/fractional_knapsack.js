// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    const items = [];
    const loot = {
        value: 0,
        weight: 0,
    };
    
    for (let i = 0; i < count; i++) {
        const pricePerKg = values[i] / weights[i];
        items.push({
            weight: weights[i],
            value: values[i],
            pricePerKg
        });
    }

    items.sort((a, b) => b.pricePerKg - a.pricePerKg);

    for (let compound of items) {
        const maxCompoundWeight = Math.min(compound.weight, capacity);
        loot.value += maxCompoundWeight * compound.pricePerKg;
        loot.weight += maxCompoundWeight;
        capacity -= maxCompoundWeight;
    }

    return loot.value;
}

module.exports = max;
