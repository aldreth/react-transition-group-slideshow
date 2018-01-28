import React from "react";

import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import pic5 from "./pic5.jpg";

import "./Slide.css";

const pics = [
  { src: pic1, title: "Stakkholtsgja canyon, Iceland by Jonatan Pie" },
  { src: pic2, title: "Nicaragua by Niko Soikkeli" },
  { src: pic3, title: "Conifer sapling by Matthew Smith" },
  { src: pic4, title: "Corno Nero, Italy by Luca Zanon" },
  { src: pic5, title: "Lago di Braies, Italy by Luca Bravo" }
];

const Slide = ({ picNum }) => (
  <div className="slide">
    <img
      alt={pics[picNum].title}
      src={pics[picNum].src}
      title={pics[picNum].title}
    />
  </div>
);

export default Slide;
