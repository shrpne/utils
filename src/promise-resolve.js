/**
 * @return {[promise: Promise, resolve: function, reject: function]}
 */
export function getPromiseWithResolvers() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return [promise, resolve, reject];
}
