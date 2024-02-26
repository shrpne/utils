/**
 * @template {any} T
 * @param {number} time
 * @param {T} [result] - result of resolved promise
 * @return {Promise<T>}
 */
export function wait(time, result) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(result), time);
    });
}


/**
 * @param {function(): boolean} conditionFn
 * @param {number} [delay=100]
 * @return {Promise<void>}
 */
export function waitCondition(conditionFn, delay = 100) {
    return new Promise((resolve) => {
        const timer = setInterval(() => {
            if (conditionFn()) {
                clearInterval(timer);
                resolve();
            }
        }, delay);
    });
}

/**
 * @template {any} T
 * @param {function(): Promise<T>} promiseFn
 * @param {number} delay
 * @param {object} [options]
 * @param {number} [options.limit=0] - max number of checks
 * @param {boolean} [options.immediate=false]
 * @param {function(T): boolean} [options.validate]
 * @return {Promise<T>}
 */
export async function waitPromiseWithCondition(promiseFn, delay, {limit = 0, immediate = false, validate} = {}) {
    // by default just resolved promise is enough so no extra validation
    validate = typeof validate === 'function' ? validate : () => true;

    let counter = 0;
    if (immediate) {
        const result = await promiseFn();
        if (validate(result)) {
            return result;
        }
        counter = 1;
    }

    async function check() {
        if (limit && counter >= limit) {
            return false;
        }
        counter++;
        await wait(delay);
        const result = await promiseFn();
        if (validate(result)) {
            return result;
        }
        return check();
    }

    return check();
}

