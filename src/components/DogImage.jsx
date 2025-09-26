import { useState } from "react";
import "./dogImage.css";

const FALLBACK_SRC = `${import.meta.env.BASE_URL}placeholder-dog.jpg`;

export default function DogImage({ src, alt = "" }) {
  const [broken, setBroken] = useState(false);

  return (
    <img
      className="dogimg"
      loading="lazy"
      src={broken ? FALLBACK_SRC : src}
      alt={alt}
      onError={() => setBroken(true)}
    />
  );
}
