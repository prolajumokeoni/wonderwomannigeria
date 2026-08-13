import Link from "next/link";
import { client } from "../../sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar } from "lucide-react";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body
}`;

export const revalidate = 30;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
  const [featured, ...rest] = posts;

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-24">
        {posts.length === 0 ? (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-neutral-800 mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No posts yet</h3>
            <p className="text-gray-500 dark:text-gray-400">Check back soon for new content!</p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <Link
                href={`/blog/${featured.slug.current}`}
                className="group block mb-16 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-[420px] md:h-[500px] bg-gray-900">
                  {featured.image ? (
                    <img
                      src={urlFor(featured.image)?.width(1200).height(600).url() ?? ""}
                      alt={featured.title}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-85 group-hover:scale-[1.02] transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#3db94c]/20 to-gray-800" />
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <span className="inline-block bg-[#3db94c] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                      Featured
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 group-hover:text-[#3db94c] transition-colors duration-300">
                      {featured.title}
                    </h2>
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featured.publishedAt)}
                      </span>
                      <span>·</span>
                      <span>{readingTime(featured.body)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Rest of posts grid */}
            {rest.length > 0 && (
              <>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8 border-b border-gray-100 dark:border-neutral-800 pb-4">
                  More posts
                </h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => {
                    const imageUrl = post.image
                      ? urlFor(post.image)?.width(600).height(400).url()
                      : null;

                    return (
                      <Link
                        key={post._id}
                        href={`/blog/${post.slug.current}`}
                        className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      >
                        {/* Image */}
                        <div className="relative h-52 bg-gray-100 dark:bg-neutral-800 overflow-hidden">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#3db94c]/10 to-gray-100 flex items-center justify-center">
                              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow p-6">
                          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {formatDate(post.publishedAt)}
                            </span>
                            <span>·</span>
                            <span>{readingTime(post.body)}</span>
                          </div>

                          <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-4 group-hover:text-[#3db94c] transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h2>

                          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-neutral-700 flex items-center text-sm font-semibold text-[#3db94c]">
                            Read article
                            <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}
