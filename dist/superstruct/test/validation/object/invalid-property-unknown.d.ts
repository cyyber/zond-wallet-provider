export declare const Struct: import('../../../struct').Struct<{
    name: string;
    age: number;
}, {
    name: import('../../../struct').Struct<string, null>;
    age: import('../../../struct').Struct<number, null>;
}>;
export declare const data: {
    name: string;
    age: number;
    unknown: boolean;
};
export declare const failures: {
    value: boolean;
    type: string;
    refinement: undefined;
    path: string[];
    branch: (boolean | {
        name: string;
        age: number;
        unknown: boolean;
    })[];
}[];
