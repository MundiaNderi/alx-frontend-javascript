export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint already exists in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize the query count to 1
    weakMap.set(endpoint, 1);
  } else {
    // If it exists, increment the query count by 1
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
  }

  // Check if the query count is greater than or equal to 5
  if (weakMap.get(endpoint) >= 5) {
    // If yes, throw an error with the message "Endpoint load is high"
    throw new Error('Endpoint load is high');
  }
}
