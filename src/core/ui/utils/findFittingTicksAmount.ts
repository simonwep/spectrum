/**
 * Finds a fitting amount of ticks within a specific space.
 * @param min Minimum space between each tick.
 * @param spaceAvailable Total space available.
 * @return [number, number] Ticks and spacing.
 */
export const findFittingTicksAmount = (min: number, spaceAvailable: number): [number, number] => {
  let ticks = 2;

  for (;;) {
    const next = ticks * 2 + (ticks % 2);

    if (spaceAvailable / next < min) {
      break;
    }

    ticks = next;
  }

  return [ticks, spaceAvailable / ticks];
};
