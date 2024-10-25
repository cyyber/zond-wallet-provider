export declare const JSON_FIXTURES: {
    valid: ((string | number | null)[] | {
        a: number;
    } | {
        a: null;
        b: number;
        c: {
            foo: string;
        }[];
    }[] | null)[];
    invalid: (symbol | (() => string) | {
        a: undefined;
    }[] | undefined)[];
};
export declare const JSON_RPC_NOTIFICATION_FIXTURES: {
    valid: ({
        jsonrpc: string;
        method: string;
        params?: undefined;
    } | {
        jsonrpc: string;
        method: string;
        params: {
            foo: string;
        };
    } | {
        jsonrpc: string;
        method: string;
        params: string[];
    })[];
    invalid: (string | number | boolean | never[] | {
        id?: undefined;
        jsonrpc?: undefined;
        method?: undefined;
        params?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        method: string;
        params?: undefined;
    } | {
        jsonrpc: string;
        method: string;
        id?: undefined;
        params?: undefined;
    } | {
        jsonrpc: number;
        method: string;
        id?: undefined;
        params?: undefined;
    } | {
        jsonrpc: string;
        method: {};
        id?: undefined;
        params?: undefined;
    } | {
        jsonrpc: string;
        method: never[];
        id?: undefined;
        params?: undefined;
    } | {
        jsonrpc: string;
        method: boolean;
        id?: undefined;
        params?: undefined;
    } | {
        jsonrpc: string;
        method: null;
        id?: undefined;
        params?: undefined;
    } | {
        jsonrpc: string;
        method: undefined;
        id?: undefined;
        params?: undefined;
    } | {
        jsonrpc: string;
        method: number;
        id?: undefined;
        params?: undefined;
    } | {
        jsonrpc: string;
        method: string;
        params: boolean;
        id?: undefined;
    } | {
        jsonrpc: string;
        method: string;
        params: null;
        id?: undefined;
    } | {
        jsonrpc: string;
        method: string;
        params: number;
        id?: undefined;
    } | {
        jsonrpc: string;
        method: string;
        params: string;
        id?: undefined;
    } | null | undefined)[];
};
export declare const JSON_RPC_REQUEST_FIXTURES: {
    valid: ({
        jsonrpc: string;
        method: string;
        id: number;
        params?: undefined;
    } | {
        jsonrpc: string;
        method: string;
        id: string;
        params: {
            foo: string;
        };
    } | {
        jsonrpc: string;
        method: string;
        id: string;
        params: string[];
    } | {
        jsonrpc: string;
        method: string;
        id: null;
        params?: undefined;
    })[];
    invalid: (string | number | boolean | never[] | {
        id?: undefined;
        jsonrpc?: undefined;
        method?: undefined;
        params?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        method: string;
        params?: undefined;
    } | {
        id: number;
        jsonrpc: number;
        method: string;
        params?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        method: {};
        params?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        method: never[];
        params?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        method: boolean;
        params?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        method: null;
        params?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        method: undefined;
        params?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        method: number;
        params?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        method: string;
        params: boolean;
    } | {
        id: number;
        jsonrpc: string;
        method: string;
        params: null;
    } | {
        id: number;
        jsonrpc: string;
        method: string;
        params: number;
    } | {
        id: number;
        jsonrpc: string;
        method: string;
        params: string;
    } | null | undefined)[];
};
export declare const JSON_RPC_SUCCESS_FIXTURES: {
    valid: ({
        id: number;
        jsonrpc: string;
        result: string;
    } | {
        id: string;
        jsonrpc: string;
        result: {
            foo: string;
        };
    } | {
        id: string;
        jsonrpc: string;
        result: null;
    } | {
        id: number;
        jsonrpc: string;
        result: {
            foo: string;
        }[];
    })[];
    invalid: (string | number | boolean | never[] | {
        jsonrpc?: undefined;
        result?: undefined;
        id?: undefined;
    } | {
        jsonrpc: string;
        result: string;
        id?: undefined;
    } | {
        id: number;
        result: string;
        jsonrpc?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        result?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        result: string;
    } | {
        id: number;
        jsonrpc: number;
        result: string;
    } | {
        id: number;
        jsonrpc: string;
        result: undefined;
    } | {
        id: {};
        jsonrpc: string;
        result: string;
    } | {
        id: never[];
        jsonrpc: string;
        result: string;
    } | {
        id: boolean;
        jsonrpc: string;
        result: string;
    } | {
        id: undefined;
        jsonrpc: string;
        result: string;
    } | null | undefined)[];
};
export declare const JSON_RPC_FAILURE_FIXTURES: {
    valid: ({
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data?: undefined;
            stack?: undefined;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: {
                foo: string;
            };
            stack?: undefined;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: string[];
            stack: string;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: string;
            stack?: undefined;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: number;
            stack?: undefined;
        };
    })[];
    invalid: (string | number | boolean | never[] | {
        jsonrpc?: undefined;
        error?: undefined;
        id?: undefined;
    } | {
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
        id?: undefined;
    } | {
        id: number;
        error: {
            code: number;
            message: string;
        };
        jsonrpc?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        error?: undefined;
    } | {
        id: {};
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: never[];
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: boolean;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: undefined;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: number;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: {};
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: never[];
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: boolean;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: null;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: undefined;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message?: undefined;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            message: string;
            code?: undefined;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: never[];
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code?: undefined;
            message?: undefined;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: boolean;
    } | {
        id: number;
        jsonrpc: string;
        error: null;
    } | {
        id: number;
        jsonrpc: string;
        error: undefined;
    } | {
        id: number;
        jsonrpc: string;
        error: string;
    } | {
        id: number;
        jsonrpc: string;
        error: number;
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: {};
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: never[];
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: boolean;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: null;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: undefined;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: string;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: {};
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: never[];
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: boolean;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: null;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: undefined;
        };
    } | null | undefined)[];
};
export declare const JSON_RPC_ERROR_FIXTURES: {
    valid: ({
        code: number;
        message: string;
        data?: undefined;
        stack?: undefined;
    } | {
        code: number;
        message: string;
        data: {
            foo: string;
        };
        stack?: undefined;
    } | {
        code: number;
        message: string;
        data: string[];
        stack: string;
    } | {
        code: number;
        message: string;
        data: string;
        stack?: undefined;
    } | {
        code: number;
        message: string;
        data: number;
        stack?: undefined;
    })[];
    invalid: (string | number | boolean | never[] | {
        code?: undefined;
        message?: undefined;
    } | {
        code: {};
        message: string;
    } | {
        code: never[];
        message: string;
    } | {
        code: boolean;
        message: string;
    } | {
        code: null;
        message: string;
    } | {
        code: undefined;
        message: string;
    } | {
        code: string;
        message: string;
    } | {
        code: number;
        message: {};
    } | {
        code: number;
        message: never[];
    } | {
        code: number;
        message: boolean;
    } | {
        code: number;
        message: null;
    } | {
        code: number;
        message: undefined;
    } | null | undefined)[];
};
export declare const JSON_RPC_RESPONSE_FIXTURES: {
    valid: ({
        id: number;
        jsonrpc: string;
        result: string;
    } | {
        id: string;
        jsonrpc: string;
        result: {
            foo: string;
        };
    } | {
        id: string;
        jsonrpc: string;
        result: null;
    } | {
        id: number;
        jsonrpc: string;
        result: {
            foo: string;
        }[];
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data?: undefined;
            stack?: undefined;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: {
                foo: string;
            };
            stack?: undefined;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: string[];
            stack: string;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: string;
            stack?: undefined;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: number;
            stack?: undefined;
        };
    })[];
    invalid: (string | number | boolean | never[] | {
        jsonrpc?: undefined;
        result?: undefined;
        id?: undefined;
    } | {
        jsonrpc: string;
        result: string;
        id?: undefined;
    } | {
        id: number;
        result: string;
        jsonrpc?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        result?: undefined;
    } | {
        id: number;
        jsonrpc: number;
        result: string;
    } | {
        id: {};
        jsonrpc: string;
        result: string;
    } | {
        jsonrpc?: undefined;
        error?: undefined;
        id?: undefined;
    } | {
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
        id?: undefined;
    } | {
        id: number;
        error: {
            code: number;
            message: string;
        };
        jsonrpc?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        error?: undefined;
    } | {
        id: {};
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: {};
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: null;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message?: undefined;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            message: string;
            code?: undefined;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: never[];
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code?: undefined;
            message?: undefined;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: boolean;
    } | {
        id: number;
        jsonrpc: string;
        error: null;
    } | {
        id: number;
        jsonrpc: string;
        error: string;
    } | {
        id: number;
        jsonrpc: string;
        error: number;
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: {};
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: null;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: {};
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: null;
        };
    } | null | undefined)[];
};
export declare const JSON_RPC_PENDING_RESPONSE_FIXTURES: {
    valid: ({
        id: number;
        jsonrpc: string;
        result: string;
    } | {
        id: string;
        jsonrpc: string;
        result: {
            foo: string;
        };
    } | {
        id: string;
        jsonrpc: string;
        result: null;
    } | {
        id: number;
        jsonrpc: string;
        result: {
            foo: string;
        }[];
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data?: undefined;
            stack?: undefined;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: {
                foo: string;
            };
            stack?: undefined;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: string[];
            stack: string;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: string;
            stack?: undefined;
        };
    } | {
        id: string;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
            data: number;
            stack?: undefined;
        };
    } | {
        id: number;
        jsonrpc: string;
        error?: undefined;
        result?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        error: undefined;
        result?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        result: undefined;
        error?: undefined;
    } | {
        id: number;
        jsonrpc: string;
        result: undefined;
        error: undefined;
    } | {
        id: number;
        jsonrpc: string;
        result: {
            foo: string;
        };
        error: {
            code: number;
            message: string;
        };
    })[];
    invalid: (string | number | boolean | never[] | {
        jsonrpc?: undefined;
        error?: undefined;
        id?: undefined;
    } | {
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
        id?: undefined;
    } | {
        id: number;
        error: {
            code: number;
            message: string;
        };
        jsonrpc?: undefined;
    } | {
        id: {};
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: never[];
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: boolean;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: undefined;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: number;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: {};
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: never[];
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: boolean;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: null;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: undefined;
        error: {
            code: number;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message?: undefined;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            message: string;
            code?: undefined;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: never[];
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code?: undefined;
            message?: undefined;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: boolean;
    } | {
        id: number;
        jsonrpc: string;
        error: null;
    } | {
        id: number;
        jsonrpc: string;
        error: string;
    } | {
        id: number;
        jsonrpc: string;
        error: number;
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: {};
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: never[];
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: boolean;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: null;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: undefined;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: string;
            message: string;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: {};
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: never[];
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: boolean;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: null;
        };
    } | {
        id: number;
        jsonrpc: string;
        error: {
            code: number;
            message: undefined;
        };
    } | null | undefined)[];
};
export declare const CHARACTER_MAP: {
    '"': string;
    '\\': string;
    '\0': string;
    '\u0001': string;
    '\u0002': string;
    '\u0003': string;
    '\u0004': string;
    '\u0005': string;
    '\u0006': string;
    '\u0007': string;
    '\b': string;
    '\t': string;
    '\n': string;
    '\v': string;
    '\f': string;
    '\r': string;
    '\u000E': string;
    '\u000F': string;
    '\u0010': string;
    '\u0011': string;
    '\u0012': string;
    '\u0013': string;
    '\u0014': string;
    '\u0015': string;
    '\u0016': string;
    '\u0017': string;
    '\u0018': string;
    '\u0019': string;
    '\u001A': string;
    '\u001B': string;
    '\u001C': string;
    '\u001D': string;
    '\u001E': string;
    '\u001F': string;
};
export declare const JSON_VALIDATION_FIXTURES: ({
    value: null;
    valid: boolean;
    size: number;
} | {
    value: Boolean;
    valid: boolean;
    size: number;
} | {
    value: Number;
    valid: boolean;
    size: number;
} | {
    value: String;
    valid: boolean;
    size: number;
} | {
    value: {
        '"': string;
        '\\': string;
        '\0': string;
        '\u0001': string;
        '\u0002': string;
        '\u0003': string;
        '\u0004': string;
        '\u0005': string;
        '\u0006': string;
        '\u0007': string;
        '\b': string;
        '\t': string;
        '\n': string;
        '\v': string;
        '\f': string;
        '\r': string;
        '\u000E': string;
        '\u000F': string;
        '\u0010': string;
        '\u0011': string;
        '\u0012': string;
        '\u0013': string;
        '\u0014': string;
        '\u0015': string;
        '\u0016': string;
        '\u0017': string;
        '\u0018': string;
        '\u0019': string;
        '\u001A': string;
        '\u001B': string;
        '\u001C': string;
        '\u001D': string;
        '\u001E': string;
        '\u001F': string;
    };
    valid: boolean;
    size: number;
} | {
    value: {
        a: Date;
        b: Date;
        c: Date;
        testOne: {
            value: string;
        };
        testTwo: {
            value: string;
        };
        testThree: {
            nestedObjectTest: {
                multipleTimes: {
                    valueOne: {
                        value: string;
                    };
                    valueTwo: {
                        value: string;
                    };
                    valueThree: {
                        value: string;
                    };
                    valueFour: {
                        value: string;
                    };
                    valueFive: Date;
                    valueSix: {};
                };
            };
        };
        testFour: {};
        testFive: {
            something: null;
            somethingElse: null;
            anotherValue: null;
            somethingAgain: {
                value: string;
            };
            anotherOne: {
                nested: {
                    multipleTimes: {
                        valueOne: {
                            value: string;
                        };
                    };
                };
            };
        };
    };
    valid: boolean;
    size: number;
} | {
    value: undefined;
    valid: boolean;
    size: number;
} | {
    value: unknown[];
    valid: boolean;
    size: number;
} | {
    value: Record<string, unknown>;
    valid: boolean;
    size: number;
})[];
