export async function getProviders(country: string) {
  const res = await fetch(`http://localhost:3000/api/providers/${country}`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
