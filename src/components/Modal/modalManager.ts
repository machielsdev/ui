import { RefObject } from 'react';

export const MODAL_BACKDROP_CLASS = 'modal-backdrop';

export interface StoredModal {
    ref: RefObject<HTMLDivElement>;
    backdrop?: boolean;
}

export class ModalManager {
    modals: StoredModal[] = [];

    public isTop(ref: RefObject<HTMLDivElement>): boolean {
        return this.modals[this.modals.length - 1].ref === ref;
    }

    public addModal(modal: StoredModal): void {
        this.modals.push(modal);

        if (modal.backdrop) {
            this.placeBackdrop();
        }

        if (!document.body.classList.contains('has-modal')) {
            document.body.classList.add('has-modal');
        }
    }

    public removeModal(ref: RefObject<HTMLDivElement>): void {
        const index = this.modals.findIndex(
            (modal: StoredModal) => modal.ref === ref
        );

        if (index !== -1) {
            this.modals.splice(index, 1);
        }

        if (this.modals.length === 0) {
            document.body.classList.remove('has-modal');
            this.removeBackdrop();
        }
    }

    public placeBackdrop(): void {
        const backdrop = document.getElementsByClassName(MODAL_BACKDROP_CLASS).item(0);
        const topModalWithBackdrop = this.modals.slice().reverse().find((modal: StoredModal) => modal.backdrop);

        if (topModalWithBackdrop) {
            if (backdrop === null) {
                const backdropElement = document.createElement('div');
                backdropElement.classList.add(MODAL_BACKDROP_CLASS);
                document.body.insertBefore(backdropElement, topModalWithBackdrop.ref.current);
            } else {
                topModalWithBackdrop.ref.current?.before(backdrop);
            }
        }
    }

    public removeBackdrop(): void {
        const backdrop = document.getElementsByClassName(MODAL_BACKDROP_CLASS).item(0);

        if (backdrop) {
            document.body.removeChild(backdrop);
        }
    }
}
