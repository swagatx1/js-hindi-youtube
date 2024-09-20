
/*
  Immediately Invoked Function Expressions (IIFE)
  ----------------------------------------------
  IIFE is a function that runs as soon as it is defined.
  This is done by wrapping the function in parentheses and invoking it immediately after.

  Syntax:
  (function() {
      // code
  })();

  Let's break this down with simple examples.
*/

// Example 1: Basic IIFE - It runs immediately
(function() {
    console.log("This IIFE runs immediately!");
})();

// Why use IIFE?

/*
  1. Avoiding Global Scope Pollution:
  If you declare variables outside of a function, they live in the global scope. This can cause problems if other scripts are using the same variable names.
  IIFE helps keep variables private, avoiding clashes with other code.
*/

// Without IIFE - Global variable
var name = "Global Scope Variable";
console.log(name); // Outputs: Global Scope Variable

// Using IIFE to create a local variable
(function() {
    var name = "Local Scope Variable in IIFE";
    console.log(name); // Outputs: Local Scope Variable in IIFE
})();

console.log(name); // Outputs: Global Scope Variable (no conflict with the IIFE variable)

/*
  2. Private Variables:
  Variables inside an IIFE are not accessible from the outside. This makes them "private."
*/

(function() {
    var secret = "This is a secret!";
    console.log(secret); // Outputs: This is a secret!
})();

// console.log(secret); // Error: secret is not defined (it is private to the IIFE)

/*
  3. Immediately Invoking Code:
  When you need to run some setup code or initialization immediately, IIFE is a great choice.
*/

// Example of immediate code execution with IIFE
(function() {
    console.log("IIFE runs this code immediately without needing to call a function explicitly.");
})();

/*
  Conclusion:
  IIFE is useful for:
  - Encapsulating code to prevent variable name conflicts.
  - Creating private variables.
  - Running code immediately when it is defined.
*/

