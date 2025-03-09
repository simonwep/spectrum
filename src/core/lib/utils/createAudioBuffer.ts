/**
 * Creates an audio buffer from a blob.
 * @param file
 * @param options
 */
export const createAudioBuffer = async (file: File, options?: AudioContextOptions): Promise<AudioBuffer> => {
  const context = new AudioContext(options);
  return context.decodeAudioData(await file.arrayBuffer());
};
