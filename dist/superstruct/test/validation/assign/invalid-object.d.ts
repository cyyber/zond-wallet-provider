export declare const Struct: import('../../../struct').Struct<{
    a: number;
    b: number;
}, {
    a: import('../../../struct').Struct<number, null>;
    b: import('../../../struct').Struct<number, null>;
}>;
export declare const data: {
    a: string;
    b: number;
    c: number;
};
export declare const failures: ({
    value: string;
    type: string;
    refinement: undefined;
    path: string[];
    branch: (string | {
        a: string;
        b: number;
        c: number;
    })[];
} | {
    branch: (number | {
        a: string;
        b: number;
        c: number;
    })[];
    path: string[];
    refinement: undefined;
    type: string;
    value: number;
})[];
