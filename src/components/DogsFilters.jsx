import "./DogsFilters.css";
export default function DogsFilters({ query, onQueryChange, onClear }) {
  const sanitizeTyping = (value) =>
    value
      .replace(/^\s+/, "") // removes empty spaces at the beginning
      .replace(/\s{2,}/g, " ") // collapse 2+ whitespaces into one single space
      .replace(/[^\p{L}\p{N}\s-]+/gu, ""); // keep ony letters, numbers, spaces and hyphens.

  return (
    <form className="dogs__filters" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Search name, breed or age"
        value={query}
        onChange={(e) => onQueryChange(sanitizeTyping(e.target.value))}
      />
      <button type="button" className="dogs__clear" onClick={onClear}>
        Clear
      </button>
    </form>
  );
}
