// Write your solution here!
const cats = ["Milo", "Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    console.log(name);
    
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    console.log(name);

}
function destructivelyRemoveLastCat() {
    cats.pop();
    console.log();

}
function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log();

}
function appendCat(name) {
    cats.push("Broom"); 
    
}
function prependCat(name) {
    cats.shift("Arnold");
}
