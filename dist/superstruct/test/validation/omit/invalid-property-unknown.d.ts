export declare const Struct: import('../../../struct').Struct<{
    name: string;
}, Omit<{
    name: import('../../../struct').Struct<string, null>;
    age: import('../../../struct').Struct<number, null>;
}, "age">>;
export declare const data: {
    name: string;
    age: number;
};
export declare const failures: {
    value: number;
    type: string;
    refinement: undefined;
    path: string[];
    branch: (number | {
        name: string;
        age: number;
    })[];
}[];
