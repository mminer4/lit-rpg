import Link from "next/link";
import Login from "./login";

export default function Home() {
  return (
    <>
      <Link href="/test-rpg">Testing Page</Link>
      <Login />
    </>
  );
}
