export declare const Struct: import('../../../struct').Struct<{
    name: string;
    age: number;
}, {
    name: import('../../../struct').Struct<string, null>;
    age: import('../../../struct').Struct<number, null>;
}>;
export declare const data: {
    name: string;
    age: string;
};
export declare const failures: {
    value: string;
    type: string;
    refinement: undefined;
    path: string[];
    branch: (string | {
        name: string;
        age: string;
    })[];
}[];
