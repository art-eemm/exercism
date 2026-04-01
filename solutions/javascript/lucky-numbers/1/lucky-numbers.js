// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(""))
  const num2 = Number(array2.join(""))

  return num1 + num2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const str = String(value) // convert to string
  /**
    1. split into an array
    2. reverse the array
    3. join the numbers
    4. check if it is the same
  */
  const reversed = str.split("").reverse().join("")

  return str === reversed
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return 'Required field' // if the input has no value

  const num = Number(input) // convert to number
  
  if (!num) return 'Must be a number besides 0' // if the number isn´t different from 0

  return "" 
}
