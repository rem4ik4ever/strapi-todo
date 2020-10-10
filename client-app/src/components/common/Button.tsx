import * as React from 'react';
import classNames from 'classnames';
import ElementProps from './ElementProps.type';

const Button = ({className="", ...rest}: ElementProps) => (
  <button
    className={classNames(
      'bg-red-400',
      'text-white',
      'text-lg',
      'p-2',
      'rounded-lg',
      'hover:bg-red-500',
      'focus:outline-none'
    ).concat(` ${className}`)}
    {...rest}
  ></button>
);

export default Button;
