import { Worker } from 'worker_threads';
import { DuplexOptions } from 'readable-stream';
import { BasePostMessageStream } from '../BasePostMessageStream';
import { StreamData } from '../utils';
interface ThreadParentMessageStreamArgs extends DuplexOptions {
    thread: Worker;
}
/**
 * Parent-side Node.js `worker_threads` stream.
 */
export declare class ThreadParentMessageStream extends BasePostMessageStream {
    private _thread;
    /**
     * Creates a stream for communicating with a Node.js `worker_threads` thread.
     *
     * @param args - Options bag.
     * @param args.thread - The thread to communicate with.
     */
    constructor({ thread, ...streamOptions }: ThreadParentMessageStreamArgs);
    protected _postMessage(data: StreamData): void;
    private _onMessage;
    _destroy(): void;
}
export {};
