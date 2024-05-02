import { getAccommodationById } from "@/Api";
import { Layout } from "@components/Layout";
import { Accordion, Carousel, Host, Rate } from "@components/Ui";
import { useParams } from "react-router-dom";
import "./Logement.scss";

export const Logement = () => {
  const { id } = useParams();
  console.log(id);

  const logementData = getAccommodationById(id ?? "");

  if (!logementData) {
    return <div>Logement not found</div>;
  }

  return (
    <>
      <Layout>
        <div className="logement">
          {logementData && <Carousel images={logementData.pictures} />}
          <div className="logement-informations">
            <div className="logement-info">
              <h1 className="logement-title">{logementData?.title}</h1>
              <p className="logement-location">{logementData?.location}</p>
            </div>
            <div className="logement-host-info">
              <Host
                name={logementData?.host.name || ""}
                picture={logementData?.host.picture || ""}
              />
              <Rate rate={logementData?.rating || ""} />
            </div>
          </div>
          <div className="logement-equipement">
            <Accordion title="Description">
              <p>{logementData?.description}</p>
            </Accordion>
            <Accordion title="Équipements">
              {logementData?.equipments.map((equipment) => (
                <p key={equipment}>{equipment}</p>
              ))}
            </Accordion>
          </div>
        </div>
      </Layout>
    </>
  );
};
