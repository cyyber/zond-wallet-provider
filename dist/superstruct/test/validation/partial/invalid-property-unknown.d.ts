export declare const Struct: import('../../../struct').Struct<{
    name?: string | undefined;
    age?: number | undefined;
}, import('../../../utils').PartialObjectSchema<{
    name: import('../../../struct').Struct<string, null>;
    age: import('../../../struct').Struct<number, null>;
}>>;
export declare const data: {
    name: string;
    unknown: boolean;
};
export declare const failures: {
    value: boolean;
    type: string;
    refinement: undefined;
    path: string[];
    branch: (boolean | {
        name: string;
        unknown: boolean;
    })[];
}[];
