import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
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
    const [shown, setShown] = useState(false);

    const hideModal = (event?: React.MouseEvent): void => {
        if (event && event.target !== modalRef.current) {
            return;
        }

        setShown(false);
        getManager().removeModal(modalRef);
        if (onHide) {
            onHide();
        }
    }

    const showModal = (): void => {
        setShown(true);
        getManager().addModal({
            ref: modalRef,
            backdrop
        })
    }

    useEffect((): void => {
        if (!shown && show) {
            showModal();
        } else if (shown && !show) {
            hideModal();
        }
    }, [show]);

    return createPortal(
        show ? (
            <div
                ref={mergeRefs(ref, modalRef)}
                className={clsx(
                    'modal-container'
                )}
                onClick={hideModal}
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
