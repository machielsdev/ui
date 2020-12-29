import React from 'react';
import { mount } from 'enzyme';
import { Modal } from '@/components';
import { ModalProps } from '@/components/Modal/Modal';

describe('Test modal', function (): void {
    it('should render modal', (): void => {
        const modal = mount(
            <div>
                <Modal show={true} />
            </div>
        )

        expect(modal.find('.modal-container').length).toBe(1);
    });

    it('should hide modal when show prop changes to false', (): void => {
        const modal = mount<ModalProps>(
            <Modal show={true} />
        );

        modal.setProps({
            show: false
        })

        expect(modal.find('.modal-container').length).toBe(0);
    })

    it('should hide the modal on container click', (): void => {
        const mockFn = jest.fn();

        const modal = mount<ModalProps>(
            <Modal
                show={true}
                onHide={mockFn}
            />
        );

        modal.find('.modal-container').simulate('click');
        modal.setProps({
            show: false
        });

        expect(modal.find('.modal-container').length).toBe(0);
        expect(mockFn).toHaveBeenCalled();
    })

    it('should not hide modal when clicked on modal', (): void => {
        const mockFn = jest.fn();

        const modal = mount<ModalProps>(
            <Modal
                show={true}
                onHide={mockFn}
            />
        );

        modal.find('.modal-content').simulate('click');

        expect(mockFn).not.toHaveBeenCalled();
    })

    it('should ignore show prop change when shown state is the same', (): void => {
        const mockFn = jest.fn();

        const modal = mount<ModalProps>(
            <Modal
                show={false}
                onHide={mockFn}
            />
        );

        modal.setProps({
            show: false
        });

        expect(mockFn).not.toHaveBeenCalled();
    });
});
