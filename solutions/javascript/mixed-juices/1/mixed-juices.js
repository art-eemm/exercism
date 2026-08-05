// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalLimes = 0
  let count = 0
  for (let i = 0; totalLimes < wedgesNeeded && i < limes.length; i++) {
    switch (limes[i]) {
      case "small":
        totalLimes = totalLimes + 6
        count ++
        break;
      case "medium":
        totalLimes = totalLimes + 8
        count ++
        break;
      case "large":
        totalLimes = totalLimes + 10
        count ++
        break;
    }
  }
  return count
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let ordersLeft = []
  let time = 0
  let i = 0

  for (i = 0; time < timeLeft && i < orders.length; i++) {
    time = time + timeToMixJuice(orders[i])
  }
  return ordersLeft = orders.slice(i)
}
