import { forwardRef } from 'react';
import { ButtonProps, Button as NextButton } from '@nextui-org/button';
import clsx from 'clsx';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...props }, ref) => {
        return (
            <NextButton
                ref={ref}
                className={clsx('font-medium', props.className)}
                {...props}>
                {children}
            </NextButton>
        );
    }
);

Button.displayName = 'MyButton';