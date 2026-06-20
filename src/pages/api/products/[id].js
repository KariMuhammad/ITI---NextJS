export default async function handler(req, res) {
  const { id } = req.query;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  res.status(200).json(product);
}
