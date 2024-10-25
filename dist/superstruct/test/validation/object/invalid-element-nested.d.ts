export declare const Struct: import('../../../struct').Struct<{
    name: string;
    emails: string[];
}, {
    name: import('../../../struct').Struct<string, null>;
    emails: import('../../../struct').Struct<string[], import('../../../struct').Struct<string, null>>;
}>;
export declare const data: {
    name: string;
    emails: (string | boolean)[];
};
export declare const failures: {
    value: boolean;
    type: string;
    refinement: undefined;
    path: (string | number)[];
    branch: (string | boolean | (string | boolean)[] | {
        name: string;
        emails: (string | boolean)[];
    })[];
}[];
