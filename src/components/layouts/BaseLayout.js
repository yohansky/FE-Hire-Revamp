import { useEffect, useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";

const BaseLayout = (props) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [role, setRole] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userid"));
    setRole(localStorage.getItem("role"));
  }, [token, userId, role]);

  const { children } = props;
  return (
    <div>
      {/* {token && userId ? } */}
      {/* <NavbarLogin /> */}
      <Nav />
      <main style={{ marginLeft: "8vw", marginRight: "8vw", marginBottom: "5vh" }}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
