import { Link } from "react-router-dom";
import "./welcome.css";

export default function Welcome() {
  return (
    <main className="welcome">
      <h1 className="welcome__title">Doggy-Care</h1>
      <p className="welcome__text">Welcome to the Doggy Daycare</p>
      <Link className="welcome__btn" to="/dogs">
        View Dogs
      </Link>
    </main>
  );
}
