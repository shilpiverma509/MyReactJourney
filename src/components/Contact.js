import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const Contact = () => {
  const user = useContext(UserContext);
  return <div>Contact me</div>;
};

export default Contact;
