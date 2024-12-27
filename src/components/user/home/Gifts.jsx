import React, { useState } from "react";
import { motion } from "framer-motion";

export const Gifts = () => {
  return (
    <section className="text-center grid place-content-center gap-2 bg-white px-8 py-24 text-dark ">
      <FlipLink>Clarte</FlipLink>
      <FlipLink>Efficience</FlipLink>
      <FlipLink>Accessibilite</FlipLink>
      <FlipLink>Centralisation</FlipLink>
    </section>
  );
};

/* The code snippet you provided is setting up animation properties for the FlipLink component using
Framer Motion library in a React application. */
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    /* This code snippet is defining a motion component using the `motion.a` element from the Framer
    Motion library in a React application. Here's a breakdown of what each part of the code is
    doing: */
    <motion.a
      initial="initial"
      whileHover="hovered"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl ${isHovered ? 'text-[#3311DB]' : 'text-dark'}`}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>

       {/* /* This code snippet is mapping over each character in the `children` string and creating a
       `motion.span` element for each character. Here's a breakdown of what each part of the code is
       doing:  */}
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
     {/*  This part of the code snippet is responsible for creating a set of motion spans that will
     animate the text characters in the opposite direction when the mouse hovers over the FlipLink
     component. Here's a breakdown of what it does:  */}
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};