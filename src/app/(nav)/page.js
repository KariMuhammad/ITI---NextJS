import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next.js Routing Lab</h1>
      <p>Simple examples for each routing type (App Router):</p>

      <ul>
        <li>
          <Link href="/about">Static route</Link> — /about
        </li>
        <li>
          <Link href="/products">SSG list</Link> — /products (static fetch)
        </li>
        <li>
          <Link href="/products/1">Dynamic route</Link> — /products/[id]
        </li>
        <li>
          <Link href="/docs/a/b/c">Catch-all</Link> — /docs/[...slug]
        </li>
        <li>
          <Link href="/blog">Optional catch-all</Link> — /blog/[[...slug]]
        </li>
        <li>
          <Link href="/api/products">API route</Link> — /api/products (Mongoose)
        </li>
        <li>
          <Link href="/ssr">SSR</Link> — dynamic server rendering
        </li>
      </ul>
    </div>
  );
}
