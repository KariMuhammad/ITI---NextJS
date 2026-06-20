export default async function BlogPage({ params }) {
  const { slug } = await params;

  return (
    <div>
      <h1>Blog Page</h1>
      <p>Optional catch-all route: app/(main)/blog/[[...slug]]/page.js</p>
      <p>
        {slug
          ? `URL parts: ${slug.join(" / ")}`
          : "No extra parts — you are on /blog"}
      </p>
    </div>
  );
}
