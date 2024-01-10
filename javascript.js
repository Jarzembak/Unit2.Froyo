let flavors = prompt(
  "Please enter your desired flavors, separated by commas:"
  )

let userOrder = flavors.split(","); // split each comma separated entry into an array of strings

for (let i in userOrder) {
  userOrder[i] = userOrder[i].trim() // remove any whitespace
}

const orderObj = {} // create an empty object to hold the order

for (let i in userOrder) {
  if (userOrder[i] in orderObj) { // check if the flavor is already in the object
    orderObj[userOrder[i]]++; // increment the flavor's value by 1
    } else {
      orderObj[userOrder[i]] = 1; // add the flavor and initialize the count to 1
    }
  }

  console.table(orderObj);