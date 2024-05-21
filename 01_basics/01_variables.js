const accountId = 144553
let accountEmail = "swagat@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sw@hc.com"
accountPassword = "21212121"
accountCity = "pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([{"accountId":accountId, "accountEmail":accountEmail, "accountPassword":accountPassword, "accountCity":accountCity}])