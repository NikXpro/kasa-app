import { Layout } from "@components/Layout";
import { Accordion, Banner } from "@components/Ui";
import "./About.scss";
export const About = () => {
  return (
    <>
      <Layout pageActive="about">
        <Banner image="/images/about_banner.jpg" brightness={70} />
        <div className="information">
          <Accordion title="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Accordion>
          <Accordion title="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Accordion>
          <Accordion title="Service">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Accordion>
          <Accordion title="Sécurité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Accordion>
        </div>
      </Layout>
    </>
  );
};
