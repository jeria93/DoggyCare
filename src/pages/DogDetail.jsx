import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDogsById } from "../api/dogs";
import LoadingPage from "../components/LoadingPage";
import NotFound from "../components/NotFound";
import DogImage from "../components/DogImage";
import "./dogDetail.css";
import DetailRow from "../components/DetailRow";
import StatusBadge from "../components/StatusBadge";

export default function DogDetail() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDogsById(id)
      .then(setDog)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingPage title="Dog" message="Loading" />;
  if (!dog) return <NotFound />;

  return (
    <main className="dogdetail">
      <header className="dogdetail__header">
        <h1 className="dogdetail__title">{dog.name}</h1>
        <Link className="dogdetail__back" to="/dogs">
          Back
        </Link>
      </header>

      <div className="dogdetail__media">
        <DogImage src={dog.img} />
      </div>

      <section className="dogdetail__info">
        <DetailRow label="Breed" value={dog.breed} />
        <DetailRow label="Age" value={`${dog.age} yrs`} />
        <DetailRow label="Sex" value={dog.sex} />
        <DetailRow
          label="Status"
          value={<StatusBadge present={dog.present} />}
        />
        <DetailRow label="Chip" value={dog.chipNumber} />
        <DetailRow
          label="Owner"
          value={`${dog.owner?.name} ${dog.owner?.lastName} · ${dog.owner?.phoneNumber}`}
        />
      </section>
    </main>
  );
}
