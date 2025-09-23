import { Link } from "react-router-dom";

export default function NotFound({
  title = "Dog not found",
  backTo = "/dogs",
  backLabel = "Back to list",
}) {
  return (
    <main className="dogdetail">
      <h1 className="dogdetail__title">{title}</h1>
      <Link className="dogdetail__back" to={backTo}>
        {backLabel}
      </Link>
    </main>
  );
}
