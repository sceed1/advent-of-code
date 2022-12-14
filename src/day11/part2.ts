import {realMonkeys, testMonkeys} from './input';

let monkeys = realMonkeys

const superModulo = monkeys.map(m => m.divisor).reduce((a,b) => a * b);

for (let i = 1; i<=10000; i++) {

    for (let monkey of monkeys) {

        for (let item of monkey.items) {
            let worryLevel = monkey.operation(item);
            const newItem = worryLevel % superModulo;
            monkeys[monkey.testFunction(newItem, monkey.divisor)].items.push(newItem);
            monkey.inspectedItems++;
        }

        monkey.items = [];
    }

}

for (let [index, monkey] of Array.from(monkeys.entries())) {
    console.log('Monkey',index,' inspected intems:', monkey.inspectedItems);
}
const result = monkeys
    .map(m => m.inspectedItems)
    .sort((a, b) => a - b)
    .reverse()
    .splice(0,2)
    .reduce((a, b) => a * b)
console.log('Result: ', result)