import { useEffect, useState } from "react";
import "./Dogs.css";
import { fetchDogs } from "../api/dogs";
import { Link } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import DogImage from "../components/DogImage";
import DogInfo from "../components/DogInfo";

export default function Dogs() {
  const [dogs, setdogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDogs()
      .then(setdogs)
      .catch((err) => console.error("UI-level error", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingPage title="Dogs" message="Loading" />;

  return (
    <main className="dogs">
      <h1 className="dogs__title">Dogs</h1>

      <div className="dogs__grid">
        {dogs.map((dog) => (
          <Link
            key={dog.chipNumber}
            to={`/dogs/${dog.chipNumber}`}
            className="dogs__card"
          >
            {/* Dog image */}
            <DogImage src={dog.img} />

            {/* Dog Info */}
            <DogInfo name={dog.name} breed={dog.breed} age={dog.age} />
          </Link>
        ))}
      </div>
    </main>
  );
}
