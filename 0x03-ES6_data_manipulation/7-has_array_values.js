function hasValuesFromArray(set, arr) {
  // Check if every element in the array exists in the set
  return arr.every((item) => set.has(item));
}

export default hasValuesFromArray;
