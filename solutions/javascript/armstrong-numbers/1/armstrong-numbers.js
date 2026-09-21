//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const digits = number.toString().split("")
  const len = BigInt(digits.length)
  let sum = 0n

  for (const digit of digits) {
    sum += BigInt(digit) ** len
  }

  return BigInt(number) === sum
};
