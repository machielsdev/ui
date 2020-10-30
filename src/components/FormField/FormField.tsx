import * as React from 'react';
import PropTypes from 'prop-types';
import TextField, { TextFieldProps } from '@/components/FormField/TextField';

interface FormFieldProps extends TextFieldProps {
    as?: 'input' | 'textarea' | 'select';
    valid?: boolean;
}

const FormField = React.forwardRef<HTMLElement, FormFieldProps>((
    {
        as = 'input',
        label,
        valid
    },
    ref
): React.ReactElement => {
    switch (as) {
        case 'input':
        default:
            return React.createElement(TextField, {
                ref: ref as React.RefObject<HTMLInputElement>,
                label,
                valid
            })
    }
});

FormField.displayName = 'FormField';
FormField.propTypes = {
    as: PropTypes.oneOf(['input', 'textarea', 'select']),
    label: PropTypes.node,
    valid: PropTypes.bool
}

export default FormField;
