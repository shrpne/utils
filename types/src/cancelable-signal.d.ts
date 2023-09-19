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
