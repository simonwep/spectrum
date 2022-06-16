export interface Margin {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export interface Size {
  width: number;
  height: number;
}

export const applyMargin = (
  { width, height }: Size,
  { top, left, bottom, right }: Margin
): DOMRect => {
  return new DOMRect(left, top, width - left - right, height - top - bottom);
};
