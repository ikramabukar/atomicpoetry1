import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{ position: "relative" }}
      className="fixed-bottom border border-tertiary text-center py-3"
    >
      <div> © {currentYear} Copyright: Atomic Poetry </div>
    </footer>
  );
};

export default Footer;
