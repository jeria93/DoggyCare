export function textSearchDogs(dogs, query = "") {
  const q = query.trim().toLowerCase();
  if (!q) return dogs;

  return dogs.filter((d) => {
    const name = d.name?.toLowerCase() ?? "";
    const breed = d.breed?.toLowerCase() ?? "";
    const age = String(d.age ?? "");
    return name.includes(q) || breed.includes(q) || age.includes(q);
  });
}
