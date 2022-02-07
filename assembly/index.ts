import * as console from "./myConsole";

export function add(a: i32, b: i32): i32 {
  console.log(`run add: ${a}, ${b}`);
  return a + b;
}

   
/**
 * @param {number} number
 * @return {number}
 */
 export default function factorial(number: i32): i32 {
  console.log(`factorial: ${number}`);

  let result = 1;

  for (let i: i32 = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}