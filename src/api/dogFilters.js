export function textSearchDogs(allDogs, searchText = "") {
  const normalizedQuery = String(searchText)
    .trim() // removes empty spaces(beginning/end)
    .replace(/\s{2,}/g, " ") // takes all middle empty spaces to just ONE
    .toLowerCase(); // allows user to search with small and big letters
  if (!normalizedQuery) return allDogs; // If query is empty after normalization, return the full, unfiltered list

  return allDogs.filter((dog) => {
    const dogName = dog.name?.toLowerCase() ?? "";
    const dogBreed = dog.breed?.toLowerCase() ?? "";
    const ageText = String(dog.age ?? "");

    return (
      dogName.includes(normalizedQuery) ||
      dogBreed.includes(normalizedQuery) ||
      ageText.includes(normalizedQuery)
    );
  });
}
