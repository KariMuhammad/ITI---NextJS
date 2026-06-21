import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Navbar is hidden on this page.</p>
      <Link href="/">Go Home</Link>
    </main>
  );
}
