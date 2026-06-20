import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Page</h1>
      <p>Optional catch-all route: pages/blog/[[...slug]].js</p>
      <p>
        {slug ? `URL parts: ${slug.join(" / ")}` : "No extra parts — you are on /blog"}
      </p>
    </div>
  );
}
