// A visitor receives a prompt upon opening the website to enter
// a list of comma-separated froyo flavors.
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
// When they view the browser console, they observe a table
// listing how many of each flavor they have ordered.
// In this case, they will be able to observe that they have
// ordered three vanilla, two coffee, and one strawberry froyo.

let flavors = window.prompt("Enter your Flavors Below");

// INPUT: vanilla,vanilla,vanilla,strawberry,coffee,coffee

console.log(flavors);

// OUTPUT: vanilla,vanilla,vanilla,strawberry,coffee,coffee

// Split user input string into an array of strings

const arr = flavors.split(",");

console.log(arr);

const count = {};

for (let i = 0; i < arr.length; i++) {
  const key = arr[i];
  count[key] = (count[key] || 0) + 1;
}
console.log(count);
