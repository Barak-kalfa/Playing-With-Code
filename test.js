var romanToInt = function (s) {
   if (s.length === 0) {
      return null;
   }
   const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
   };
   let sum = 0;
   for(let i = 0; i < s.length-1; i++){
     if(roman[s[i]] > roman[s[i+1]])
   }
   
   return sum;
};

const str = "III";

romanToInt(str);
