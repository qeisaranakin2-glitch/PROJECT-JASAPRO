import React, { useEffect, useRef, useState } from "react";
import { supabase } from "../../lib/supabase";
import { FaInstagram } from "react-icons/fa";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("instagram_posts")
        .select("*")
        .eq("is_visible", true)
        .order("posted_at", { ascending: false });

      if (error) {
        console.error("Failed to fetch Instagram posts:", error.message);
      } else {
        setPosts(data || []);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Latest update";

    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <section className="relative w-full py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 backdrop-blur">
              <FaInstagram className="text-teal-600" />
              Project Highlights
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Latest Work Updates
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              A curated look at recent field activities, project documentation,
              and selected work updates from the Jasapro team.
            </p>
          </div>

          <a
            href="https://www.instagram.com/jasaprototalsurvei/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 bg-white/75 px-5 py-3 text-sm font-medium text-slate-800 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-600"
          >
            Visit Instagram
            <FiArrowUpRight className="text-base" />
          </a>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-20 bg-gradient-to-r from-[#eef4f8] to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-20 bg-gradient-to-l from-[#eef4f8] to-transparent lg:block" />

          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-md backdrop-blur transition duration-300 hover:border-teal-500 hover:text-teal-600 lg:flex"
            aria-label="Scroll left"
          >
            <FiArrowLeft className="text-lg" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-md backdrop-blur transition duration-300 hover:border-teal-500 hover:text-teal-600 lg:flex"
            aria-label="Scroll right"
          >
            <FiArrowRight className="text-lg" />
          </button>

          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-3 lg:px-14"
          >
            {loading &&
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="min-w-[320px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[28px] border border-white/60 bg-white/60 p-4 shadow-sm backdrop-blur"
                >
                  <div className="aspect-[4/3] animate-pulse rounded-[20px] bg-slate-200" />
                  <div className="mt-5 h-4 w-24 animate-pulse rounded bg-slate-200" />
                  <div className="mt-4 h-6 w-5/6 animate-pulse rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-2/3 animate-pulse rounded bg-slate-200" />
                </div>
              ))}

            {!loading &&
              posts.map((post) => {
                const imageSrc =
                  post.media_type === "VIDEO"
                    ? post.thumbnail_url || post.media_url
                    : post.media_url;

                return (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noreferrer"
                    className="group min-w-[320px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[28px] border border-white/60 bg-white/70 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-slate-100">
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={post.caption || "Instagram post"}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-200 text-sm text-slate-500">
                          No image available
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                      <div className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/88 text-teal-600 shadow-sm backdrop-blur">
                        <FaInstagram className="text-sm" />
                      </div>
                    </div>

                    <div className="px-1 pb-1 pt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.20em] text-teal-600">
                        {formatDate(post.posted_at)}
                      </p>

                      <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-8 text-slate-900">
                        {post.caption || "Recent project documentation"}
                      </h3>

                      <div className="mt-5 flex items-center justify-between border-t border-slate-200/80 pt-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <FaInstagram className="text-[13px]" />
                          <span>{post.username || "jasapro"}</span>
                        </div>

                        <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition duration-300 group-hover:text-teal-600">
                          View Post
                          <FiArrowUpRight className="text-base" />
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}

            {!loading && posts.length === 0 && (
              <div className="flex min-h-[220px] w-full items-center justify-center rounded-[28px] border border-dashed border-slate-300 bg-white/50 px-6 text-center text-slate-500">
                No updates available yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;