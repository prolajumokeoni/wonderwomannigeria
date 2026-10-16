import Link from "next/link";
import type { SanityDocument } from "next-sanity";
import { urlFor } from "../../sanity/lib/image";
import { excerpt, formatDate, readingTime } from "./lib";

// one post in a grid: photo, date, title, the opening lines, and a read link
export default function PostCard({ post }: { post: SanityDocument }) {
  const imageUrl = post.image ? urlFor(post.image).width(640).height(400).url() : null;
  const summary = excerpt(post.body, 130);

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 ring-1 ring-gray-200 dark:ring-neutral-800 hover:ring-[#3db94c]/50 hover:shadow-[0_12px_32px_-12px_rgba(47,156,61,0.25)] hover:-translate-y-1 transition-[box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      <div className="relative aspect-[16/10] bg-gray-100 dark:bg-neutral-800 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full bg-[#f3faf4] dark:bg-[#0c1a0f]" />
        )}
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span>{readingTime(post.body)}</span>
        </div>

        <h3 className="t-h3 text-gray-900 dark:text-white mb-3 line-clamp-3 group-hover:text-[#2f9c3d] dark:group-hover:text-[#5fd36d] transition-colors duration-300">
          {post.title}
        </h3>

        {summary && (
          <p className="text-[0.9375rem] leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3 mb-6">
            {summary}
          </p>
        )}

        <div className="mt-auto flex items-center text-[0.9375rem] font-semibold text-[#2f9c3d] dark:text-[#5fd36d]">
          Read article
          <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
