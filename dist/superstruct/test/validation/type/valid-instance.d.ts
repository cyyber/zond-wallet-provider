declare class Person {
    name: string;
    constructor(name: string);
}
export declare const Struct: import('../../../struct').Struct<{
    name: string;
}, {
    name: import('../../../struct').Struct<string, null>;
}>;
export declare const data: Person;
export declare const output: Person;
export {};
