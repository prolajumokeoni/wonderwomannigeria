import Link from "next/link";
import { client } from "../../sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  excerpt
}`;

export const revalidate = 30;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Centered container with 80% width */}
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[80%] py-16">
          {/* Header Section */}
          <div className="my-16 text-center ">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover insights, stories, and updates from our team
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const imageUrl = post.image
                ? urlFor(post.image)?.width(600).height(400).url()
                : null;

              return (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                >
                  <article className="flex flex-col h-full">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#3db94c]/10 to-[#3db94c]/5">
                          <svg
                            className="h-20 w-20 text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content Container */}
                    <div className="flex flex-col flex-grow p-7">
                      {/* Date Badge */}
                      <div className="mb-3">
                        <time className="inline-block text-xs font-semibold text-[#3db94c] bg-[#3db94c]/10 px-3 py-1 rounded-full">
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#3db94c] transition-colors duration-300 line-clamp-2 leading-tight">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-600 text-base line-clamp-3 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Read More Link */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center text-sm font-semibold text-[#3db94c] group-hover:gap-3 transition-all duration-300">
                          Read article
                          <svg
                            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-500 text-lg">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}