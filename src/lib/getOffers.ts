export async function getOffers(country: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/offers/${country}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
