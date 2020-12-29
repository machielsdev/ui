import { MutableRefObject, RefCallback } from 'react';

type Ref<U> = MutableRefObject<U> | RefCallback<U>;

const mergeRefs = <T>(...refs: (Ref<T> | null)[]): Ref<T> | null => {
    // @ts-ignore
    const filteredRefs: Exclude<Ref<T> | null, null>[] = refs.filter(Boolean);
    if (!filteredRefs.length) return null;
    if (filteredRefs.length === 1) return filteredRefs[0];

    return (current: T | null): void => {
        if (current !== null) {
            filteredRefs.forEach((filteredRef: Ref<T>): void => {
                if (typeof filteredRef === 'function') {
                    filteredRef(current);
                } else {
                    filteredRef.current = current;
                }
            })
        }
    }
}

export {
    mergeRefs
}
