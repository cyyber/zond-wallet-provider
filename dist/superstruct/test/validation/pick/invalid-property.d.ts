export declare const Struct: import('../../../struct').Struct<{
    age: number;
}, Pick<{
    name: import('../../../struct').Struct<string, null>;
    age: import('../../../struct').Struct<number, null>;
}, "age">>;
export declare const data: {
    age: string;
};
export declare const failures: {
    value: string;
    type: string;
    refinement: undefined;
    path: string[];
    branch: (string | {
        age: string;
    })[];
}[];
