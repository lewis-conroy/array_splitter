function splitArray(inputArray, popSize) {
  let outputArray = [];

  while (inputArray.length > 0) {
    if (popSize > inputArray.length) {
      popSize = inputArray.length;
    }
    for (var i = 0; i < popSize; i++) {
      outputArray.push(inputArray.pop());
    }
  }
  
  return outputArray;
}
