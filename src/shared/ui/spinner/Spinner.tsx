import React, { FC, AllHTMLAttributes } from 'react';
import cn from "classnames";

import './Spinner.scss';

interface ISpinner extends AllHTMLAttributes<HTMLDivElement> {
	spinnerSize?: BaseSize;
}

export const Spinner: FC<ISpinner> = ({ className, spinnerSize, ...rest }) => (
	<div {...rest} className={cn(`lds-ring lds-ring__${spinnerSize}`, className)}>
		<div />
		<div />
		<div />
		<div />
	</div>
);

Spinner.displayName = 'Spinner';
