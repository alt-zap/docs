/**
 * Returns a number as a string spaced every three digits
 *
 * @example 4564231 -> '4 564 231'
 * 21545 -> '21 545'
 */
export const toSpacedString = (number) => {
  const numberAsString = number.toString();

  const spacedStringAsArray = [];
  let digitsStored = 0;

  for (let i = numberAsString.length - 1; i >= 0; i--) {
    if (digitsStored > 0 && digitsStored % 3 == 0) {
      spacedStringAsArray.push(numberAsString[i] + ' ');
    } else {
      spacedStringAsArray.push(numberAsString[i]);
    }

    digitsStored++;
  }

  return spacedStringAsArray.reverse().join('');
};
