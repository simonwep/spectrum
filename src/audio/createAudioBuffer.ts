/**
 * Creates an audio buffer from a blob.
 * @param file
 * @param options
 */
export const createAudioBuffer = async (file: Blob, options?: AudioContextOptions): Promise<AudioBuffer> => {
    return new Promise(resolve => {
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            const data = fileReader.result as ArrayBuffer;
            const audio = new AudioContext(options);
            audio.decodeAudioData(data).then(resolve);
        };

        fileReader.readAsArrayBuffer(file);
    });
};
