export async function getOffers(country: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/offers/${country}`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
