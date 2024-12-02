import Image from "next/image";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, NavbarBrand } from "reactstrap";
import icon from "../../public/images/icon.png";

const Nav = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  let menu;

  menu = (
    <div className="col-md-3 text-end" style={{ marginRight: "8vw" }}>
      <Button outline color="primary" className="me-2">
        Masuk
      </Button>
      <Button color="primary" className="me-2">
        Daftar
      </Button>
    </div>
  );

  // if (props.user?.id) {

  // } else {

  // }
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-body-tertiary">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavbarBrand>
              <Image src={icon} style={{ marginLeft: "8vw" }} />
            </NavbarBrand>
          </li>
        </ul>
        {menu}
      </header>
    </div>
  );
};

export default Nav;
