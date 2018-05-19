function test(value) {
    const isDest =
        typeof value === 'object' &&
        value.files &&
        value.absolute &&
        value.hash &&
        value.allowChanges &&
        value.ignoreUpdates;

    return isDest;
}

function print(value, serialize) {
    // remove hash
    const { hash, ...rest } = value;

    return serialize(rest);
}

export { print, test };
