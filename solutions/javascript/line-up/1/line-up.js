//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const lastDigit = number % 10
  const lastTwo = number % 100
  let ending = ""

  if (lastTwo == 11 || lastTwo == 12 || lastTwo == 13) {
    ending = "th"
  } else if (lastDigit == 1) {
    ending = "st"
  } else if (lastDigit == 2) {
    ending = "nd"
  } else if (lastDigit == 3) {
    ending = "rd"
  } else {
    ending = "th"
  }
  return `${name}, you are the ${number}${ending} customer we serve today. Thank you!`
};
