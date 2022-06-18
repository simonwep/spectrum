/**
 * Prettifies a duration in seconds
 * @param seconds
 */
export const prettyDuration = (seconds: number): string => {
  const rounded = Math.floor(seconds);
  const minutes = Math.floor(rounded / 60);
  return `${minutes}:${String(rounded % 60).padStart(2, '0')}`;
};
