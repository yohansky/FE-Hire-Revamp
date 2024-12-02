import Image from "next/image";
import React from "react";
import icon from "../../public/images/iconputih.png";

const Footer = () => {
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" style={{ backgroundColor: "#5E50A1" }}>
        <div style={{ marginTop: "5vh", marginLeft: "8vw", marginRight: "8vw" }}>
          <Image src={icon} />
          <p className="col-4" style={{ marginTop: "2vh", color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus culpa ab, eius voluptatum suscipit accusantium nostrum unde optio cum? Mollitia maxime illum minus libero suscipit saepe ratione soluta quod.
          </p>

          <div style={{ border: "1px solid white", marginTop: "3vh" }} />
          <div style={{ marginTop: "2vh" }}></div>
        </div>
      </header>
    </div>
  );
};

export default Footer;
