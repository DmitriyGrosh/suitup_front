import React, {
  FC,
  useContext,
  PropsWithChildren,
  Children,
  useEffect,
} from 'react';
import { ISelectContext, SelectContext } from './Select.context';
import { cx } from '@shared/lib/cx';

interface IOption {
  value: string | number;
}

export const Option: FC<PropsWithChildren<IOption>> = ({ children, value }) => {
  const { ref, activeElement, setActiveElement, ...rest } =
    useContext<ISelectContext>(SelectContext);
  const isActive = activeElement?.value === value?.toString();
  const label = Children.toArray(children)[0];
  const classNames = cx('option', 'option__active', !!isActive);

  const handleChangeActiveElement = () => {
    setActiveElement({
      label: label as string,
      value: value === null ? null : value?.toString(),
    });
  };

  useEffect(() => {
    if (isActive && !activeElement?.label) {
      setActiveElement((prev) => ({
        ...prev,
        label: label as string,
      }));
    }
  }, []);

  return (
    <div
      className={classNames}
      role="button"
      onClick={handleChangeActiveElement}
    >
      <input
        className="option__radio"
        {...rest}
        ref={ref}
        type="radio"
        value={value}
        checked={isActive}
      />
      <span className="option__text">{children}</span>
    </div>
  );
};

Option.displayName = 'Option';
