import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import type { SanityDocument } from "next-sanity";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostCard from "./PostCard";
import { excerpt, formatDate, readingTime } from "./lib";

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

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
  const [featured, ...rest] = posts;

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />

      {/* Page intro, set like the Projects page */}
      <header className="max-w-3xl mx-auto px-4 pt-36 lg:pt-40 pb-14 text-center">
        <p className="t-eyebrow mb-3">Our Blog</p>
        <h1 className="t-h2 text-gray-900 dark:text-white">
          Stories from <span className="text-[#3db94c]">the field</span>
        </h1>
        <p className="t-lead mt-4 text-gray-600 dark:text-gray-400">
          News, reflections and updates from our work with women and girls across Nigeria.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {posts.length === 0 ? (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-neutral-800 mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="t-h3 text-gray-900 dark:text-white mb-2">No posts yet</h3>
            <p className="text-gray-500 dark:text-gray-400">Check back soon for new content!</p>
          </div>
        ) : (
          <>
            {/* Featured post: the photo beside its title and opening lines */}
            {featured && (
              <Link
                href={`/blog/${featured.slug.current}`}
                className="group grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-center mb-20 p-3 lg:p-4 rounded-3xl bg-[#f3faf4] dark:bg-neutral-900 ring-1 ring-[#3db94c]/15 dark:ring-neutral-800"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-800">
                  {featured.image ? (
                    <img
                      src={urlFor(featured.image).width(1200).height(750).url()}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/60 dark:bg-[#0c1a0f]" />
                  )}
                </div>

                <div className="px-3 pb-5 lg:p-0 lg:pr-8">
                  <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#3db94c] text-white text-xs font-semibold tracking-wide uppercase">
                    Latest
                  </span>
                  <h2 className="t-h2 text-gray-900 dark:text-white mb-4 group-hover:text-[#2f9c3d] dark:group-hover:text-[#5fd36d] transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="t-lead text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {excerpt(featured.body, 200)}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-gray-500 dark:text-gray-400 text-[0.9375rem]">
                    <time dateTime={featured.publishedAt}>{formatDate(featured.publishedAt, "long")}</time>
                    <span aria-hidden>·</span>
                    <span>{readingTime(featured.body)}</span>
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[0.9375rem] font-semibold group-hover:bg-[#2f9c3d] dark:group-hover:bg-[#5fd36d] transition-colors duration-300">
                    Read the story
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            )}

            {rest.length > 0 && (
              <>
                <h2 className="t-h3 text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-neutral-800">
                  More stories
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
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
