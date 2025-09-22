export default function DogInfo({ name, breed, age }) {
  return (
    <div className="doginfo">
      <h3 className="doginfo__name">{name}</h3>
      <p className="doginfo__meta">
        {breed} - {age} yrs
      </p>
    </div>
  );
}
