import fallbackDogs from "../data/dogs.fallback.json";

const BIN_ID = `68cd58f5ae596e708ff3eea6`;
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest?meta=false`;

export async function fetchDogs() {
  try {
    const response = await fetch(JSONBIN_URL);
    if (!response.ok) throw new Error("Network Error");

    return await response.json();
  } catch {
    return fallbackDogs.map((dog) => ({
      ...dog,
      isMock: true,
    }));
  }
}

export async function getDogsById(id) {
  const allDogs = await fetchDogs();
  return allDogs.find((dog) => String(dog.chipNumber) === String(id)) ?? null;
}
