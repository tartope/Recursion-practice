// Iterative function:
// function countDown(num){
//   for(let i = num; i > 0; i--){
//     console.log(i);
//   }
//   console.log("All done!")
// }

// countDown(5)

// Recursive function:
// function countDown(num){
//   if(num <= 0){
//     console.log("All done!");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }

// countDown(3)

// steps for countDown() recursive function:
// countDown is called with 3 (countDown(3)), so num is 3. Is 3 <= 0? No, so if statement is not run.
// 3 is printed to the console.
// 3 is decremented to 2
// countDown(2) (countDown function is called again with 2)
// steps are repeated until num is decremented to 0, so if statement is run (this is the base case).  MUST 'return' at end of if statement to stop the function from continuing.
//_______________________________________

// function sumRange(num){
//   //base case
//   if(num === 1) return 1;
//   //recursive call
//   return num + sumRange(num-1);
// }

// console.log(sumRange(4))    //4+3+2+1= 10

// steps for sumRange() recursive function:
//sumRange(4) is called; 4 does not equal 1, so if statement not run.
//return 4 + sumRange(3); 3 does not equal 1, so if statement not run.
//return 3 + sumRange(2); 2 does not equal 1, so if statement not run.
//return 2 + sumRange(1); 1 is equal to 1, so if statement finally run and returns 1.
//return 1
//
//      return statements look like:
//return 4 + sumRange(3)    //4+6 = 10
//            return 3 + sumRange(2)    //3+3 = 6
//                        return 2 + sumRange(1)  //2+1 = 3
//                                    return 1
//        
//call stack looks like (LIFO, so takes care of top function call first):
//return 2 + sumRange(1): 2+1 = 3
//return 3 + sumRange(2): 3+3 = 6
//return 4 + sumRange(3): 4+6 = 10
//___________________________________________


//Factorial: 4! (4 factoiral: 4*3*2*1=24)

// iterative factorial function:
// function factorial(num){
//   let total = 1;
//   for(let i= num; i > 0; i--){
//     total *= i;
//   }
//   return total;
// }
// console.log(factorial(4));

//recursive factorial function:
// function factorial(num){
//   //base case
//   if(num === 1) return 1;
//   //recursive call
//   return num * factorial(num-1);
// }
// console.log(factorial(4))    //4*3*2*1= 24

//      return statements look like:
//return 4 x sumRange(3)    //4x6 = 24
//            return 3 x sumRange(2)    //3x2 = 6
//                        return 2 x sumRange(1)  //2x1 = 2
//                                    return 1
//
//call stack looks like (LIFO, so takes care of top function call first):
//return 2 x sumRange(1): 2x1 = 2
//return 3 x sumRange(2): 3x2 = 6
//return 4 x sumRange(3): 4x6 = 24
//___________________________________________

//Helper Method Recursion:
//Example only:
// function outer(input){
//   let outerScopedVariable = [];

//   function helper(helperInput){
//     //modify the outerScopedVariable
//     helper(helperInput--)
//   }
//   helper(input);

//   return outerScopedVariable;
// }

//Helper Method recursion:
//takes in an array as input
// function collectOddValues(arr){
//   //the result/new array to be returned
//   let result = [];

//   //helper method in the function with recursive logic; it adds to result; takes in the array input
//   function helper(helperInput){
//     //base case: if array is empty, return
//     if(helperInput.length === 0){
//       return;
//     }
//     //if first element is not cleanly divisible by 2 (it's an odd number), push it to result
//     if(helperInput[0] % 2 !== 0){
//       result.push(helperInput[0]);
//     }
//     //call helper on the array, excluding the first element 
//     helper(helperInput.slice(1));
//   }
//   //call helper function with array input
//   helper(arr)

//   //return result/new array
//   return result;
// }

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

//Pure Recursion with same function as above:
//takes in array input
// function collectOddValues(arr){
//   //defines new array
//   let newArr = [];

//   //base case: if input array is empty, return new array
//   if(arr.length === 0){
//     return newArr;
//   }

//   //if first element is not cleanly divisible by 2 (it's an odd number), push it to new array
//   if(arr[0] % 2 !== 0){
//     newArr.push(arr[0]);
//   }

//   //assign new array to equal, new array, concatenated with array slice(1)
//   //[1].concat(collectOddValues([2,3,4,5]))
//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr;
// }
// console.log(collectOddValues([1,2,3,4,5]));
//_____________________________________________

//Practice examples:

//power:
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// function power(base, exponent){
//     //base case: if exponent is 0, return 1
//     if(exponent === 0) return 1;

//     //recursive call
//     return base * power(base, exponent-1);
// }
// console.log(power(2,2));    //4
//return 2 * power(2,1)    //2*2= 4
//            return 2 * power(2,0) // 2*1= 2
//                        return 1
//_____________________________________________

//factorial
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

// function factorial(num){
//     if(num === 0) return 1;
    
//     return num * factorial(num-1);
// }
// console.log(factorial(3));  //6
//return 3 * factorial(2)  //3*2= 6
//            return 2 * factorial(1)   //2*1= 2
//                         return 1 * factorial(0)  //1*1= 1
//                                      return 1
//_____________________________________________

// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// function productOfArray(arr) {
//     if(arr.length === 0) return 1;
//     return arr[0] * productOfArray(arr.slice(1));
// }
// console.log(productOfArray([1,2,3]));  //6
//return 1 * productOfArray([2,3])  //1*6= 6
//            return 2 * productOfArray([3])  //2*3= 6
//                        return 3 * productOfArray([])  //3*1= 3
//                                    return 1
//_____________________________________________

//recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

// function recursiveRange(num){
//    if(num === 0) return 0;
   
//    return num + recursiveRange(num-1);
// }
// console.log(recursiveRange(4)); //10
//return 4 + recursiveRange(3)    //4+6= 10
//            return 3 + recursiveRange(2)    //3+3= 6
//                        return 2 + recursiveRange(1)    //2+1= 3
//                                    return 1 + recursiveRange(0)  //1+0= 1
//                                                return 0
//_____________________________________________

// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(5));    //5
//stuck figuring out the 'why' of this solution