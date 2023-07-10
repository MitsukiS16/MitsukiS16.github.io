import React, { useEffect, useState, useRef } from "react";
import "./BarCount.css";

const BarCount = () => {
  const counts = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/6528/6528597.png",
      count: 496890,
      title: "Code Lines",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/109/109613.png",
      count: 3625,
      title: "Work Hour",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3127/3127336.png",
      count: 512,
      title: "Coffee Cups",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2790/2790961.png",
      count: 363,
      title: "Series Days",
    },
  ];

  const [animatedCounts, setAnimatedCounts] = useState(
    counts.map((item) => ({
      ...item,
      animatedCount: 0,
    }))
  );
  const duration = 3000; // Total duration for the animation in milliseconds
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const rect = container.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsInView(isInView);
      }
    };

    const handleMouseEnter = () => {
      setIsInView(true);
    };

    const handleMouseLeave = () => {
      setIsInView(false);
    };

    window.addEventListener("scroll", handleScroll);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
      setAnimatedCounts(
        counts.map((item) => ({
          ...item,
          animatedCount: 0,
        }))
      );
    } else {
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const elapsed = timestamp - startTime;

        setAnimatedCounts((prevCounts) =>
          prevCounts.map((item) => {
            const increment =
              (item.count / duration) * Math.min(elapsed, duration);
            const animatedCount =
              increment <= item.count ? Math.ceil(increment) : item.count;
            return { ...item, animatedCount };
          })
        );

        if (elapsed < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView]);

  return (
    <div className="main-count-stuff" ref={containerRef}>
      {animatedCounts.map((item, index) => (
        <div className="count-stuff" key={index}>
          <img src={item.img} alt={item.title} />
          <p>
            {item.animatedCount}
            <br/>
            <span>{item.title}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BarCount;
