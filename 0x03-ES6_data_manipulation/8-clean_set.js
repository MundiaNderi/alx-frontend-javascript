/*eslint-disable */
function cleanSet(set, startString) {
  let result = '';

  // Iterate through the values of the set
  set.forEach((value) => {
  // Check if the current value starts with the startString
    if (value.startsWith(startString)) {
    // If it does, append the rest of the string after startString
      result += value.slice(startString.length) + "-";
    }
  });

  // Remove the trailing '-' if there are any values in the result
  if (result.length > 0) {
    result = result.slice(0, -1);
  }

  return result;
}

export default cleanSet;
