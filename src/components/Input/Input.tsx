import * as React from 'react';
import { useState } from 'react';
import { Variant } from '@/components';
import clsx from 'clsx';
import { Button } from '@/components/Button';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    variant?: Variant;
    type?: string;
}

const Input = ({
    onChange,
    type
}: React.PropsWithChildren<InputProps>): React.ReactElement => {
    const [value, setValue] = useState('');
    const [hasFocus, setHasFocus] = useState(false);

    return (
        <div className={clsx(
            'cui-input-base',
            hasFocus && 'has-focus',
            value && 'has-value'
        )}>
            <label
                className={clsx(
                    'cui-input-label'
                )}
            >
                Test
            </label>
            <input
                type={type}
                value={value}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                className={clsx(
                    'cui-input'
                )}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                    if (onChange) {
                        onChange(event);
                    }
                }}
            />
            <div className="cui-input-actions">
                <Button variant={Variant.PRIMARY} small>Test</Button>
            </div>
        </div>
    );
};

export default Input;
