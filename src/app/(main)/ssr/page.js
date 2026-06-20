export const dynamic = "force-dynamic";

export default function SsrPage() {
  return (
    <div>
      <h1>SSR Page</h1>
      <p>This page is force-dynamic — rendered on every request.</p>
      <p>Server time: {new Date().toLocaleString()}</p>
    </div>
  );
}
