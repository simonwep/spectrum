export interface AnalyzerOptions {
    fftSize?: number;
    minDecibels?: number;
    maxDecibels?: number;
}

export interface FrameOptions {
    buffer: AudioBuffer;
    frames: number;
    contextOptions: OfflineAudioContextOptions;
    analyzerOptions?: AnalyzerOptions;
}

/**
 * Takes an audiobuffer and renders all its frames.
 * @param opt
 */
export const renderFrames = async (opt: FrameOptions): Promise<Uint8Array[]> => {
    const frames: Uint8Array[] = new Array(opt.frames);
    const context = new OfflineAudioContext(opt.contextOptions);

    // Create analyzer node
    const analyzer = context.createAnalyser();
    Object.assign(analyzer, opt.analyzerOptions);
    analyzer.smoothingTimeConstant = 0;
    analyzer.connect(context.destination);

    // Render all frames
    const frameSize = opt.buffer.duration / opt.frames;
    const bufferSize = analyzer.frequencyBinCount;

    for (let i = 0; i < opt.frames; i++) {
        const frame = i * frameSize;
        context.suspend(frame).then(() => {
            const buffer = frames[i] = new Uint8Array(bufferSize);
            analyzer.getByteFrequencyData(buffer);
            return context.resume();
        });
    }

    const src = context.createBufferSource();
    src.buffer = opt.buffer;
    src.connect(analyzer);
    src.start();

    await context.startRendering();
    return frames;
};
