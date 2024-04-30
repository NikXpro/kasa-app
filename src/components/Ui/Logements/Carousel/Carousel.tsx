import { Icon } from "@components/Ui/Icon";
import { useState } from "react";
import "./Carousel.scss";

export type CarouselProps = {
  images: string[];
};

export const Carousel = (props: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-images"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {props.images.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} />
          ))}
        </div>
        <div className="carousel-controler">
          <button className="prev-button" onClick={goToPreviousImage}>
            <Icon id="arrow_big" style={{ transform: "rotate(180deg)" }} />
          </button>
          <button className="next-button" onClick={goToNextImage}>
            <Icon id="arrow_big" />
          </button>
        </div>
      </div>
    </>
  );
};
