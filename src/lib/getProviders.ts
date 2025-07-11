export async function getProviders(country: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/providers/${country}`,
    {
      next: { revalidate: 10 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
