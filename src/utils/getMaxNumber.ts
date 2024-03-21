export function getArrayByMaxNumber(maxNumber: number) {
  return Array.from({ length: maxNumber }, (_, index) => index + 1)
}