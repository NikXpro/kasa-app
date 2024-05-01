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
          image="https://source.unsplash.com/1600x900/?nature&compress=true"
          title="test"
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
