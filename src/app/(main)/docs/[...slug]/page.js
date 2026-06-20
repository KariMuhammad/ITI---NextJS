export default async function DocsPage({ params }) {
  const { slug } = await params;

  return (
    <div>
      <h1>Docs Page</h1>
      <p>Catch-all route: app/(main)/docs/[...slug]/page.js</p>
      <p>URL parts: {slug ? slug.join(" / ") : "none"}</p>
    </div>
  );
}
