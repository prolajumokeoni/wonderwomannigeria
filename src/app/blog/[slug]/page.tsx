import { client } from "../../../sanity/lib/client";
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

function readingTime(body: unknown[]): string {
  if (!Array.isArray(body)) return "1 min read";
  const words = body
    .filter((b: any) => b._type === "block")
    .flatMap((b: any) => b.children ?? [])
    .map((c: any) => c.text ?? "")
    .join(" ")
    .split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1400).height(700).url()
    : null;

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />

      {/* Hero — pt-20 so it starts below the fixed navbar */}
      <div className="relative w-full bg-black pt-20">
        <div className="relative" style={{ height: 480 }}>
          {postImageUrl ? (
            <img
              src={postImageUrl}
              alt={post.title}
              className="w-full h-full object-cover opacity-60"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800" />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />

          {/* Hero text */}
          <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 pb-12">
            <div className="flex items-center gap-4 text-white/60 text-sm mb-5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {readingTime(post.body)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 pt-14 pb-24">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 dark:text-gray-500 hover:text-[#3db94c] transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>

          {/* Prose content */}
          <div className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:leading-tight
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-h1:text-4xl prose-h1:mt-14 prose-h1:mb-6
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-5
            prose-h2:border-b prose-h2:border-gray-100 dark:prose-h2:border-gray-700 prose-h2:pb-3
            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
            prose-p:leading-[1.85] prose-p:mb-6 prose-p:text-[1.0625rem]
            prose-p:text-gray-700 dark:prose-p:text-gray-300
            prose-a:text-[#3db94c] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
            prose-strong:font-semibold
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-ul:my-6 prose-ol:my-6 prose-ul:space-y-1 prose-ol:space-y-1
            prose-li:text-[1.0625rem] prose-li:leading-relaxed
            prose-li:text-gray-700 dark:prose-li:text-gray-300
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
            prose-blockquote:border-l-4 prose-blockquote:border-[#3db94c]
            prose-blockquote:pl-6 prose-blockquote:italic
            prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400
            prose-blockquote:bg-green-50/50 dark:prose-blockquote:bg-green-950/20
            prose-blockquote:py-3 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg prose-blockquote:my-8
            prose-code:text-[#3db94c]
            prose-code:bg-green-50 dark:prose-code:bg-green-950/30
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-black prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:shadow-md">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 dark:border-neutral-800 mt-16 pt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3db94c] text-white font-semibold rounded-lg hover:bg-[#2fa33e] transition-colors duration-200 shadow-sm hover:shadow-md group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              View all posts
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
