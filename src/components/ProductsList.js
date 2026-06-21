"use client";

import Link from "next/link";
import { useState, useTransition, useDeferredValue } from "react";

export default function ProductsList({ products, brands }) {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [isPending, startTransition] = useTransition();

  const deferredSearch = useDeferredValue(search);

  let list = products;

  if (brand) {
    list = list.filter((p) => p.brand === brand);
  }

  if (deferredSearch) {
    list = list.filter((p) =>
      p.title.toLowerCase().includes(deferredSearch.toLowerCase())
    );
  }

  if (sortBy === "price-low") {
    list = [...list].sort((a, b) => a.price - b.price);
  }
  if (sortBy === "price-high") {
    list = [...list].sort((a, b) => b.price - a.price);
  }
  if (sortBy === "rating-low") {
    list = [...list].sort((a, b) => a.rating - b.rating);
  }
  if (sortBy === "rating-high") {
    list = [...list].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>
      <h1>Products</h1>
      <p>Data loaded with static fetch from dummyjson.com</p>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => startTransition(() => setSearch(e.target.value))}
          style={{ marginRight: "10px", padding: "5px" }}
        />

        <select
          value={brand}
          onChange={(e) => startTransition(() => setBrand(e.target.value))}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          <option value="">All brands</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => startTransition(() => setSortBy(e.target.value))}
          style={{ padding: "5px" }}
        >
          <option value="">Sort by</option>
          <option value="price-low">Price: low to high</option>
          <option value="price-high">Price: high to low</option>
          <option value="rating-low">Rating: low to high</option>
          <option value="rating-high">Rating: high to low</option>
        </select>
      </div>

      {isPending && <p>Loading...</p>}
      <p>
        Showing {list.length} of {products.length} products
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
        }}
      >
        {list.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
            />
            <h3>{product.title}</h3>
            <p>{product.brand}</p>
            <p>
              ${product.price} — Rating: {product.rating}
            </p>
            <Link href={`/products/${product.id}`}>View details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
