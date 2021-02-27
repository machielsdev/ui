import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>((
    {
        children,
        className,
        htmlFor,
        ...rest
    },
    ref
): React.ReactElement => (
    <label
        ref={ref}
        className={clsx(
            'form-label',
            className
        )}
        htmlFor={htmlFor}
        {...rest}
    >
        {children}
    </label>
));

FormLabel.displayName = 'FormLabel';
FormLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    htmlFor: PropTypes.string
}

export default FormLabel;
