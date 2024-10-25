export declare const Struct: import('../../../struct').Struct<{
    name?: string | undefined;
    age?: number | undefined;
}, import('../../../utils').PartialObjectSchema<{
    name: import('../../../struct').Struct<string, null>;
    age: import('../../../struct').Struct<number, null>;
}>>;
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
