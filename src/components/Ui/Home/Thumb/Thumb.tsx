import { Link } from "react-router-dom";
import "./Thumb.scss";

export type ThumbProps = {
  title?: string;
  image?: string;
  linkUrl: string;
};

export const Thumb = (props: ThumbProps) => {
  return (
    <>
      <Link to={props.linkUrl} className="thumb">
        <div className="thumb-imgwrapper">
          <img className="thumb-image" src={props.image} alt={props.title} />
        </div>
        <div className="thumb-content">
          {props.title && <h2 className="thumb-title">{props.title}</h2>}
        </div>
      </Link>
    </>
  );
};
