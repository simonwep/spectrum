export const nextNumberPowerOf2 = (height: number) => {
  let fftSize = 2;
  while (fftSize / 2 <= height) fftSize *= 2;
  return fftSize;
};
