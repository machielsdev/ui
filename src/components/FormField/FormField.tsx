import * as React from 'react';
import PropTypes from 'prop-types';
import TextField, { TextFieldProps } from '@/components/FormField/TextField';

interface FormFieldProps extends TextFieldProps {
    as?: 'input' | 'textarea' | 'select';
}

const FormField = React.forwardRef<HTMLElement, FormFieldProps>((
    {
        as = 'input',
        label
    },
    ref
): React.ReactElement => {
    switch (as) {
        case 'input':
        default:
            return React.createElement(TextField, {
                ref: ref as React.RefObject<HTMLInputElement>,
                label
            })
    }
});

FormField.displayName = 'FormField';
FormField.propTypes = {
    as: PropTypes.oneOf(['input', 'textarea', 'select']),
    label: PropTypes.node
}

export default FormField;
