import { Footer } from "@components/Layout/Footer";
import { Header } from "@components/Layout/Header";
import "./Layout.scss";

export type LayoutProps = {
  children: React.ReactNode;
  pageActive?: string;
};

export const Layout: React.FC<LayoutProps> = ({ children, pageActive }) => {
  return (
    <>
      <div className="layout">
        <Header pageActive={pageActive} />
        <main className="layout-children">{children}</main>
      </div>
      <Footer />
    </>
  );
};
