//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  const letters = str.split('')
  const reversed = letters.reverse()
  return reversed.join('')
};
