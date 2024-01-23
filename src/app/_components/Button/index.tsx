import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import './Button.scss';

interface ButtonProps {
	size?: ButtonType;
	className?: string;
}

type ButtonType = 'small' | 'medium' | 'large';

export function Button({ size = 'small', className, children }: PropsWithChildren<ButtonProps>) {
	return (
		<button role="button" className={classNames(`Button Button--${size}`, className)}>
			{children}
		</button>
	);
}
