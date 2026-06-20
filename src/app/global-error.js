"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <div style={{ textAlign: "center", paddingTop: "50px" }}>
          <h1>Error</h1>
          <p>{error?.message || "Something went wrong."}</p>
          <p>Navbar is hidden on this page.</p>
          <button onClick={() => reset()} style={{ marginRight: "10px" }}>
            Try again
          </button>
          <Link href="/">Go Home</Link>
        </div>
      </body>
    </html>
  );
}
