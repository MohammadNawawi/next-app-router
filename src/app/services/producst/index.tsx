export const getData = async (url: string) => {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch(url, {
    // cache: "force-cache",
    cache: "no-store",
    next: {
      // revalidate: 30, //Setiap 30 Detik dia akan memvalidasi data ulang untuk cache
      tags: ["products"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
};
