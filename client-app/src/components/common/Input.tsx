import * as React from 'react';

const Input = (props:any) => (
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    {...props}
  />
);

export default Input;
