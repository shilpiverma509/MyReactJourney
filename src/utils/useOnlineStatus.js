import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check if online and return the status (boolean)

  const [onlineStatus, setOnlineStatus] = useState(true);
  addEventListener("online", (event) => {});
  ononline = (event) => {};

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
