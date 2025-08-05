export const getArrayOfNumbers = (length: number, maxNumber: number = 10): number[] => {
  const { floor, random } = Math;

  return Array.from({ length }, () => {
    return floor(random() * maxNumber);
  });
};
