// function taskFirst to instantiate variables using const
// function taskNext to instantiate variables using let

export function taskFirst() {
  const task = 'I prefer const when I can.'; // Using const
  var additionalTask = 'This is a var variable.';
  return task + ' ' + additionalTask;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Using let
  combination += getLast();

  return combination;
}
