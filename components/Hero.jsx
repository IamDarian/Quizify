"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [counter, setCounter] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const colors = [
    "text-red-500",
    "text-emerald-500",
    "text-sky-500",
    "text-orange-500",
    "text-purple-500",
  ];

  const titles = [
    "Your Path to Wisdom.",
    "Unleash Your Brilliance.",
    "Journey to Knowledge.",
    "Ignite Your Imagination.",
    "Explore Your Expertise.",
  ];

  //Timer function for hero transition
  if (counter < titles.length) {
    useEffect(() => {
      const interval = setInterval(() => {
        setOpacity(0);
        setTimeout(() => {
          setCounter((prevCounter) => prevCounter + 1);
          setOpacity(1);
        }, 500);
      }, 8000);

      return () => clearInterval(interval);
    }, []);
  } else {
    setCounter(0);
  }

  return (
    <section className="flex justify-center text-center mt-24">
      <div className="min-h-min">
        <div className="text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">
              Discover, Play, Quiz: <br />
              <span
                style={{ opacity }}
                className={`transition-opacity ${colors[counter]}`}
              >
                {titles[counter]}
              </span>
            </h1>
            <p className="py-6">
              Create and challange others with your quizzes, or solve already
              existing ones. The choice is yours!
            </p>
            <Link href="/login">
              <button className="btn">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
