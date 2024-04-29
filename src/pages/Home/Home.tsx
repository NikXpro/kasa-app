import { Layout } from "@components/Layout";
import { Banner, Thumb } from "@components/Ui";
import "./Home.scss";
export const Home = () => {
  const logements = [
    {
      id: 1,
      title: "test",
      image: "https://source.unsplash.com/1600x900/?bedroom&compress=true",
      linkUrl: "/test",
    },
    {
      id: 2,
      title: "test",
      image: "https://source.unsplash.com/1600x900/?bedroom&compress=true",
      linkUrl: "/test",
    },
    {
      id: 3,
      title: "test",
      image: "https://source.unsplash.com/1600x900/?bedroom&compress=true",
      linkUrl: "/test",
    },
    {
      id: 4,
      title: "test",
      image: "https://source.unsplash.com/1600x900/?bedroom&compress=true",
      linkUrl: "/test",
    },
    {
      id: 5,
      title: "test",
      image: "https://source.unsplash.com/1600x900/?bedroom&compress=true",
      linkUrl: "/test",
    },
    {
      id: 6,
      title: "test",
      image: "https://source.unsplash.com/1600x900/?bedroom&compress=true",
      linkUrl: "/test",
    },
  ];

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
              image={logement.image}
              linkUrl={logement.linkUrl}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};
