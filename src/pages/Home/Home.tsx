import { Layout } from "@components/Layout";
import { Banner } from "@components/Ui";

export const Home = () => {
  return (
    <>
      <Layout pageActive="home">
        <Banner
          image="https://source.unsplash.com/1600x900/?nature&compress=true"
          title="test"
          brightness={50}
        />
        <div>
          <h1>Home</h1>
        </div>
      </Layout>
    </>
  );
};
