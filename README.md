# array_splitter
Splits an input array into an array of chunks of the input array of n lengths. If input_array % n != 0, the remainder of the input list is appended.

```js
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
```
