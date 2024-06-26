import { Icon } from "@components/Ui";
import { Link } from "react-router-dom";
import "./Header.scss";

type NavItem = {
  id: string;
  name: string;
  path: string;
  newTab?: boolean;
};

const navList: NavItem[] = [
  { id: "home", name: "Accueil", path: "/" },
  { id: "about", name: "A Propos", path: "/about" },
];

export type HeaderProps = {
  pageActive?: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <header>
      <Icon id="logo" />
      <div className="navbar">
        {navList.map((navItem) => (
          <Link
            key={navItem.id}
            to={navItem.path}
            className={`nav-item ${
              props.pageActive === navItem.id ? "active" : ""
            }`}
            target={navItem.newTab ? "_blank" : undefined}
            rel={navItem.newTab ? "noopener noreferrer" : undefined}
          >
            {navItem.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
