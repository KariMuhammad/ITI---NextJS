import Navbar from "@/components/Navbar";

export default function NavLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        {children}
      </main>
    </>
  );
}
