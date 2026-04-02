/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) return 'You forgot to set the timer.'
  if (remainingTime === 0) return 'Lasagna is done.'
  return 'Not done, please wait.' 
}

// it should return the estimate of the total time
export function preparationTime(layers, avgPrepTime = 2) {
 return layers.length * avgPrepTime
}

/** for each noodle layer -> 50g noodles
for each sauce layer -> 0.2l of sauce
1. takes an array of layers
determine the quantity of noodles needed

returns an object with keys: noodles & sauce
*/
export function quantities(layers) {
  let sauce = 0
  let noodles = 0

  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i]
    if (layer === 'noodles') {
      noodles += 50
    }

    if (layer === 'sauce') {
      sauce += 0.2
    }
  }
    return {noodles, sauce}
}

/**
it should accept two arrays
- first one is the list our friend sent
- second one is the list of ingredients of our recipe

The function should add the last item of the first array to the second
- the second array should be modified directly and return nothing
*/
export function addSecretIngredient(friendRecipe, ourRecipe) {
  const secretIngredient = friendRecipe.at(-1)
  ourRecipe.push(secretIngredient)
}

/**
- recipe with amount for 2 portions
- number of portions needed
*/
export function scaleRecipe(recipe, portions) {
  let result = {}
  const factor = portions / 2

  for (let key in recipe) {
    result[key] = recipe[key] * factor
  }

  return result
}