export declare const Struct: import('../../../struct').Struct<{
    id: number;
    person: {
        name: string;
        age: number;
    };
}, {
    id: import('../../../struct').Struct<number, null>;
    person: import('../../../struct').Struct<{
        name: string;
        age: number;
    }, {
        name: import('../../../struct').Struct<string, null>;
        age: import('../../../struct').Struct<number, null>;
    }>;
}>;
export declare const data: {
    id: number;
};
export declare const failures: {
    value: undefined;
    type: string;
    refinement: undefined;
    path: string[];
    branch: ({
        id: number;
    } | undefined)[];
}[];
