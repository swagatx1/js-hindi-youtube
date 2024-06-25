// #1
const accountId = 144553  // CONST  CANT BE CHANGED
let accountEmail = "swagat@google.com" // LET
var accountPassword = "12345" // VAR
accountCity = "Jaipur" // DEFAULT

// accountId = 2 // TRYING TO REWRITE CONST VARIABLE ERROR

// #2
let accountState; // IF A VARIABLE IS NOT ASSIGNED VALUE IT HAS VALUE 'undefined' BY DEFAULT
console.log("accountState : ", accountState)

// #3
accountEmail = "sw@hc.com"
accountPassword = "21212121"
accountCity = "pune"

console.log("accountId : ",accountId);
console.log("accountEmail : ",accountEmail);       // WRITING COLSOL.LOG IS REDUNDANT
console.log("accountPassword : ",accountPassword); // INSTED YOU CAN USE CONSOLE.TABLE
console.log("accountCity : ",accountCity);

// CONSOLE.TABLE
console.table([accountId, accountEmail,accountPassword,accountCity])
console.table([{"accountId":accountId, "accountEmail":accountEmail, "accountPassword":accountPassword, "accountCity":accountCity}])

/*
#4
Use LET over VAR
Reason - Because in earlier JS var variables would change global var when being used inside '{}' too 
so it used to change the value of orignal var when for/while loop or any fun would run 
that's why var in not used anymore
*/


