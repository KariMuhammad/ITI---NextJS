import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
      <Link href="/" style={{ marginRight: "15px" }}>
        Home
      </Link>
      <Link href="/about" style={{ marginRight: "15px" }}>
        About
      </Link>
      <Link href="/products" style={{ marginRight: "15px" }}>
        Products
      </Link>
      <Link href="/docs/hello/world" style={{ marginRight: "15px" }}>
        Docs
      </Link>
      <Link href="/blog" style={{ marginRight: "15px" }}>
        Blog
      </Link>
      <Link href="/ssr">SSR</Link>
    </nav>
  );
}
