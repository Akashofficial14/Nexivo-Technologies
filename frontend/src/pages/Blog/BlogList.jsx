import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";
import { Sparkles, BookOpen, Clock, Calendar, ArrowRight } from "lucide-react";
import { blogs } from "../../data/blogs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogList = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance animation ──────────────────────────────────────
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 40,
        stagger: 0.13,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.1,
      });

      // ── Card entrance animation ──────────────────────────────────────
      containerRef.current.querySelectorAll(".blog-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20 bg-warm-bg min-h-screen text-left">
      {/* Hero Section */}
      <section className="relative pt-10 pb-16 md:py-24 px-mobile-margin max-w-container-max mx-auto text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 hero-content">
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-botanical-green/5 border border-botanical-green/10 rounded-full">
            <Sparkles className="w-4 h-4 text-botanical-green" />
            <span className="font-headline text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-botanical-green">
              INSIGHTS
            </span>
          </div>

          <h1 className="font-headline mb-8 leading-[1.05] tracking-tight text-ink-black max-w-4xl mx-auto font-extrabold" style={{ fontSize: "clamp(2.6rem, 9.5vw, 4.25rem)" }}>
            Insights for Smarter
            <br />
            <span className="text-botanical-green relative inline-block mt-2">
              Operations & Software.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-botanical-green/30"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h1>

          <p className="font-body text-body-2xl text-secondary max-w-3xl mx-auto leading-relaxed text-center">
            Explore practical articles and industry insights that help payors, startups, and enterprises improve operations, understand emerging trends, and make better decisions.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-12 pb-24 px-mobile-margin max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="blog-card bg-surface border border-border-muted rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative border-b border-border-muted">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-botanical-green text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-md uppercase font-headline">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-secondary font-body">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-botanical-green" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-botanical-green" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-headline text-xl font-bold text-ink-black leading-snug group-hover:text-botanical-green transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="font-body text-sm text-secondary leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-8 pt-0">
                <Link to={`/blog/${blog.id}`} className="block">
                  <button className="w-full bg-botanical-green text-surface hover:opacity-95 py-3.5 font-bold rounded-lg text-sm hover:translate-y-[-2px] transition-all cursor-pointer flex items-center justify-center gap-2 premium-btn-anim">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogList;
