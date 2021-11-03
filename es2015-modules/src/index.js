import { choice, remove } from './helpers';
import fruits from './foods';

function drawFruit(){
    const ranChoice = choice(fruits);
    console.log(`I'd like one ${ranChoice}, please.`);
    console.log(`Here you go: ${ranChoice}`);
    remove(fruits, ranChoice);
    console.log('Delicious! May I have another?');
    console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);
}

drawFruit();