//**Noting in this code was copied */
//This code was written before checking examples for similar functions and was my original attempt for solving this problem.
// A function thats merges two arrays and sort them out:

function mergeTwoArrays(A,B){
    let result = []
    let i = 0;
    let j = 0;
      while(result.length !== A.length + B.length){
           result.push((A[i] < B[j]) ? A[i] : B[j]);
           (result[result.length-1] === A[i]) ? i++ : j++; 
      }
    return result
}

mergeTwoArrays([1, 10, 50, 77], [2, 14, 99, 100]);