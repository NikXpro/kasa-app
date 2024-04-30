import { getAccommodationsList } from "@/Api";
import { Layout } from "@components/Layout";
import { Banner, Carousel, Host, Thumb } from "@components/Ui";
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
        <Carousel
          images={[
            "https://source.unsplash.com/1600x900/?nature&compress=true",
            "https://source.unsplash.com/1600x900/?bedroom&compress=true",
            "https://source.unsplash.com/1600x900/?kitchen&compress=true",
            "https://source.unsplash.com/1600x900/?portrait&compress=true",
          ]}
        />
        <Host
          name="Alexandre Dumas"
          picture="https://source.unsplash.com/100x100/?portrait&compress=true"
        />
        <div className="logements-list">
          {logements.map((logement) => (
            <Thumb
              key={logement.id}
              title={logement.title}
              image={logement.cover}
              linkUrl={"logement/" + logement.id.toString()}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};
