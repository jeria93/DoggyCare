import { useState } from "react";
import "./dogImage.css";
const FALLBACK_SRC = "/placeholder-dog.jpg";

export default function DogImage({ src }) {
  const [broken, setBroken] = useState(false);

  return (
    <img
      className="dogimg"
      loading="lazy"
      src={broken ? FALLBACK_SRC : src}
      onError={() => setBroken(true)}
    />
  );
}
