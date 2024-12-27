// src/components/core/utils.js

const generateRandomPoints = (count, radius) => {
    const points = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * radius * 2; // Random X position
      const y = (Math.random() - 0.5) * radius * 2; // Random Y position
      const z = (Math.random() - 0.5) * radius * 2; // Random Z position
      points.push({ idx: i, position: [x, y, z], color: "#3311DB" }); // Set color to #3311DB
    }
    return points;
  };
  
  // Generate a large number of random points
  export const points = generateRandomPoints(1000, 10); // 1000 points within a radius of 10