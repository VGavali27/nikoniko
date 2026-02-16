"use client";

import "./home-carousel.css";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const iceCreamImages = [
  "https://nikoniko.in/assets/img/Berry-&-Boujee.png",
  "https://nikoniko.in/assets/img/No-sleep-club1.png",
  "https://nikoniko.in/assets/img/Momday-Blues.png",
  "https://nikoniko.in/assets/img/Biscuits-state-of-mind.png",
  "https://nikoniko.in/assets/img/Cookie-&-Co1.png",
  "https://nikoniko.in/assets/img/Blush-protocol.png",
];

const HomeScreenCarousel = ({ valArr, width="62%" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      mode: "snap",
      slides: {
        origin: 0,
        perView: 1,
        spacing: 10,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      loop: true,
      // breakpoints: {
      //   // Responsive breakpoints
      //   "(min-width: 600px)": {
      //     slides: { perView: 2, spacing: 10 },
      //   },
      //   "(min-width: 768px)": {
      //     slides: { perView: 3, spacing: 10 },
      //   },
      //   "(min-width: 1024px)": {
      //     slides: { perView: 4, spacing: 30 },
      //   },
      // },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="p-10">
      <div ref={sliderRef} className="keen-slider" style={{ height: "100%" }}>
        {valArr.map((val, idx) => (
          <div key={idx} className="keen-slider__slide number-slide1">
            <img src={val} alt="" className={`w-[${width}]`}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreenCarousel;
