// TODO:
// 1. Get the decrement, increment, reset buttons, and count display.
// 2. Add a click event listener to each button and implement the logic.
// 3. When a button is clicked, update the count display accordingly.

const Decrement = document.getElementById("decrement");
const Increment = document.getElementById("increment");
const Reset = document.getElementById("reset");
const Count = document.getElementById("count");

let counter = 0;

Decrement.addEventListener('click',function() {
    if(counter === 0) return;
    counter--;
    Count.textContent = counter;
});

Increment.addEventListener('click',function() {
    counter++;
    Count.textContent = counter;
});

Reset.addEventListener('click',function() {
    counter = 0;
    Count.textContent = counter;
});