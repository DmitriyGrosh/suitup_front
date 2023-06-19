import React, {forwardRef, InputHTMLAttributes, useId} from 'react';
import cn from "classnames";

import './Input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	errorMessage?: string;
	title?: string;
}

export const Input = forwardRef<
  HTMLInputElement,
	InputProps
>(({ className, title, errorMessage, ...props }, ref) => {
	const id = useId();
	const cx = cn(className, 'text-field', {
		'text-field__error': !!errorMessage,
	});

	return (
		<>
			<label htmlFor={id}>{title}</label>
			<input id={id} ref={ref} className={cx} {...props} />
			{errorMessage && <span className="text-field__error-message">{errorMessage}</span>}
		</>
	)
});
