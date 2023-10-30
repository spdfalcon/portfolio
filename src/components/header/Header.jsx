import React from "react";
import logoipsum from "../../assets/logoipsum.svg";
export default function Header() {
  return (
    <>
      <div className="">
        <div className="top flex justify-center gap-2 text-sm py-3 bg-gradient-to-r from-gradient-headerA1 via-gradient-headerA2 to-gradient-headerA3">
          <p className="text-gray-text1  font-inter500">
            Get Quick response via contact us on WhatsApp
          </p>
          <i class="bi bi-whatsapp"></i>
          <a className="font-inter600" href="#">+91 84695 47012</a>
        </div>
        <div className="down container">
          <div className="left">
            <img src={logoipsum} />
          </div>
          <h2 className="">header</h2>
        </div>
      </div>
    </>
  );
}
