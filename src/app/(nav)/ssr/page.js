export const dynamic = "force-dynamic";

export default function SsrPage() {
  const time = new Date().toLocaleString();

  return (
    <div>
      <h1>SSR Page</h1>
      <p>This page uses dynamic server rendering.</p>
      <p>Server time: {time}</p>
    </div>
  );
}
