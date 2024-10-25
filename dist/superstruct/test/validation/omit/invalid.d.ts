export declare const Struct: import('../../../struct').Struct<{
    name: string;
}, Omit<{
    name: import('../../../struct').Struct<string, null>;
    age: import('../../../struct').Struct<number, null>;
}, "age">>;
export declare const data = "invalid";
export declare const failures: {
    value: string;
    type: string;
    refinement: undefined;
    path: never[];
    branch: string[];
}[];
