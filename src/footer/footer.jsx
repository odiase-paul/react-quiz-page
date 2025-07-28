import { Fragment } from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Fragment>
      <div
        style={{
          position: "fixed",
          bottom: "0px",
          left: "0px",
          width: "100%",
        }}
      >
        <footer>© paulakhere@gmail.com {date}</footer>
      </div>
    </Fragment>
  );
};

export default Footer;
