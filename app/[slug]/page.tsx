import { notFound } from "next/navigation";
import { Metadata } from "next";
import PSEOClient from "./PSEOClient";
import { getPSEOPageBySlug, getAllPSEOSlugs } from "../../data/pseo-pages";

export async function generateStaticParams() {
  const slugs = getAllPSEOSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPSEOPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDesc,
    keywords: page.keywords,
    alternates: {
      canonical: `https://www.slapwindows.site/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.metaDesc,
      url: `https://www.slapwindows.site/${page.slug}`,
      siteName: "SlapWindows",
      images: [
        {
          url: "https://slapwindows.site/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDesc,
      images: ["https://slapwindows.site/og-image.png"],
      creator: "@amitkushh",
    },
  };
}

export default async function PSEOPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPSEOPageBySlug(slug);

  if (!page) notFound();
  return <PSEOClient page={page!} />;
}
