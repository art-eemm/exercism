// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${Math.floor(Math.random() * (10000 - 1000)) + 1000}`
  //console.log()
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * (42000.0 - 41000.0) + 41000.0
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const array = ['D','H','J','K','L','M','N','R','T','Y']
  let randomNum = Math.floor(Math.random() * (array.length - 0))
  return array[randomNum]
}
