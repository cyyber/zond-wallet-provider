export declare const Struct: import('../../../struct').Struct<{
    newPassword: string;
    confirmPassword: string;
}, {
    newPassword: import('../../../struct').Struct<string, null>;
    confirmPassword: import('../../../struct').Struct<string, null>;
}>;
export declare const data: {
    newPassword: string;
    confirmPassword: string;
};
export declare const failures: ({
    value: string;
    type: string;
    refinement: string;
    path: string[];
    branch: (string | {
        newPassword: string;
        confirmPassword: string;
    })[];
} | {
    value: {
        newPassword: string;
        confirmPassword: string;
    };
    type: string;
    refinement: string;
    path: never[];
    branch: {
        newPassword: string;
        confirmPassword: string;
    }[];
})[];
