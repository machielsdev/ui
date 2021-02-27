import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export type FormGroupProps = React.HTMLAttributes<HTMLDivElement>;

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>((
    {
        children,
        className,
        ...rest
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'form-group',
            className
        )}
        {...rest}
    >
        {children}
    </div>
));

FormGroup.displayName = 'FormGroup';
FormGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default FormGroup;
