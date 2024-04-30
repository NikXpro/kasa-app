import { Icon } from "@components/Ui/Icon";
import "./Rate.scss";

export type RateProps = {
  rate: string;
};

export const Rate = (props: RateProps) => {
  const { rate } = props;

  const renderStars = () => {
    const stars = [];
    const rateNumber = parseInt(rate);
    for (let i = 0; i < 5; i++) {
      const starClass = i < rateNumber ? "star-filled" : "star-empty";
      stars.push(<Icon key={i} id="star" className={starClass} />);
    }
    return stars;
  };

  return (
    <>
      <div className="rate">{renderStars()}</div>
    </>
  );
};
