// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let firstNumber = Number(array1.join(''))
  let secondNumber = Number(array2.join(''))
  return firstNumber + secondNumber
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const text = String(value)
  const palindrom = Number(text.split('').reverse().join(''))

  return palindrom === value
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  console.log(input)
  if (input === "" || input === null || input === undefined) {
    return "Required field"
    console.log("Required field")
  }

  if (Number(input) === 0 || Number.isNaN(Number(input))) {
    return "Must be a number besides 0"
    console.log("Must be a number besides 0")
  }

  return ""
}
