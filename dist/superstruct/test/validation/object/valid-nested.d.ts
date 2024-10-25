export declare const Struct: import('../../../struct').Struct<{
    name: string;
    address: {
        street: string;
        city: string;
    };
}, {
    name: import('../../../struct').Struct<string, null>;
    address: import('../../../struct').Struct<{
        street: string;
        city: string;
    }, {
        street: import('../../../struct').Struct<string, null>;
        city: import('../../../struct').Struct<string, null>;
    }>;
}>;
export declare const data: {
    name: string;
    address: {
        street: string;
        city: string;
    };
};
export declare const output: {
    name: string;
    address: {
        street: string;
        city: string;
    };
};
