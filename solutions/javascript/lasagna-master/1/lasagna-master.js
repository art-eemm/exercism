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

export function cookingStatus(time) {
  if (time === 0) {
    return 'Lasagna is done.'
  } else if (time > 0) {
    return "Not done, please wait."
  }

  return "You forgot to set the timer."
}

export function preparationTime(layers, avgTime = 2){
  let totalTime = 0
  for (let i = 0; i < layers.length; i++) {
    totalTime += avgTime
  }
  return totalTime
}

export function quantities(layers){
  const obj = {
    noodles: 0,
    sauce: 0
  }
  
  for (let i = 0; i < layers.length; i++) {
    console.log(layers[i])
    if (layers[i] === "noodles") {
      obj.noodles += 50
    }
    if (layers[i] === "sauce") {
      obj.sauce += 0.2
    }
  }
  return obj
}

export function addSecretIngredient(friendsList, myList){
  const lastIngredient = friendsList.at(-1)
  myList.push(lastIngredient)
}

export function scaleRecipe(recipe, portions){
  let newRecipe = {...recipe}
  let number = 0
  const portion = portions / 2
  for (let ingredient in newRecipe) {
    number = newRecipe[ingredient] * portion
    newRecipe[ingredient] = number
  }
  return newRecipe
}