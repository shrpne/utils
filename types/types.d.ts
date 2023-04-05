declare module "error-cancel" {
    export default class CancelError extends Error {
        constructor(message?: string);
        isCanceled: boolean;
    }
}
declare module "cancelable-signal" {
    /**
     * @typedef {object} CancelableSignal
     * @property {boolean} isCanceled
     * @property {function(): void} cancel
     * @property {Promise['catch']} onCancel
     */
    /**
     * Inspired on https://medium.com/@masnun/creating-cancellable-promises-33bf4b9da39c
     * @return {CancelableSignal}
     */
    export function createCancelableSignal(): CancelableSignal;
    export type CancelableSignal = {
        isCanceled: boolean;
        cancel: () => void;
        onCancel: Promise<any>['catch'];
    };
}
declare module "wait" {
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
}
