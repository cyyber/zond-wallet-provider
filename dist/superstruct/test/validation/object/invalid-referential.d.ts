export declare const Struct: import('../../../struct').Struct<{
    section: string;
    subsection: string;
}, {
    section: import('../../../struct').Struct<string, null>;
    subsection: import('../../../struct').Struct<string, null>;
}>;
export declare const data: {
    section: string;
    subsection: string;
};
export declare const failures: {
    value: string;
    type: string;
    refinement: string;
    path: string[];
    branch: (string | {
        section: string;
        subsection: string;
    })[];
}[];
