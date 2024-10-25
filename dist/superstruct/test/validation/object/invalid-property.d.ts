export declare const Struct: import('../../../struct').Struct<{
    name: string;
    age: number;
    height: string;
}, {
    name: import('../../../struct').Struct<string, null>;
    age: import('../../../struct').Struct<number, null>;
    height: import('../../../struct').Struct<string, null>;
}>;
export declare const data: {
    name: string;
    age: string;
    height: number;
};
export declare const failures: ({
    value: string;
    type: string;
    refinement: undefined;
    path: string[];
    branch: (string | {
        name: string;
        age: string;
        height: number;
    })[];
} | {
    value: number;
    type: string;
    refinement: undefined;
    path: string[];
    branch: (number | {
        name: string;
        age: string;
        height: number;
    })[];
})[];
