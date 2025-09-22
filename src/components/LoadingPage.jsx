// src/components/LoadingPage.jsx
import "./loading.css";

export default function LoadingPage({
  title = "Loading",
  message = "Please wait…",
}) {
  return (
    <main className="loading">
      {title && <h1 className="loading__title">{title}</h1>}
      <p className="loading__text">
        <span className="loading__spinner" /> {message}
      </p>
    </main>
  );
}
