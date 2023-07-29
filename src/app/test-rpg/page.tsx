import Link from "next/link";

export default ({ params: { pageId } }: { params: { pageId: number } }) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/test-rpg/1">Begin</Link>
      <h1>starting page</h1>
    </div>
  );
};
