function updateUniqueItems(map) {
  // Check if the input argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the entries of the map
  for (const [key, value] of map.entries()) {
    // Check if the quantity is 1
    if (value === 1) {
      // Update the quantity to 100
      map.set(key, 100);
    }
  }
}

export default updateUniqueItems;
