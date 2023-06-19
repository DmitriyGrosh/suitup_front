import React, {
  Children,
  PropsWithChildren,
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
  cloneElement,
  forwardRef,
  useState,
  useEffect,
  useRef,
} from 'react';

import { cx } from '@shared/lib/cx';
import { useHandleOutside } from '@shared/hooks';

import { IActiveElement, SelectContext } from './Select.context';

import './Select.scss';
import {Flex} from "@shared/ui/flex";

interface ISelect extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number;
  color?: BaseColors;
  label?: string;
	errorMessage?: string;
	title?: string;
}

export const Select = forwardRef<HTMLInputElement, PropsWithChildren<ISelect>>(
  (props, ref) => {
    const { children, value, label, color, className, errorMessage, title, ...rest } = props;
    const [activeElement, setActiveElement] = useState<IActiveElement>({
      label: label?.toString(),
      value: value?.toString(),
    });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const options = Children.toArray(children);

    const toggleOpen = () => {
      setIsOpen((prev) => !prev);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    const render = (): JSX.Element[] => {
      return options.map((option, index) => {
        const context = {
          activeElement,
          setActiveElement,
          ref,
          ...rest,
        };

        const selectContext = (
          <SelectContext.Provider key={index} value={context}>
            {option}
          </SelectContext.Provider>
        );

        return cloneElement(selectContext as ReactElement);
      });
    };

    useEffect(() => {
      if (rest.onChange && value) {
        const defaultValue = {
          target: {
            name: rest.name,
            value: value.toString(),
          },
        };

        rest.onChange(defaultValue as ChangeEvent<HTMLInputElement>);
      }
    }, []);

    const optionsClassName = cx(`options ${isOpen && 'options__active'}`);

    useHandleOutside<HTMLDivElement>(selectRef, handleClose, 'mousedown');

    return (
			<Flex className="flex__column flex__gap-md">
				{title && <span>{title}</span>}
				<div
					ref={selectRef}
					onClick={toggleOpen}
					className={cx(`select-color-${color}`, className)}
				>
        <span className="selected">
          {activeElement.label ?? 'Select your variant'}
        </span>
					<div className={optionsClassName}>{render()}</div>
				</div>
				{errorMessage && <span className="error">{errorMessage}</span>}
			</Flex>
    );
  },
);

Select.displayName = 'Select';
Select.defaultProps = {
  color: 'blue',
};
