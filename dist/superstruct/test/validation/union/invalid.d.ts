export declare const Struct: import('../../../struct').Struct<{
    a: string;
} | {
    b: number;
}, null>;
export declare const data: {
    b: string;
};
export declare const failures: ({
    value: {
        b: string;
    };
    type: string;
    refinement: undefined;
    path: never[];
    branch: {
        b: string;
    }[];
} | {
    value: undefined;
    type: string;
    refinement: undefined;
    path: string[];
    branch: ({
        b: string;
    } | undefined)[];
} | {
    value: string;
    type: string;
    refinement: undefined;
    path: string[];
    branch: (string | {
        b: string;
    })[];
})[];
