import { ChildProcess } from 'child_process';
import { DuplexOptions } from 'readable-stream';
import { BasePostMessageStream } from '../BasePostMessageStream';
import { StreamData } from '../utils';
interface ProcessParentMessageStreamArgs extends DuplexOptions {
    process: ChildProcess;
}
/**
 * Parent-side Node.js `child_process` stream.
 */
export declare class ProcessParentMessageStream extends BasePostMessageStream {
    private _process;
    /**
     * Creates a stream for communicating with a Node.js `child_process` process.
     *
     * @param args - Options bag.
     * @param args.process - The process to communicate with.
     */
    constructor({ process, ...streamOptions }: ProcessParentMessageStreamArgs);
    protected _postMessage(data: StreamData): void;
    private _onMessage;
    _destroy(): void;
}
export {};
