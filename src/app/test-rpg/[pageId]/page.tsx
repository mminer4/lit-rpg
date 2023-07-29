import Link from "next/link";
import { notFound } from "next/navigation";
import rpgData from "@/app/test-rpg/test-rpg.json";

export async function generateStaticParams() {
  return rpgData.pages.map((pageData) => ({
    pageId: pageData.page.toString(),
  }));
}

export default ({ params: { pageId } }: { params: { pageId: string } }) => {
  const pageData = rpgData.pages.find(
    (page) => pageId === page.page.toString()
  );

  if (!pageData) {
    notFound();
  }

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{pageData.title}</h1>
      <h2>{pageData.text}</h2>
    </div>
  );
};
