import React from "react";

const Footer = () => {
  return (
    <div className="bg-myAppThemeColor_3">
      <div className="container mx-auto p-6 flex items-center gap-2 justify-between">
        <p className="text-sm">Copyright © Your Website 2023</p>

        <ul className="flex gap-6 text-blue-500">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="terms-and-conditions">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
