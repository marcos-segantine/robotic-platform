interface Props {
    data: Record<string, any>,
    keys: Array<string>,
}

export const validateIfNonNullOrUndefined = ({ data, keys }: Props): Boolean => {
    for (const key of keys) {
        if (data[key] === null || data[key] === undefined) return false
    }

    return true;
}