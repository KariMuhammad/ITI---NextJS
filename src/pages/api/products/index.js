export default async function handler(req, res) {
  const response = await fetch("https://dummyjson.com/products?limit=0");
  const data = await response.json();

  res.status(200).json(data.products);
}
