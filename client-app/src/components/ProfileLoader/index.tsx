import { useIdentity } from "context/AuthContext";
import * as React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "urql";
import meQuery from "./meQuery";

const ProfileLoader = () => {
  const { setAuthUser } = useIdentity();
  const [res] = useQuery(meQuery);
  React.useEffect(() => {
    if (res?.data?.me) {
      setAuthUser(res.data.me);
    }
  }, [res.data]);
  if (res.fetching) return <div>Loading Profile</div>;
  if (res.error) {
    return <Redirect to="/login" />;
  }
  return <div />;
};

export default ProfileLoader;
