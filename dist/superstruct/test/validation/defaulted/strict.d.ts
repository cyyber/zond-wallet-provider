export declare const Struct: import('../../../struct').Struct<{
    title: string;
    version: number;
}, {
    title: import('../../../struct').Struct<string, null>;
    version: import('../../../struct').Struct<number, null>;
}>;
export declare const data: {
    version: number;
};
export declare const failures: {
    value: undefined;
    type: string;
    refinement: undefined;
    path: string[];
    branch: ({
        version: number;
    } | undefined)[];
}[];
export declare const create = true;
