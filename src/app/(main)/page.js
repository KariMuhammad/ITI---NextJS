import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next.js Routing Lab</h1>
      <p>App Router examples with a Mongoose backend:</p>

      <ul>
        <li>
          <Link href="/about">Static route</Link> — /about
        </li>
        <li>
          <Link href="/products">Products list</Link> — server component + MongoDB
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
          <Link href="/api/products">API route</Link> — /api/products
        </li>
        <li>
          <Link href="/ssr">Dynamic SSR</Link> — force-dynamic server render
        </li>
      </ul>
    </div>
  );
}
