import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

import { useHandleOutside } from '@shared/hooks';

import './Popover.scss';

interface IPopover extends PropsWithChildren {
  title: string | ReactNode;
}

export const Popover: FC<IPopover> = ({ title, children }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useHandleOutside(popover, close);

  return (
    <div className="picker">
      <div className="swatch" onClick={() => toggle(true)}>
        {title}
      </div>

      {isOpen && (
        <div className="popover" ref={popover}>
          {children}
        </div>
      )}
    </div>
  );
};
