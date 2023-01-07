import { FC, ReactNode } from 'react';
import classNames from 'classnames';


import { ButtonSize } from './button'


export type ButtonContentProps = {
  children: ReactNode;
  iconLeft?: FC;
  iconRight?: FC;
  isLoading?: boolean;
  size?: ButtonSize;
}


export function ButtonContent({
  children,
  iconLeft,
  iconRight,
} : ButtonContentProps) {

  const IconLeft = iconLeft;
  const IconRight = iconRight;


  // detect if button is icon on either side
  return (
    <div className={classNames("flex justify-between items-center", {})}>

      { IconLeft ? (
        <IconLeft />
      ) : null }

      <span className="mx-1">{children}</span>

      { IconRight ? (
        <IconRight />
      ) : null }

    </div>
  );

}
