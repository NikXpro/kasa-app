import { getAccommodationsList } from "@/Api";
import { Layout } from "@components/Layout";
import { Banner, Thumb } from "@components/Ui";
import "./Home.scss";

export const Home = () => {
  const logements = getAccommodationsList();

  return (
    <>
      <Layout pageActive="home">
        <Banner
          image="/images/home_banner.jpg"
          title="Chez vous, partout et ailleurs"
          brightness={40}
        />
        <div className="logements-list">
          {logements.map((logement) => (
            <Thumb
              key={logement.id}
              title={logement.title}
              image={logement.cover}
              linkUrl={"logement/" + logement.id}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};
