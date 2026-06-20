import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Navbar is hidden on this page.</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}

Custom404.showNavbar = false;
