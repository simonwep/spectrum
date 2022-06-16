/**
 * Prettifies a duration in seconds
 * @param seconds
 */
export const prettyDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
};
