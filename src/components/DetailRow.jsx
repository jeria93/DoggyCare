export default function DetailRow({ label, value }) {
  return (
    <p className="dogdetail__row">
      <strong>{label}:</strong> {value}
    </p>
  );
}
