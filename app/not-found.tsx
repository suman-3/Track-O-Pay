"use client";
import { Button } from "@/components/ui/button";
import "./not-found.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBlocks = () => {
    const blockSize = windowWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return Array.from({ length: nbOfBlocks }, (_, index) => (
      <div
        onMouseEnter={(e) => colorize(e.currentTarget)}
        key={index}
        style={{ width: blockSize, height: blockSize }}
      ></div>
    ));
  };

  const colorize = (el: HTMLDivElement) => {
    el.style.backgroundColor = "black";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  return (
    <div className="container">
      <div className="body">
        <p className="text-4xl md:text-6xl lg:text-8xl">4 0 4</p>
      </div>

      <h1
        onClick={() => {
          router.replace("/");
        }}
        className="underline z-50 cursor-pointer text-md lg:text-2xl hover:text-white hover:bg-black px-2 py-2"
      >
        Return Home
      </h1>

      <div className="grid2">
        {windowWidth > 0 &&
          Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="column">
              {getBlocks()}
            </div>
          ))}
      </div>
    </div>
  );
}
