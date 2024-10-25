/**
 * A {@link ReadonlyMap} that cannot be modified after instantiation.
 * The implementation uses an inner map hidden via a private field, and the
 * immutability guarantee relies on it being impossible to get a reference
 * to this map.
 */
declare class FrozenMap<Key, Value> implements ReadonlyMap<Key, Value> {
    #private;
    get size(): number;
    [Symbol.iterator](): MapIterator<[Key, Value]>;
    constructor(entries?: readonly (readonly [Key, Value])[] | null);
    entries(): MapIterator<[Key, Value]>;
    forEach(callbackfn: (value: Value, key: Key, map: this) => void, thisArg?: any): void;
    get(key: Key): Value | undefined;
    has(key: Key): boolean;
    keys(): MapIterator<Key>;
    values(): MapIterator<Value>;
    toString(): string;
}
/**
 * A {@link ReadonlySet} that cannot be modified after instantiation.
 * The implementation uses an inner set hidden via a private field, and the
 * immutability guarantee relies on it being impossible to get a reference
 * to this set.
 */
declare class FrozenSet<Value> implements ReadonlySet<Value> {
    #private;
    get size(): number;
    [Symbol.iterator](): SetIterator<Value>;
    constructor(values?: readonly Value[] | null);
    entries(): SetIterator<[Value, Value]>;
    forEach(callbackfn: (value: Value, value2: Value, set: this) => void, thisArg?: any): void;
    has(value: Value): boolean;
    keys(): SetIterator<Value>;
    values(): SetIterator<Value>;
    toString(): string;
}
export { FrozenMap, FrozenSet };
