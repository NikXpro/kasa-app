import { Layout } from "@components/Layout";
import { Link } from "react-router-dom";
import "./Notfound.scss";
export const Notfound = () => {
  return (
    <>
      <Layout>
        <div className="notfound">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link className="link" to="/">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </Layout>
    </>
  );
};
