import { Button } from "components/common";
import * as React from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { useIdentity } from "context/AuthContext";

export default function Header(): JSX.Element {
  const { user } = useIdentity();
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "justify-between",
        "p-3",
        "shadow-md",
        "items-center"
      )}
    >
      <div className="w-1/3">{user && user.email}</div>
      <div className="w-1/3 text-center">
        <h2 className="text-2xl">Todos</h2>
      </div>
      <div className="w-1/3 flex justify-end">
        {user && (
          <Button
            onClick={() => {
              localStorage.removeItem("jwt");
              window.location.href = "/login";
            }}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}
