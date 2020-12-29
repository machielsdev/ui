import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { mergeRefs } from '@/components/utils/mergeRefs';
import { ModalManager } from '@/components/Modal/modalManager';

let modalManager: ModalManager;

export const getManager = (): ModalManager => {
    if (!modalManager) {
        modalManager = new ModalManager();
    }

    return modalManager;
}

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Indicates whether the modal should be shown
     */
    show?: boolean;
    /**
     * Hook called when modal tries to hide
     */
    onHide?: () => void;
    /**
     * Indicates whether the modal should be horizontally centered. Default: true
     */
    horizontallyCentered?: boolean;
    /**
     * Indicates whether the modal uses a darkened backdrop. Default: true
     */
    backdrop?: boolean
}

/**
 * Event fires when a model closes
 */
export const MODAL_CLOSE = 'c:ui:modal.close';
export const MODAL_OPEN = 'c:ui:modal.open';

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((
    {
        backdrop = true,
        children,
        horizontallyCentered = true,
        onHide,
        show,
    },
    ref
): React.ReactElement => {
    const modalRef = useRef<HTMLDivElement>(null);

    const hideModal = (): void => {
        getManager().removeModal(modalRef);
        if (onHide) {
            onHide();
        }
    }

    const showModal = (): void => {
        getManager().addModal({
            ref: modalRef,
            backdrop
        })
    }

    useEffect(() => {
        if (show) {
            showModal();
        }
    }, []);

    useEffect(() => {
        if (show) {
            showModal();
        } else {
            hideModal();
        }
    }, [show])

    return createPortal(
        show ? (
            <div
                ref={mergeRefs(ref, modalRef)}
                className={clsx(
                    'modal-container',
                    show && 'modal-show'
                )}
                onClick={() => {
                    hideModal()
                }}
                role="dialog"
                aria-modal={true}
            >
                <div
                    className={clsx(
                        'modal-content',
                        horizontallyCentered && 'horizontal-center',
                    )}
                >
                    {children}
                </div>
            </div>
        ) : undefined,
        document.body
    );
});

Modal.displayName = 'Modal';
Modal.propTypes = {
    backdrop: PropTypes.bool,
    children: PropTypes.node,
    onHide: PropTypes.func,
    show: PropTypes.bool,
    horizontallyCentered: PropTypes.bool
}

export default Modal;
