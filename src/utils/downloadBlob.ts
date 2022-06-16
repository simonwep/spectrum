/**
 * Triggers the download of an blob.
 * @param blob
 * @param name
 */
export const downloadBlob = (blob: Blob, name: string): void => {
  const link = document.createElement('a');
  document.body.appendChild(link);

  link.setAttribute('download', name);
  link.href = URL.createObjectURL(blob);
  link.click();

  document.body.removeChild(link);
};
