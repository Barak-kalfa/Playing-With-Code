//**Noting in this code was copied */

// My merging function:

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