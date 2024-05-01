import { getAccommodationById } from "@/Api";
import { Layout } from "@components/Layout";
import { Carousel, Host, Rate } from "@components/Ui";
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
        {logementData && <Carousel images={logementData.pictures} />}
        <div className="info">
          <Host
            name={logementData?.host.name || ""}
            picture={logementData?.host.picture || ""}
          />
          <Rate rate={logementData?.rating || ""} />
        </div>
      </Layout>
    </>
  );
};
