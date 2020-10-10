import * as React from "react";
import classNames from "classnames";
import { FaCheck, FaExclamation, FaExclamationTriangle } from "react-icons/fa";

export enum InfoBarStatusType {
  Success = "success",
  Warning = "warning",
  Error = "error",
}

export type InfoBarProps = {
  type: InfoBarStatusType;
  content: string;
};

const getStatusIcon = (type: InfoBarStatusType) => {
  if (type === InfoBarStatusType.Error) {
    return <FaExclamationTriangle />;
  }
  if (type === InfoBarStatusType.Warning) {
    return <FaExclamation />;
  }
  if (type === InfoBarStatusType.Success) {
    return <FaCheck />;
  }
};

const InfoBar = ({ type, content }: InfoBarProps) => {
  const icon = getStatusIcon(type);
  const isSuccess = type === InfoBarStatusType.Success;
  const isWarning = type === InfoBarStatusType.Warning;
  const isError = type === InfoBarStatusType.Error;
  return (
    <div
      className={classNames(
        "rounded-lg",
        "p-2",
        "my-2",
        {
          "bg-red-400": isError,
        },
        {
          "bg-green-400": isSuccess,
        },
        {
          "bg-orange-400": isWarning,
        },
        "text-white",
        "flex",
        "flex-row",
        "items-center",
        "text-sm"
      )}
    >
      {icon}
      <span className="ml-2">{content}</span>
    </div>
  );
};

export default InfoBar;
