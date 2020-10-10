import * as React from 'react';
import ElementProps from './ElementProps.type';

const FormField: React.FC<ElementProps> = ({ children }) => (
  <div className="mb-6">{children}</div>
);

export default FormField;
