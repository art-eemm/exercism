//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const mod100 = number % 100
  const mod10 = number % 10
  let last = "th"

  if (mod100 < 11 || mod100 > 13) {
    if (mod10 === 1) last = 'st'
    else if (mod10 === 2) last = 'nd'
    else if (mod10 === 3) last = 'rd'
  }
  return `${name}, you are the ${number}${last} customer we serve today. Thank you!`
};
