import { Icon } from "@components/Ui";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <Icon id="logo" />
      <p className="rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
