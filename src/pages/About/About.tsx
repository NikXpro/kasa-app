import { Layout } from "@components/Layout";
import { Accordion, Banner } from "@components/Ui";
import "./About.scss";
export const About = () => {
  return (
    <>
      <Layout pageActive="about">
        <Banner
          image="https://source.unsplash.com/1600x900/?nature&compress=true"
          brightness={70}
        />
        <Accordion title="test title">
          <p>dzdqz dqzd </p>
          <p>dzdqz dqzd </p>
          <p>dzdqz dqzd </p>
          <p>dzdqz dqzd </p>
          <p>dzdqz dqzd </p>
        </Accordion>
        <Accordion title="test title">
          <p>dzdqz dqzd </p>
          <p>dzdqz dqzd </p>
          <p>dzdqz dqzd </p>
          <p>dzdqz dqzd </p>
          <p>dzdqz dqzd </p>
        </Accordion>
      </Layout>
    </>
  );
};
