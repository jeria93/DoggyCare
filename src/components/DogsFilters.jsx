export default function DogsFilters({ query, onQueryChange, onClear }) {
  return (
    <form className="dogs__filters" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Search name, breed or age"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <button type="button" className="dogs__clear" onClick={onClear}>
        Clear
      </button>
    </form>
  );
}
