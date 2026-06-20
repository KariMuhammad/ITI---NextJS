import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const showNavbar = Component.showNavbar !== false;

  return (
    <>
      {showNavbar && <Navbar />}
      <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
