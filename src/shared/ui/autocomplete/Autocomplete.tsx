import React, {
	ChangeEvent,
	InputHTMLAttributes,
	FocusEvent,
	forwardRef,
	useState,
	useEffect, useRef,
} from 'react';
import { Spinner } from "@shared/ui/spinner";
import { useDebounce, useHandleOutside } from "@shared/hooks";

import './Autocomplete.scss';
import cn from "classnames";

interface IAutocomplete extends InputHTMLAttributes<HTMLInputElement> {
	color?: BaseColors;
	options: any[];
	getOptionLabel: (data: any) => string;
	isLoading?: boolean;
	debounce?: number;
}

const Autocomplete = forwardRef<HTMLInputElement, IAutocomplete>((props, ref) => {
	const {
		onChange,
		name,
		defaultValue,
		color,
		options,
		getOptionLabel,
		isLoading,
		debounce,
		onFocus,
		...rest
	} = props;

	const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);
	const [autocompleteValue, setAutocompleteValue] = useState<any>(defaultValue || '');
	const [filteredOptions, setFilteredOptions] = useState<any[]>(options);
	const debounceValue = useDebounce<any>(autocompleteValue, debounce);
	const autocompleteRef = useRef<HTMLDivElement>(null);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;

		if (onChange) {
			const defaultValueTest = {
				target: {
					name,
					value: { value },
				},
			};

			onChange(defaultValueTest as unknown as ChangeEvent<HTMLInputElement>);
		}
		if (!isOpenOptions) {
			setIsOpenOptions(true);
		}

		setAutocompleteValue(value);
	};

	const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
		if (onFocus) {
			onFocus(event);
		}

		if (!isOpenOptions) {
			setIsOpenOptions((prev) => !prev);
		}
	};

	const handleClose = () => {
		setIsOpenOptions(false);
	};

	useHandleOutside<HTMLDivElement>(autocompleteRef, handleClose, 'mousedown');
	useEffect(() => {
		const data = options.filter((el) => getOptionLabel(el).includes(debounceValue));

		if (!debounceValue) {
			setFilteredOptions(options);
		} else {
			setFilteredOptions(data);
		}
	}, [debounceValue]);

	return (
		<div ref={autocompleteRef} className={`autocomplete-${color}`}>
			<div className={`autocomplete-${color}__container`}>
				<input
					{...rest}
					onChange={handleChange}
					onFocus={handleFocus}
					ref={ref}
					value={autocompleteValue}
					className={`autocomplete-${color}__container__input`}
				/>
				{isLoading && <Spinner spinnerSize="small" className={`autocomplete-${color}__container__spinner`} />}
			</div>
			<div
				className={cn(`autocomplete-${color}__list`, { 'autocomplete-${color}__list__active': isOpenOptions })}
			>
				{filteredOptions.length ? (
					<>
						{filteredOptions.map((option, index) => {
							const node = getOptionLabel(option);

							const clickHandler = () => {
								const value = {
									target: {
										value: option,
									},
								} as unknown as ChangeEvent<HTMLInputElement>;

								handleChange(value);
								handleClose();
							};

							return (
								<div
									onClick={clickHandler}
									key={index}
									className="list-row"
								>
									{node}
								</div>
							);
						})}
					</>
				) : (
					<div className="list-row list-row__disabled">
						No options
					</div>
				)}
			</div>
		</div>
	);
});

Autocomplete.defaultProps = {
	color: 'blue',
	debounce: 0,
};

Autocomplete.displayName = 'Autocomplete';
export default Autocomplete;
