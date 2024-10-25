export declare const Struct: import('../../../struct').Struct<{
    emails: string[];
}, Omit<{
    name: import('../../../struct').Struct<string, null>;
    emails: import('../../../struct').Struct<string[], import('../../../struct').Struct<string, null>>;
}, "name">>;
export declare const data: {
    emails: (string | boolean)[];
};
export declare const failures: {
    value: boolean;
    type: string;
    refinement: undefined;
    path: (string | number)[];
    branch: (string | boolean | (string | boolean)[] | {
        emails: (string | boolean)[];
    })[];
}[];
