import React, { useState, useLayoutEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";

const Contact = () => {
  const containerRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      description: "",
    }
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from(".contact-hero > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".contact-form-container", {
        opacity: 0,
        x: 40,
        duration: 1.0,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".contact-info-container", {
        opacity: 0,
        x: -40,
        duration: 1.0,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const onSubmit = (data) => {
    // Retrieve existing registrations
    const existing = JSON.parse(localStorage.getItem("nexivo_registrations") || "[]");
    
    // Create new submission record
    const newRecord = {
      id: Date.now().toString(),
      fullName: data.fullName,
      companyName: data.companyName,
      email: data.email,
      phone: data.phone,
      service: data.service,
      budget: data.budget,
      description: data.description,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      timestamp: Date.now(),
    };

    // Store back into localStorage
    existing.push(newRecord);
    localStorage.setItem("nexivo_registrations", JSON.stringify(existing));

    // Show success view
    setSubmittedName(data.fullName);
    setSubmittedEmail(data.email);
    setSubmitted(true);
    reset();

    setTimeout(() => {
      window.scrollTo({ top: 100, behavior: "smooth" });
    }, 100);
  };

  return (
    <div ref={containerRef} className="pt-20 min-h-screen bg-warm-bg text-left">
      {/* Hero Header */}
      <section className="contact-hero pt-10 md:pt-24 pb-8 md:pb-12 px-5 md:px-10 max-w-container-max mx-auto text-center">
        <div className="mb-5 md:mb-8 inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-botanical-green/5 border border-botanical-green/10 rounded-full">
          <Sparkles className="w-4 h-4 text-botanical-green" />
          <span className="font-headline text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-botanical-green">
            GET IN TOUCH
          </span>
        </div>

        <h1 className="font-headline mb-5 md:mb-8 leading-[1.05] tracking-tight text-ink-black max-w-4xl mx-auto font-extrabold" style={{ fontSize: "clamp(2.6rem, 9.5vw, 4.25rem)" }}>
          Let's Build Something That
          <br />
          <span className="text-botanical-green relative inline-block mt-1 md:mt-2">
            Creates Impact.
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

        <p className="font-body text-sm md:text-base lg:text-lg text-secondary max-w-3xl mx-auto leading-relaxed text-center px-2 md:px-0">
          Tell us about your idea, challenge, or business goal. Our team will understand your requirements and help identify the right solution.
        </p>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="max-w-container-max mx-auto px-5 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels and Brand Note */}
          <div className="contact-info-container lg:col-span-4 space-y-8">
            <div className="bg-surface border border-border-muted p-8 rounded-xl space-y-6">
              <h3 className="font-headline text-xl font-bold text-ink-black">Direct Channels</h3>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-botanical-green/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-botanical-green" />
                </div>
                <div>
                  <span className="block font-headline text-[10px] font-bold text-secondary uppercase tracking-wider">Email Us</span>
                  <a href="mailto:akashwaradeofficial@gmail.com" className="font-body text-sm font-semibold text-ink-black hover:text-botanical-green transition-colors">
                    akashwaradeofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-botanical-green/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-botanical-green" />
                </div>
                <div>
                  <span className="block font-headline text-[10px] font-bold text-secondary uppercase tracking-wider">Call Us</span>
                  <span className="font-body text-sm font-semibold text-ink-black">
                    +91 9174571636
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-botanical-green/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-botanical-green" />
                </div>
                <div>
                  <span className="block font-headline text-[10px] font-bold text-secondary uppercase tracking-wider">Location</span>
                  <span className="font-body text-sm font-semibold text-ink-black leading-relaxed">
                    Indore, Madhya Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Brand Quote */}
            <div className="bg-botanical-green text-white p-8 rounded-xl relative overflow-hidden border border-white/10 shadow-sm">
              <h4 className="font-headline text-lg font-bold mb-4 tracking-wide text-white">Why Nexivo?</h4>
              <p className="font-body text-sm leading-relaxed text-white/90">
                We believe that you shouldn't have to coordinate with multiple disconnected service providers to build your digital footprint. We merge technology, design, and marketing into a single ecosystem.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="contact-form-container lg:col-span-8">
            {submitted ? (
              <div className="bg-surface border border-border-muted p-12 rounded-xl text-center shadow-sm space-y-6">
                <div className="w-16 h-16 bg-botanical-green/10 text-botanical-green rounded-full flex items-center justify-center mx-auto scale-110">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-ink-black">Requirement Submitted!</h3>
                <p className="font-body text-secondary max-w-md mx-auto leading-relaxed">
                  Thank you for sharing your project details, <span className="font-semibold text-ink-black">{submittedName}</span>. Our team has recorded your submission and will follow up via <span className="font-semibold text-ink-black">{submittedEmail}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-botanical-green text-botanical-green px-6 py-2.5 rounded font-bold hover:bg-botanical-green hover:text-surface transition-colors cursor-pointer premium-btn-anim"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-surface border border-border-muted p-8 md:p-12 rounded-xl shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-bold font-headline text-secondary uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 bg-surface border rounded focus:ring-1 focus:ring-botanical-green focus:border-botanical-green outline-none transition-all font-body text-sm text-ink-black ${
                        errors.fullName ? "border-red-500" : "border-border-muted"
                      }`}
                      {...register("fullName", { required: "Full name is required" })}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-[10px] font-semibold tracking-wide font-headline">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Business/Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="block text-xs font-bold font-headline text-secondary uppercase tracking-wider">
                      Business / Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      placeholder="e.g. Acme Corp"
                      className={`w-full px-4 py-3 bg-surface border rounded focus:ring-1 focus:ring-botanical-green focus:border-botanical-green outline-none transition-all font-body text-sm text-ink-black ${
                        errors.companyName ? "border-red-500" : "border-border-muted"
                      }`}
                      {...register("companyName", { required: "Company name is required" })}
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-[10px] font-semibold tracking-wide font-headline">
                        {errors.companyName.message}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold font-headline text-secondary uppercase tracking-wider">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="e.g. john@acme.com"
                      className={`w-full px-4 py-3 bg-surface border rounded focus:ring-1 focus:ring-botanical-green focus:border-botanical-green outline-none transition-all font-body text-sm text-ink-black ${
                        errors.email ? "border-red-500" : "border-border-muted"
                      }`}
                      {...register("email", {
                        required: "Work email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[10px] font-semibold tracking-wide font-headline">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold font-headline text-secondary uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 bg-surface border rounded focus:ring-1 focus:ring-botanical-green focus:border-botanical-green outline-none transition-all font-body text-sm text-ink-black ${
                        errors.phone ? "border-red-500" : "border-border-muted"
                      }`}
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[10px] font-semibold tracking-wide font-headline">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Interested In */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-xs font-bold font-headline text-secondary uppercase tracking-wider">
                    Service You're Interested In *
                  </label>
                  <select
                    id="service"
                    className={`w-full px-4 py-3 bg-surface border rounded focus:ring-1 focus:ring-botanical-green focus:border-botanical-green outline-none transition-all font-body text-sm text-ink-black cursor-pointer ${
                      errors.service ? "border-red-500" : "border-border-muted"
                    }`}
                    {...register("service", { required: "Please select a service" })}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Technology & Software Development">Technology & Software Development</option>
                    <option value="E-Commerce Services">E-Commerce Services</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphic Design & Creative">Graphic Design & Creative</option>
                    <option value="Video Editing & Production">Video Editing & Production</option>
                    <option value="Consulting / Other">Consulting / Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-[10px] font-semibold tracking-wide font-headline">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Estimated Budget */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-xs font-bold font-headline text-secondary uppercase tracking-wider">
                    Estimated Budget *
                  </label>
                  <select
                    id="budget"
                    className={`w-full px-4 py-3 bg-surface border rounded focus:ring-1 focus:ring-botanical-green focus:border-botanical-green outline-none transition-all font-body text-sm text-ink-black cursor-pointer ${
                      errors.budget ? "border-red-500" : "border-border-muted"
                    }`}
                    {...register("budget", { required: "Please select a budget range" })}
                  >
                    <option value="" disabled>Select budget range</option>
                    <option value="Under ₹50,000">Under ₹50,000</option>
                    <option value="₹50,000 - ₹2,00,000">₹50,000 - ₹2,00,000</option>
                    <option value="₹2,00,000 - ₹5,00,000">₹2,00,000 - ₹5,00,000</option>
                    <option value="₹5,00,000+">₹5,00,000+</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                  {errors.budget && (
                    <p className="text-red-500 text-[10px] font-semibold tracking-wide font-headline">
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-xs font-bold font-headline text-secondary uppercase tracking-wider">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="description"
                    rows="5"
                    placeholder="Describe your goals, timeline, or key technical specifications..."
                    className={`w-full px-4 py-3 bg-surface border rounded focus:ring-1 focus:ring-botanical-green focus:border-botanical-green outline-none transition-all font-body text-sm text-ink-black leading-relaxed ${
                      errors.description ? "border-red-500" : "border-border-muted"
                    }`}
                    {...register("description", { required: "Project description is required" })}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-[10px] font-semibold tracking-wide font-headline">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-botanical-green text-surface py-4 font-bold rounded hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer text-base shadow-sm premium-btn-anim"
                >
                  Submit Your Requirement →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
