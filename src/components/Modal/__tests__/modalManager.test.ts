import { ModalManager } from '@/components/Modal/modalManager';
import { createRef } from 'react';

describe('Test modalManager', function () {
    it('should add backdrop if modal needs it', () => {
        const manager = new ModalManager();
        manager.addModal({
            ref: createRef(),
            backdrop: true
        })

        expect(document.body.querySelector('.modal-backdrop')).not.toBeNull();
    });

    it('should add and remove class from body', () => {
        const ref = createRef<HTMLDivElement>();
        const manager = new ModalManager();
        manager.addModal({
            ref: ref
        })

        expect(document.body.classList.contains('has-modal')).toBeTruthy();

        manager.removeModal(ref);

        expect(document.body.classList.contains('has-modal')).toBeFalsy();
    });

    it('should do nothing when ref not found', () => {
        const ref = createRef<HTMLDivElement>();
        const otherRef = createRef<HTMLDivElement>();
        const manager = new ModalManager();
        manager.addModal({
            ref: ref
        })

        manager.removeModal(otherRef);

        expect(manager.modals.length).toBe(1);
    });

    it('should do nothing when the last modal with no backdrop', () => {
        const manager = new ModalManager();
        manager.addModal({
            ref: createRef<HTMLDivElement>(),
            backdrop: false
        });
        manager.removeBackdrop();

        expect(document.body.querySelector('.modal-backdrop')).toBeNull();
    })
});
