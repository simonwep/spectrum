export const createCanvas = (opt?: CanvasRenderingContext2DSettings): [HTMLCanvasElement, CanvasRenderingContext2D] => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', opt) as CanvasRenderingContext2D;
  return [canvas, context];
};
