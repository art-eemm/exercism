// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let sum = 0
  stack.forEach((num, index) => {
    if (num === card) {
      sum += 1
    }
  })
  return sum
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let even = 0
  let odd = 0
  for (const card of stack) {
    if (card % 2 === 0) {
      even += 1
    } else {
      odd += 1
    }
  }
  if (type === true) {
      return even
    } else {
      return odd
    }
}
