import "@/styles/globals.css";

export const metadata = {
  title: "Next.js Routing Lab",
  description: "App Router examples with Mongoose backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
