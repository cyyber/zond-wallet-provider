export declare const Struct: import('../../../struct').Struct<{
    address: {
        street: string;
        city: string;
    };
}, Pick<{
    name: import('../../../struct').Struct<string, null>;
    address: import('../../../struct').Struct<{
        street: string;
        city: string;
    }, {
        street: import('../../../struct').Struct<string, null>;
        city: import('../../../struct').Struct<string, null>;
    }>;
}, "address">>;
export declare const data: {
    address: {
        street: number;
        city: string;
    };
};
export declare const failures: {
    value: number;
    type: string;
    refinement: undefined;
    path: string[];
    branch: (number | {
        street: number;
        city: string;
    } | {
        address: {
            street: number;
            city: string;
        };
    })[];
}[];
