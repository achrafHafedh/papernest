export async function getOffers(country: string) {
  const res = await fetch(`http://localhost:3000/api/offers/${country}`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
