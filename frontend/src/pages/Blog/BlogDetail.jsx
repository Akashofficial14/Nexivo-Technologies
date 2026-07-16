import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Sparkles, Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { blogs } from "../../data/blogs";
import { gsap } from "gsap";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Entrance animation ──────────────────────────────────────────
      gsap.from(".detail-content > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.85,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [id]);

  if (!blog) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] bg-warm-bg flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold font-headline mb-4 text-ink-black">Blog Post Not Found</h2>
        <p className="text-secondary mb-8">The article you are looking for does not exist.</p>
        <button
          onClick={() => navigate("/blogs")}
          className="bg-botanical-green text-surface px-8 py-3.5 font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="pt-20 bg-warm-bg min-h-screen text-left">
      {/* Blog Details Header */}
      <article className="max-w-4xl mx-auto px-mobile-margin pt-16 pb-24 detail-content">
        
        {/* Back navigation */}
        <div className="mb-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-botanical-green font-bold text-sm hover:opacity-85 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
        </div>

        {/* Tag & Meta info */}
        <div className="mb-6 flex flex-wrap gap-4 items-center">
          <span className="bg-botanical-green/10 text-botanical-green text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded uppercase font-headline">
            {blog.category}
          </span>
          <div className="flex items-center gap-4 text-xs text-secondary font-body">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-botanical-green" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-botanical-green" />
              {blog.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-botanical-green" />
              By {blog.author}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-headline text-3xl md:text-5xl lg:text-[52px] mb-8 font-extrabold text-ink-black leading-tight">
          {blog.title}
        </h1>

        {/* Main Banner Image */}
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border-muted mb-12 shadow-sm">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div
          className="prose max-w-none font-body text-secondary text-base md:text-lg leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </div>
  );
};

export default BlogDetail;
