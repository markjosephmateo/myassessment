console.log("connected");

// Define variables for personal information
const firstName = "John";
const lastName = "Smith";
const age = 30;
const hobbies = ["Biking", "Mountain Climbing", "Swimming"];

// Define variables for work address
const workAddress = {
  city: "Lincoln",
  houseNumber: 32,
  state: "Nebraska",
  street: "Washington"
};

// Define variable for marital status
const isMarried = true;

// Output personal information to console
console.log("Hello World!");
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Age: ${age}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);

// Output work address to console
console.log("Work Address:");
console.log(`city: ${workAddress.city}`);
console.log(`house Number: ${workAddress.houseNumber}`);
console.log(`state: ${workAddress.state}`);
console.log(`street: ${workAddress.street}`);

// Output age and hobbies again using a template literal
console.log(`${firstName} ${lastName} is ${age} years of age`);
console.log(`His Hobbies are: ${hobbies.join(", ")}`);

// Output isMarried variable to console
console.log(`The value of isMarried is: ${isMarried}`);

// Define two variables and compare them
let num1 = 5;
let num2 = 10;
console.log(num1 < num2); // Output: true

// Change the value of num1 and compare again
num1 += 3;
console.log(num1 < num2); // Output: false

// Try out the <= and >= operators
console.log(num1 <= num2); // Output: false
console.log(num1 >= num2); // Output: true

// Try the !== operator
console.log(num1 !== num2); // Output: true


function getColorDescription(color) {
    // Use a switch statement to handle different cases for colors
    switch(color.toLowerCase()) {
      case "black":
        return "Black is the darkest color and is often associated with power, mystery, and sophistication.";
      case "violet":
        return "Violet is a cool color that symbolizes creativity, imagination, and spirituality.";
      case "pink":
        return "Pink is a warm and calming color that symbolizes love, kindness, and femininity.";
      
    }
  }
  
  // Test the function with different color values
  console.log(getColorDescription("black"));
  console.log(getColorDescription("violet"));
  console.log(getColorDescription("Pink"));

  function oddOrEven(number) {
    if (isNaN(number)) {
      console.log("Unexpected input");
    } else if (typeof number === "string") {
      console.log("Unexpected input");
    } else if (number === null) {
      console.log("Unexpected input");
    } else if (number === undefined) {
      console.log("Unexpected input");
    } else if (!Number.isInteger(number)) {
      console.log("Unexpected input");
    } else if (number % 2 === 0) {
      console.log(number + " is an even number.");
    } else {
      console.log(number + " is an odd number.");
    }
  }
  
  // Test the function with different arguments
  oddOrEven(5);       // odd number
  oddOrEven(10);      // even number
  oddOrEven("8");     // Unexpected input
  oddOrEven("20");    // Unexpected input
  oddOrEven("seven"); // Unexpected input
  oddOrEven("Fifteen");// Unexpected input
  oddOrEven(true);    // Unexpected input
  oddOrEven(null);    // Unexpected input
  oddOrEven(undefined);// Unexpected input
  oddOrEven(NaN);     // Unexpected input

  let userInput = prompt("Enter a number between 0 and 20:");
  for (let i = 20; i >= 0; i--) {
    console.log(i);
  }
  for (let i = 20; i >= 0; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  function countEvenNumbers() {
    let userInput = prompt("Please enter a number between 0 and 20:");
    let num = parseInt(userInput);
    
    if (num >= 0 && num <= 20) {
      for (let i = 20; i >= 0; i--) {
        if (i % 2 === 0) {
          console.log(i);
        }
      }
    } else {
      console.log("Invalid input, please enter a number between 0 and 20.");
    }
  }
  
  // Call the function
  countEvenNumbers();

  let num = prompt("Enter a number:");

while (num >= 50) {
  if (num % 10 === 0) {
    console.log("This number is divisible by 10. Skipping...");
  } else if (num % 5 === 0) {
    console.log(num);
  }
  num = prompt("Enter a number:");
}

console.log("Terminating loop. Number is less than 50.");

let remainingAttempts = 3;

while (remainingAttempts > 0) {
  let username = prompt("Enter your username:");
  let password = prompt("Enter your password:");

  if (username === "student@mail.com") {
    if (password === "discovery") {
      alert("Login successful!");
      break;
    } else {
      remainingAttempts--;
      alert(`Incorrect password. You have ${remainingAttempts} attempts remaining.`);
    }
  } else {
    remainingAttempts--;
    alert(`Incorrect username. You have ${remainingAttempts} attempts remaining.`);
  }
}

if (remainingAttempts === 0) {
  alert("You have exceeded the maximum number of attempts. Your account is locked.");
}
