import * as React from "react";

type FieldErrorProps = {
  error?: string;
};

const FieldError = ({ error = undefined }: FieldErrorProps) => {
  if (!error) {
    return null;
  }
  return <p className="text-red-500 text-xs italic mt-2">{error}</p>;
};
export default FieldError;
