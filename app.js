const difficulty = Number(prompt("Enter a number to assign difficulty of game"));
const targetNum = Math.floor(Math.random() * difficulty) + 1;

let guess =  Number(prompt("Enter your first guess!"));
let attempts = 1;

while(Number(guess) !== targetNum){
    if(guess === 'q') break;
    attempts++;
    if(guess > targetNum) {
        guess = prompt("Too high! Enter a new guess!");
    } else{
        guess = prompt("Too low, Enter a new guess!");
    }
}
if(guess === 'q'){
    console.log("Ok, I guess you quit");
}else{
    console.log(`Congrats! You guessed it in ${attempts} trys!`);
}
