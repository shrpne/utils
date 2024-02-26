/**
 * @template {any} T
 * @param {number} time
 * @param {T} [result] - result of resolved promise
 * @return {Promise<T>}
 */
export function wait<T extends unknown>(time: number, result?: T): Promise<T>;
/**
 * @param {function(): boolean} conditionFn
 * @param {number} [delay=100]
 * @return {Promise<void>}
 */
export function waitCondition(conditionFn: () => boolean, delay?: number): Promise<void>;
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
export function waitPromiseWithCondition<T extends unknown>(promiseFn: () => Promise<T>, delay: number, { limit, immediate, validate }?: {
    limit?: number;
    immediate?: boolean;
    validate?: (arg0: T) => boolean;
}): Promise<T>;
