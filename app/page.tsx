import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <main className={`${inter.className}`}>
        <h1>Homepage</h1>
        <div style={{ marginBottom: 1000 }}></div>
      </main>
    </>
  );
}
