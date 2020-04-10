/*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/

interface Array<T> {
    groupBy(key: string, totalKey: string): T
}

Array.prototype.groupBy = function (key, totalKey) {
    return this.reduce(
        (result, item) => {
            if (item) {
                if (typeof result[item[key]] === 'undefined')
                    result[item[key]] = { values: [], total: 0, min: Number.MAX_SAFE_INTEGER };
                result[item[key]].values = [...result[item[key]].values, item];
                result[item[key]].total += (item[totalKey] || 0);
                result[item[key]].min = (item[totalKey] || 0) < result[item[key]].min ? (item[totalKey] || 0) : 0;
            }
            return result;
        },
        {},
    );
}