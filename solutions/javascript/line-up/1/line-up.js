//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let ending = "th"
  const lastTwoNumbers = number % 100
  const lastNumber = number % 10

  if (lastTwoNumbers === 11 || lastTwoNumbers === 12 || lastTwoNumbers === 13) {
    ending = "th"
  } else if (lastNumber === 1) {
    ending = "st"
  } else if (lastNumber === 2) {
    ending = "nd"
  } else if (lastNumber === 3) {
    ending = "rd"
  }
  return `${name}, you are the ${number}${ending} customer we serve today. Thank you!`
};
