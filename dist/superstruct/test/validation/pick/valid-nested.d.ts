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
        street: string;
        city: string;
    };
};
export declare const output: {
    address: {
        street: string;
        city: string;
    };
};
