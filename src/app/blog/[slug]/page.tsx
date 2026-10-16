import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText, type PortableTextComponents, type SanityDocument } from "next-sanity";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostCard from "../PostCard";
import ShareButtons from "../ShareButtons";
import { excerpt, formatDate, readingTime } from "../lib";
import { ArrowLeft } from "lucide-react";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const MORE_QUERY = `*[
  _type == "post" && defined(slug.current) && slug.current != $slug
]|order(publishedAt desc)[0...3]{ _id, title, slug, publishedAt, image, body }`;

const options = { next: { revalidate: 30 } };

// the page title is the only h1, so a "Heading 1" inside the body is set as a section heading
const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h2>{children}</h2>,
  },
  marks: {
    link: ({ value, children }) => {
      const external = /^https?:\/\//.test(value?.href ?? "");
      return (
        <a href={value?.href} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
          {children}
        </a>
      );
    },
  },
};

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await client.fetch<SanityDocument | null>(POST_QUERY, await params, options);
  if (!post) return {};
  const description = excerpt(post.body, 160);
  const image = post.image ? urlFor(post.image).width(1200).height(630).url() : undefined;
  return {
    title: `${post.title} | Wonder Woman Nigeria`,
    description,
    openGraph: { title: post.title, description, type: "article", images: image ? [image] : undefined },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const [post, more] = await Promise.all([
    client.fetch<SanityDocument | null>(POST_QUERY, { slug }, options),
    client.fetch<SanityDocument[]>(MORE_QUERY, { slug }, options),
  ]);
  if (!post) notFound();

  const postImageUrl = post.image ? urlFor(post.image).width(1600).url() : null;

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />

      <article>
        {/* Title block, the cover photo framed beneath it */}
        <header className="max-w-3xl mx-auto px-6 pt-36 lg:pt-40">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#2f9c3d] dark:text-[#5fd36d] hover:text-[#1f7a2c] dark:hover:text-[#8be597] transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>

          <h1 className="t-display !text-[clamp(2rem,1.3rem+2.4vw,3.25rem)] text-gray-900 dark:text-white">
            {post.title}
          </h1>

          {/* byline and share, either side of one rule */}
          <div className="mt-8 pb-8 flex flex-wrap items-center justify-between gap-5 border-b border-gray-200 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-[#f3faf4] dark:bg-white ring-1 ring-[#3db94c]/20 overflow-hidden">
                <img src="/images/WonderWomanNigeria-mark.webp" alt="" className="w-7 h-7 object-contain" />
              </span>
              <div className="leading-tight">
                <p className="font-semibold text-gray-900 dark:text-white">Wonder Woman Nigeria</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, "long")}</time>
                  <span aria-hidden className="mx-2">·</span>
                  {readingTime(post.body)}
                </p>
              </div>
            </div>
            <ShareButtons title={post.title} />
          </div>
        </header>

        {postImageUrl && (
          <figure className="max-w-5xl mx-auto px-6 mt-10 lg:mt-12">
            <div className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-800 ring-1 ring-black/5 dark:ring-white/10">
              <img src={postImageUrl} alt={post.title} className="w-full max-h-[70vh] object-cover" />
            </div>
          </figure>
        )}

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 pt-12 lg:pt-16 pb-20">
          <div className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:leading-tight
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-h2:text-[1.625rem] prose-h2:tracking-[-0.015em] prose-h2:mt-14 prose-h2:mb-4 [&>:first-child]:mt-0
            prose-h3:text-[1.25rem] prose-h3:mt-10 prose-h3:mb-3
            prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-[1.0625rem]
            prose-p:text-gray-700 dark:prose-p:text-gray-300
            [&>p:first-child]:text-[1.25rem] [&>p:first-child]:leading-[1.7] [&>p:first-child]:text-gray-800 dark:[&>p:first-child]:text-gray-200
            prose-a:text-[#2f9c3d] dark:prose-a:text-[#5fd36d] prose-a:underline prose-a:decoration-[#3db94c]/40 prose-a:underline-offset-4 hover:prose-a:decoration-[#3db94c] prose-a:font-medium
            prose-strong:font-semibold
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-ul:my-6 prose-ol:my-6
            prose-li:text-[1.0625rem] prose-li:leading-relaxed prose-li:my-1.5 prose-li:marker:text-[#3db94c]
            prose-li:text-gray-700 dark:prose-li:text-gray-300
            prose-img:rounded-2xl prose-img:my-10
            prose-blockquote:border-l-4 prose-blockquote:border-[#3db94c]
            prose-blockquote:pl-6 prose-blockquote:not-italic prose-blockquote:font-medium
            prose-blockquote:text-gray-800 dark:prose-blockquote:text-gray-200
            prose-blockquote:bg-[#f3faf4] dark:prose-blockquote:bg-green-950/20
            prose-blockquote:py-4 prose-blockquote:pr-5 prose-blockquote:rounded-r-xl prose-blockquote:my-10
            prose-code:text-[#2f9c3d] dark:prose-code:text-[#5fd36d]
            prose-code:bg-green-50 dark:prose-code:bg-green-950/30
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-code:before:content-none prose-code:after:content-none">
            {Array.isArray(post.body) && <PortableText value={post.body} components={components} />}
          </div>

          {/* Sign-off: share again once they have read it */}
          <div className="mt-16 rounded-2xl bg-[#f3faf4] dark:bg-neutral-900 ring-1 ring-[#3db94c]/15 dark:ring-neutral-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="t-h3 text-gray-900 dark:text-white">Enjoyed this story?</p>
              <p className="mt-1 text-gray-600 dark:text-gray-400">Share it and help more people hear about the work.</p>
            </div>
            <ShareButtons title={post.title} />
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-t border-gray-100 dark:border-neutral-900 bg-gray-50/60 dark:bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="t-h2 text-gray-900 dark:text-white">More stories</h2>
              <Link
                href="/blog"
                className="shrink-0 text-[0.9375rem] font-semibold text-[#2f9c3d] dark:text-[#5fd36d] hover:underline underline-offset-4"
              >
                View all posts
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                <PostCard key={p._id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
