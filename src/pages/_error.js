import Link from "next/link";

function ErrorPage({ statusCode }) {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>{statusCode ? `Error ${statusCode}` : "Error"}</h1>
      <p>Navbar is hidden on this page.</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

ErrorPage.showNavbar = false;

export default ErrorPage;
