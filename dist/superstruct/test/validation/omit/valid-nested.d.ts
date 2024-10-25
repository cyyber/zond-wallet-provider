export declare const Struct: import('../../../struct').Struct<{
    address: {
        street: string;
        city: string;
    };
}, Omit<{
    name: import('../../../struct').Struct<string, null>;
    address: import('../../../struct').Struct<{
        street: string;
        city: string;
    }, {
        street: import('../../../struct').Struct<string, null>;
        city: import('../../../struct').Struct<string, null>;
    }>;
}, "name">>;
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
