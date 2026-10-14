export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  active: boolean;
}

const PRODUCTS_URL =
  "https://sfljugpqhokofdmdepbl.supabase.co/storage/v1/object/public/vitrine/products.json";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(PRODUCTS_URL);

  if (!res.ok) {
    throw new Error(`Erro ao buscar produtos: ${res.status}`);
  }

  return res.json();
}
