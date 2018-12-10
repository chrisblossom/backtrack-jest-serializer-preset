const isPlainObject = require('lodash.isplainobject');

function test(value) {
    const isDest =
        !!(
            isPlainObject(value) &&
            Array.isArray(value.files) &&
            isPlainObject(value.absolute) &&
            isPlainObject(value.hash) &&
            isPlainObject(value.allowChanges) &&
            isPlainObject(value.ignoreUpdates)
        ) === true;

    return isDest;
}

function print(value, serialize) {
    // remove hash
    const { hash, ...rest } = value;

    return serialize(rest);
}

export { print, test };
