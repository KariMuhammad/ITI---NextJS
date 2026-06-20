export default function SsrPage({ time }) {
  return (
    <div>
      <h1>SSR Page</h1>
      <p>This page uses getServerSideProps.</p>
      <p>Server time: {time}</p>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toLocaleString(),
    },
  };
}
