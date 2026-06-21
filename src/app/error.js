"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Error</h1>
      <p>Navbar is hidden on this page.</p>
      <p>{error?.message || "Something went wrong."}</p>
      <button onClick={() => reset()} style={{ marginRight: "10px" }}>
        Try again
      </button>
      <Link href="/">Go Home</Link>
    </main>
  );
}
