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
