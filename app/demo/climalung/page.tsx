"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const screenshots = [
  {
    src: "/Images/climalung/dashboard.jpeg",
    title: "ClimaLung Dashboard",
    description:
      "The ClimaLung dashboard brings together climate, air-quality, lung cancer, and model insights in one interface.",
  },
  {
    src: "/Images/climalung/AirQ_1.jpeg",
    title: "Air Quality Analysis",
    description:
      "Analysis of air-quality and environmental conditions used in the ClimaLung research pipeline.",
  },
  {
    src: "/Images/climalung/AirQ_2.jpeg",
    title: "Air Quality Analysis Results",
    description:
      "Visualization of air-quality analysis results and environmental patterns.",
  },
  {
    src: "/Images/climalung/AQI_prediction.jpeg",
    title: "AQI Prediction",
    description:
      "Machine learning based prediction of air-quality index values.",
  },
  {
    src: "/Images/climalung/AirQ_prediction_results.jpeg",
    title: "AQI Prediction Results",
    description:
      "Results generated from the air-quality prediction component of ClimaLung.",
  },
  {
    src: "/Images/climalung/lung_cancer_analysis.jpeg",
    title: "Lung Cancer Analysis",
    description:
      "Medical imaging and lung cancer analysis using AI-based analysis techniques.",
  },
  {
    src: "/Images/climalung/Lung_cancer_results.jpeg",
    title: "Lung Cancer Analysis Results",
    description:
      "Visualization of lung cancer model results and analysis outputs.",
  },
  {
    src: "/Images/climalung/chat_bot_climalung.jpeg",
    title: "ClimaLung Chatbot",
    description:
      "An interactive chatbot interface designed to help users explore ClimaLung insights.",
  },
];

export default function ClimaLungDemo() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = (index: number) => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const slides =
      gallery.querySelectorAll<HTMLElement>(".clima-slide");

    const slide = slides[index];

    if (!slide) return;

    slide.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(
      activeIndex + 1,
      screenshots.length - 1
    );

    scrollToSlide(newIndex);
  };

  return (
    <main className="clima-demo-page">

      <div className="clima-demo-glow clima-demo-glow-one" />
      <div className="clima-demo-glow clima-demo-glow-two" />

      <div className="clima-demo-container">

        {/* Top bar */}
        <div className="clima-demo-topbar">

          <Link
            href="/#projects"
            className="clima-back-link"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <span className="clima-demo-label">
            PROJECT DEMO
          </span>

        </div>

        {/* Header */}
        <section className="clima-demo-header">

          <div className="clima-eyebrow">
            AI • CLIMATE • MEDICAL IMAGING
          </div>

          <h1>
            <span>Clima</span>Lung
          </h1>

          <p>
            Leveraging AI to analyze climate change&apos;s
            impact on lung cancer through environmental
            analysis, medical imaging, deep learning,
            and explainable AI.
          </p>

        </section>

        {/* Gallery */}
        <div
          ref={galleryRef}
          className="clima-gallery"
          onScroll={(event) => {
            const element = event.currentTarget;

            const slides =
              element.querySelectorAll<HTMLElement>(
                ".clima-slide"
              );

            if (!slides.length) return;

            let closestIndex = 0;
            let smallestDistance = Infinity;

            slides.forEach((slide, index) => {
              const distance = Math.abs(
                slide.getBoundingClientRect().left -
                  element.getBoundingClientRect().left
              );

              if (distance < smallestDistance) {
                smallestDistance = distance;
                closestIndex = index;
              }
            });

            setActiveIndex(closestIndex);
          }}
        >

          {screenshots.map((screenshot, index) => (
            <article
              className="clima-slide"
              key={screenshot.src}
            >

              {/* Image + controls wrapper */}
              <div className="clima-slide-visual">

                {/* Screenshot frame */}
                <div className="clima-slide-image-wrapper">

                  {/* Browser bar */}
                  <div className="clima-browser-bar">

                    <div className="clima-browser-dots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="clima-browser-url">
                      ClimaLung AI Research Platform
                    </div>

                  </div>

                  {/* Screenshot */}
                  <div className="clima-image-container">

                    <Image
                      src={screenshot.src}
                      alt={screenshot.title}
                      width={1600}
                      height={1000}
                      className="clima-screenshot"
                      priority={index === 0}
                    />

                  </div>

                </div>

                {/* Controls ON the image */}
                <div className="clima-image-controls">

                  {/* Previous */}
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={activeIndex === 0}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {/* Counter */}
                  <div className="clima-image-counter">

                    <span>
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <small>
                      /
                      {String(screenshots.length).padStart(2, "0")}
                    </small>

                  </div>

                  {/* Dots */}
                  <div className="clima-image-dots">

                    {screenshots.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        type="button"
                        onClick={() =>
                          scrollToSlide(dotIndex)
                        }
                        className={
                          dotIndex === activeIndex
                            ? "active"
                            : ""
                        }
                        aria-label={`Go to screenshot ${
                          dotIndex + 1
                        }`}
                      />
                    ))}

                  </div>

                  {/* Next */}
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={
                      activeIndex === screenshots.length - 1
                    }
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>

                </div>

              </div>

              {/* Information below image */}
              <div className="clima-slide-info">

                <span className="clima-slide-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>
                  {screenshot.title}
                </h2>

                <p>
                  {screenshot.description}
                </p>

              </div>

            </article>
          ))}

        </div>

        {/* Horizontal scroll hint */}
        <div className="clima-scroll-hint">
          <ChevronLeft size={14} />
          <span>
            Scroll horizontally to explore
          </span>
          <ChevronRight size={14} />
        </div>

        {/* About section */}
        <section className="clima-project-summary">

          <div>

            <span className="clima-summary-label">
              ABOUT THE PROJECT
            </span>

            <h2>
              AI-powered research for
              <span> climate & lung health.</span>
            </h2>

          </div>

          <p>
            ClimaLung combines environmental data
            analysis, PM2.5 and air-quality forecasting,
            medical image analysis, lung nodule
            segmentation, deep learning classification,
            and explainability techniques into a unified
            research platform.
          </p>

        </section>

      </div>

    </main>
  );
}