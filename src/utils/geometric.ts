export const findFittingTicksAmount = (min: number, spaceAvailable: number): number => {
    let possibleTicks = 2;

    for (; ;) {
        const next = (possibleTicks * 2) + possibleTicks % 2;

        if ((spaceAvailable / next) < min) {
            break;
        }

        possibleTicks = next;
    }

    return possibleTicks;
};
