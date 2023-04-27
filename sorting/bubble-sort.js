//**Noting in this code was copied */
//This code was written before checking examples for similar functions and was my original attempt for solving this problem.

// I was suppose to write a bubble sorting function but this solution seemed more efficient at the time.

function xbubble(arr) {
   let i = 0;
   for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[i + 1]) {
         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
         while (arr[i] < arr[i - 1] && i >= 1) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
         }
      }
      i = j + 1;
   }
   return arr;
}
