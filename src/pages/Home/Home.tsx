import { Layout } from "@components/Layout";
import { Banner, Tag, Thumb } from "@components/Ui";

export const Home = () => {
  return (
    <>
      <Layout pageActive="home">
        <Banner
          image="https://source.unsplash.com/1600x900/?nature&compress=true"
          title="test"
          brightness={50}
        />
        <Tag name="test" />

        <Thumb
          linkUrl="/test"
          image="https://source.unsplash.com/1600x900/?bedroom&compress=true"
          title="test"
        />
      </Layout>
    </>
  );
};
