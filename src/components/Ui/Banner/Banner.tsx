import "./Banner.scss";

export type BannerProps = {
  title?: string;
  brightness?: number;
  image: string;
};

export const Banner = (props: BannerProps) => {
  return (
    <>
      <div className="banner">
        <img
          className="banner-image"
          src={props.image}
          alt={props.title}
          style={{
            filter: props.brightness
              ? `brightness(${props.brightness}%)`
              : "none",
          }}
        />
        <div className="banner-content">
          {props.title && <h1 className="banner-title">{props.title}</h1>}
        </div>
      </div>
    </>
  );
};
