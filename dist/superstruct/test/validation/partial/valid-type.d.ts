export declare const Struct: import('../../../struct').Struct<{
    name?: string | undefined;
    age?: number | undefined;
}, import('../../../utils').PartialObjectSchema<{
    name: import('../../../struct').Struct<string, null>;
    age: import('../../../struct').Struct<number, null>;
}>>;
export declare const data: {
    name: string;
    unknownProperty: boolean;
};
export declare const output: {
    name: string;
    unknownProperty: boolean;
};
