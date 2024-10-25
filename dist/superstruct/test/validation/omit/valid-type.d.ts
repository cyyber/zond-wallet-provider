export declare const Struct: import('../../../struct').Struct<{
    name: string;
}, Omit<{
    name: import('../../../struct').Struct<string, null>;
    age: import('../../../struct').Struct<number, null>;
}, "age">>;
export declare const data: {
    name: string;
    unknownProperty: string;
};
export declare const output: {
    name: string;
    unknownProperty: string;
};
