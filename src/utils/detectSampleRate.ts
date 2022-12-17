export const detectSampleRate = (
  frames: Uint8Array[],
  baseSampleRate: number,
  minLoudness: number
) => {
  let highestFrequency = -1;

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];

    for (let j = 0; j < frame.length; j++) {
      const frequency = (j / frame.length) * (baseSampleRate / 2);
      const loudness = frame[j];

      if (loudness > minLoudness && frequency > highestFrequency) {
        highestFrequency = frequency;
      }
    }
  }

  let sampleRate = 2;
  while (sampleRate / 2 <= highestFrequency) {
    sampleRate *= 2;
  }

  return sampleRate;
};
