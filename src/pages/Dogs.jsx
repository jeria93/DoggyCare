/* Dogs.jsx */
import { useEffect, useState } from "react";
import "./Dogs.css";
import { fetchDogs } from "../api/dogs";
import { Link } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";

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
            {/* Dog image with accessible alt text (extract to its own component for more control) */}
            <img
              className="dogs__img"
              src={dog.img}
              alt={`${dog.name} the ${dog.breed}`}
            />

            {/* Basic info (extract also as Header?) */}
            <h3 className="dogs__name">{dog.name}</h3>
            <p className="dogs__meta">
              {dog.breed} - {dog.age} yrs
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
