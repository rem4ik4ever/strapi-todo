import * as React from 'react';

type LabelProps = {
  children: React.ReactNode,
  [x:string]: any
}

const Label = ({children, ...rest}:LabelProps
) => (
  <label className="block text-gray-700 text-sm font-bold mb-2" {...rest} >
    {children}
  </label>
);

export default Label;
