import { mergeRefs } from "../mergeRefs";

describe('mergeRefs test', () => {
    it('should return null when falsy values applied', () => {
        const foo = mergeRefs(null);

        expect(foo).toBeNull();
    });

    it('should return first if refs length = 1', () => {
        const foo = () => ({});

        const ref = mergeRefs(foo);

        expect(ref).toBe(foo);
    });

    it('should handle object and callback refs', () => {
        let callbackRef: any = null;
        const objectRef = { current: null };

        const refs = mergeRefs((node: HTMLDivElement) => {
            callbackRef = node;
        }, objectRef);

        //@ts-ignore
        refs(document.createElement('div'));

        expect(callbackRef).toBeInstanceOf(HTMLDivElement);
        expect(objectRef.current).toBeInstanceOf(HTMLDivElement);
    })

    it('should do nothing when node is null', () => {
        const mockFn = jest.fn();

        const refs = mergeRefs(() => {
            mockFn();
        }, { current: null });

        //@ts-ignore
        refs(null);

        expect(mockFn).not.toHaveBeenCalled();
    })
})
