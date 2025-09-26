import { useEffect, useState } from "react";
import "./dogs.css";
import { fetchDogs } from "../api/dogs";
import { Link } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import DogImage from "../components/DogImage";
import DogInfo from "../components/DogInfo";
import { textSearchDogs } from "../api/dogFilters";
import DogsFilters from "../components/DogsFilters";

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchDogs()
      .then(setDogs)
      .catch((err) => console.error("UI-level error", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredDogs = textSearchDogs(dogs, query);
  const clearAll = () => setQuery("");

  if (loading) return <LoadingPage title="Dogs" message="Loading" />;

  return (
    <main className="dogs">
      <h1 className="dogs__title">Dogs</h1>

      <DogsFilters query={query} onQueryChange={setQuery} onClear={clearAll} />

      <div className="dogs__grid">
        {filteredDogs.map((dog) => (
          <Link
            key={dog.chipNumber}
            to={`/dogs/${dog.chipNumber}`}
            className="dogs__card"
          >
            <DogImage src={dog.img} />
            <DogInfo name={dog.name} breed={dog.breed} age={dog.age} />
          </Link>
        ))}
      </div>
    </main>
  );
}
