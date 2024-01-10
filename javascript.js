let userOrder = prompt(
  "Please enter your desired flavors, separated by commas:"
  )

let flavors = userOrder.split(","); //split each comma separated entry into an array of strings

for (let i in flavors) {
  flavors[i].trim
}

// const orderObj = {}

// for (let i in flavors) {
//   if (flavors[i] in orderObj) {
//     orderObj[flavors[i]]++; // increment the flavor's value by 1
//     } else {
//       orderObj[flavors[i]] = 1; // add the flavor and initialize the count to 1
//     }
//   }

//   console.table(orderObj);