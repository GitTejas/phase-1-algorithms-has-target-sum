function hasTargetSum(array, target) {
  const newArray = [];

  for (const num of array) {
    const comp = target - num;

    let foundComp = false;
    for (const newNum of newArray) {
      if (newNum === comp) {
        foundComp = true;
      }
    }

    if (foundComp) {
      return true;
    }

    newArray.push(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  The Big O time complexity would be O(n2). This is because we are iterating through the array multiple times. This would end up being a quadtratic time complexity situation. 
*/

/* 
  Add your pseudocode here
  hasTargetSum which would take in the parameters of an array and target
  Returns "true" if the target is met with the passed in array
  Returns "false" if the target is not met with the passed in array
  Create a variable which holds an empty array that we can push final numbers into
  Iterate/loop through the passed in array and set a new variable to execute the code of subtracting the target from the nums of the iterated array
  Create another variable to contain the boolean of "false" in which we look to see if we can find a "complement"
  Run another loop and have it iterate through our empty array
  Write an if statement to see if any of the numbers in our empty array would be equal to our target. Return "true" if there is a match with the target and any two numbers in the array
  Push the numbers into the new array 
  Return "false" if the loop/method fails to return a match with the target

*/

/*
  Add written explanation of your solution here
  Written as pseudocode
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
