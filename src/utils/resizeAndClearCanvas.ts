interface Size {
  height: number;
  width: number;
}

export const resolveRealCanvasSize = (
  canvas: HTMLCanvasElement,
  ratio = devicePixelRatio
): Size => {
  canvas.width = 0;
  canvas.height = 0;
  const rect = canvas.getBoundingClientRect();

  // See https://stackoverflow.com/a/35244519/7664765
  const width = Math.round(ratio * rect.right) - Math.round(ratio * rect.left);
  const height = Math.round(ratio * rect.bottom) - Math.round(ratio * rect.top);
  return { width, height };
};
