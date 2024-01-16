"use client";
import { useState } from "react";
import "./Slider.scss";
import Image, { StaticImageData } from "next/image";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineBrightness1,
} from "react-icons/md";

type ImageType = { id: number; image: StaticImageData; title: string };

interface SliderProps {
  images: ImageType[];
}

export function Slider({ images }: Readonly<SliderProps>) {
  const [imgIndex, setImgIndex] = useState(0);

  const showNextImg = () => {
    setImgIndex((index) => {
      if (index === images.length - 1) return 0;

      return index + 1;
    });
  };

  const showPrevImg = () => {
    setImgIndex((index) => {
      if (index === 0) return images.length - 1;

      return index - 1;
    });
  };

  return (
    <div className="Slider">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((img) => (
          <Image
            key={img.id}
            src={img.image}
            alt={img.title}
            className="Slider__img"
            style={{ translate: `${-100 * imgIndex}%` }}
          />
        ))}
      </div>

      <p className="Slider__text">{images[imgIndex].title}</p>

      <button onClick={showNextImg} className="Slider__btn Slider__btn__right">
        <MdArrowForwardIos />
      </button>
      <button onClick={showPrevImg} className="Slider__btn Slider__btn__left">
        <MdArrowBackIos />
      </button>
      <div className="Slider__dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setImgIndex(index)}
            className={`Slider__dots__dot ${
              index === imgIndex ? "Slider__dots_dot--active" : ""
            }`}
          >
            <MdOutlineBrightness1 />
          </button>
        ))}
      </div>
    </div>
  );
}
