import { useRouter } from "next/router";

export default function DocsPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Docs Page</h1>
      <p>Catch-all route: pages/docs/[...slug].js</p>
      <p>URL parts: {slug ? slug.join(" / ") : "loading..."}</p>
    </div>
  );
}
