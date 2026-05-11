'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES, EXTERNAL_LINKS } from '@/config/routes';
import CardSlider from '@/components/features/CardSlider';
import FAQSection from '@/components/features/FAQSection';
import { Settings, ShieldCheck, Clock, Mail, Twitter, Youtube, GraduationCap, Users, CheckCircle2, Quote, Network as NetworkIcon } from 'lucide-react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');



  useEffect(() => {
    // Check for success hash in URL
    if (window.location.hash === '#contact-success') {
      setIsSubmitted(true);
      const savedEmail = localStorage.getItem('submittedEmail');
      if (savedEmail) setSubmittedEmail(savedEmail);
      // Clean up hash
      window.history.replaceState(null, '', window.location.pathname);
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e: Event) {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
        }
      });
    });

    const observerOptions = { threshold: 0.1, rootMargin: '-50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, observerOptions);
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home-page">

      {/* ── Hero ── */}
      <section className="hero mt-12" id="hero">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
          {/* ── Left: text content ── */}
          <div className="hero-content flex-1 text-center md:text-left pt-16 pb-8 md:py-0 flex flex-col items-center md:items-start">
            <div className="hero-badge animate-fade-up">
              <span className="badge-dot"></span>
              501(c)(3) Nonprofit · Est. 2024
            </div>
            <h1 className="global-hero-title animate-fade-up delay-1">ECH Institute</h1>
            <p className="hero-tagline animate-fade-up">Education, Community, Homesteading!</p>
            <p className="hero-subtitle animate-fade-up delay-2">
              ECH Institute serves the Ethereum ecosystem by coordinating All Core Devs (ACD) calls, facilitating weekly EIP research meetings, and providing world-class protocol education. As a neutral 501(c)(3) nonprofit, we ensure the protocol remains accessible, coordinated, and resilient.
            </p>
            <div className="hero-buttons animate-fade-up delay-3 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="#programs" className="btn btn-primary">Our Programs</Link>
              <Link href={ROUTES.getInvolved} className="btn btn-outline">Get Involved</Link>
            </div>
          </div>

          {/* ── Right: mascot image ── */}
          <div className="hero-image flex-1 animate-fade-up delay-4 hidden md:block">
            <div className="hero-mascot-wrap">
              <div className="hero-mascot"></div>
              <Image
                src="/assets/logo/Cat with Laptop.svg"
                alt="ECH Institute mascot"
                width={1500}
                height={1500}
                priority
                className="hero-mascot-img "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="proplay-section bg-background relative overflow-hidden scroll-mt-24 border-t border-[var(--border-soft)]" id="who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="global-section-tag">
                <span className="bg-black"></span>
                WHO WE ARE
              </div>
              <h2 className="global-section-title mb-6">
                Built on <em>purpose,</em><br />driven by community.
              </h2>
              <p className="global-body mb-12 max-w-xl">
                ECH Institute believes everyone deserves access to education and the opportunity to contribute regardless of race, gender &amp; background. We bridge gaps by empowering individuals with blockchain knowledge, strengthening communities, and supporting the Web3 ecosystem.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex gap-6 group">
                  <div className="proplay-icon-container h-12 w-12 flex-shrink-0">
                    <Users className="h-6 w-6 text-[var(--color-white)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-syne font-bold text-[var(--text-base)] mb-1">People</h3>
                    <p className="global-body text-sm leading-relaxed">Empowering a diverse, global community of core developers, researchers, and contributors through mentorship and inclusivity initiatives.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="proplay-icon-container h-12 w-12 flex-shrink-0">
                    <Settings className="h-6 w-6 text-[var(--color-white)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-syne font-bold text-[var(--text-base)] mb-1">Process</h3>
                    <p className="global-body text-sm leading-relaxed">Streamlining Ethereum&apos;s governance through neutral coordination of All Core Devs calls, EIP reviews, and institutional transparency.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="proplay-icon-container h-12 w-12 flex-shrink-0">
                    <NetworkIcon className="h-6 w-6 text-[var(--color-white)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-syne font-bold text-[var(--text-base)] mb-1">Protocol</h3>
                    <p className="global-body text-sm leading-relaxed">Ensuring the technical resilience and long-term scalability of the Ethereum protocol through expert communication and network upgrade readiness.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-on-scroll delay-1 lg:sticky lg:top-32">
              <div className="absolute -inset-4 bg-muted/20 rounded-[40px] -z-10 rotate-1"></div>
              <div className="flex flex-col shadow-2xl rounded-[32px] overflow-hidden bg-card border border-border">
                <div className="aspect-[4/3] relative w-full overflow-hidden">
                  <Image
                    src="/assets/images/EIP Summit Group Photo.webp"
                    alt="ECH Institute community at EIP Summit"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-10 border-t border-border bg-card relative">
                  <div className="absolute -top-6 left-10 w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Quote className="h-6 w-6 text-[var(--theme-on-accent)]" />
                  </div>
                  <p className="text-lg font-syne font-bold text-foreground leading-snug mb-6 pt-4 italic">
                    &ldquo;We don&apos;t just help communities. We are an active part of the Ethereum fabric.&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-8 bg-accent"></div>
                    <span className="text-[10px] font-bold tracking-[0.25em] text-muted-foreground uppercase">ECH INSTITUTE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          OUR JOURNEY Infographic Timeline
      ══════════════════════════════════════════════════ */}
      <section className="proplay-section bg-background relative border-t border-[var(--border-soft)]" id="evolution">
        <div className="evo-container">

          {/* Header */}
          <div className="evo-header animate-on-scroll">
            <div className="global-section-tag justify-center">OUR JOURNEY</div>
            <h2 className="evo-main-title global-section-title">
              Institutional Evolution &amp; <em>Continuity</em>
            </h2>
            <p className="evo-sub-year">(2024–2026)</p>
          </div>

          {/* ─── Infographic board ─── */}
          <div className="evo-board animate-on-scroll">

            {/* TOP TEXT BLOCKS */}
            <div className="evo-top-row">

              <div className="evo-col">
                <div className="evo-pill evo-pill--gray">BEGINNINGS</div>
                <div className="evo-text-block">
                  <strong className="evo-blk-title">EMERGENCE</strong>
                  <span className="evo-blk-body">Forged from the decentralized Ethereum community.</span>
                </div>
              </div>

              <div className="evo-col">
                <div className="evo-pill evo-pill--gray">LEGAL FORMATION</div>
                <div className="evo-text-block">
                  <strong className="evo-blk-title">COORDINATION</strong>
                  <span className="evo-blk-body">EIP support, Hard Fork community funding.</span>
                </div>
              </div>

              <div className="evo-col">
                <div className="evo-pill evo-pill--gray">GOVERNANCE MATURITY</div>
                <div className="evo-text-block">
                  <strong className="evo-blk-title">BOARD FORMALIZATION</strong>
                  <span className="evo-blk-body">Including veteran ecosystem contributors.</span>
                </div>
              </div>

              <div className="evo-col">
                <div className="evo-pill evo-pill--gold">ACTIVE OPERATIONS</div>
                <div className="evo-text-block">
                  <strong className="evo-blk-title">EXPLORE TECHNICAL ROADMAPS</strong>
                  <span className="evo-blk-body">Assist in charting protocol roadmaps for Ethereum.</span>
                </div>
              </div>

            </div>

            {/* CONNECTING PATH + DIAMONDS */}
            <div className="evo-path-row">
              <div className="evo-path-line">
                <div className="evo-path-fill"></div>
              </div>

              <div className="evo-node-wrap">
                <div className="evo-diamond evo-diamond--gray">
                  <span className="evo-yr">2019</span>
                </div>
              </div>

              <div className="evo-node-wrap">
                <div className="evo-diamond evo-diamond--gray">
                  <span className="evo-yr">2024</span>
                </div>
              </div>

              <div className="evo-node-wrap">
                <div className="evo-diamond evo-diamond--gray">
                  <span className="evo-yr">2025</span>
                </div>
              </div>

              <div className="evo-node-wrap">
                <div className="evo-diamond evo-diamond--gold">
                  <span className="evo-yr">2026</span>
                </div>
              </div>
            </div>

            {/* BOTTOM TEXT BLOCKS */}
            <div className="evo-bottom-row">

              <div className="evo-col">
                <div className="evo-text-block">
                  <strong className="evo-blk-title">COORDINATION</strong>
                  <span className="evo-blk-body">EIP support, Hard Fork communication &amp; community funding.</span>
                </div>
              </div>

              <div className="evo-col">
                <div className="evo-text-block">
                  <strong className="evo-blk-title">INSTITUTIONAL FOUNDATION</strong>
                  <span className="evo-blk-body">A legal body to support education &amp; public goods.</span>
                  <span className="evo-blk-body">501(c)(3) details. Independent of private corporate interests.</span>
                </div>
              </div>

              <div className="evo-col">
                <div className="evo-text-block">
                  <strong className="evo-blk-title">SUPPORT GOVERNANCE</strong>
                  <span className="evo-blk-body">Increased Office Hours to educate and support contributors to participate in governance.</span>
                </div>
                <div className="evo-text-block mt-2.5">
                  <strong className="evo-blk-title">INSTITUTIONAL ENGAGEMENT</strong>
                  <span className="evo-blk-body">Special podcast to explain Ethereum upgrades to Institutional users.</span>
                </div>
              </div>

              <div className="evo-col">
                <div className="evo-text-block">
                  <strong className="evo-blk-title">EVENT SUPPORT</strong>
                  <span className="evo-blk-body">Supporting Road to Devcon bringing the biggest festival of Ethereum to India.</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ── Programs ── */}
      <section className="proplay-section bg-background border-t border-[var(--border-soft)]" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-stretch lg:items-end mb-16">
            <div className="lg:w-1/2 flex flex-col justify-end">
              <div className="global-section-tag justify-start mb-4">WHAT WE DO</div>
              <h2 className="global-section-title mb-0 leading-[1.1] pb-1">Programs built <br /><em>for real impact.</em></h2>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-end">
              <p className="global-body-lg text-left lg:text-right text-[var(--text-soft)] mb-0 lg:pb-1">Each ECH program supports Ethereum governance through clear processes, coordination, and participation focused on long-term, sustainable outcomes rather than short-term fixes.</p>
            </div>
          </div>
          {/* Bento mosaic grid */}
          <div className="pgrid-bento">
            {/* Card 1 — tall (row span 2) */}
            <Link href={ROUTES.education} className="pgrid-card pgrid-card--tall group">
              <Image src="/assets/images/How We Work with EF.webp" alt="Education" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="pgrid-img object-cover" />
              <div className="pgrid-overlay" />
              <div className="pgrid-content">
                <span className="pgrid-badge pgrid-badge--grey">FLAGSHIP PROGRAM</span>
                <h3 className="pgrid-title">Education &amp; Literacy</h3>
                <p className="pgrid-desc">Centered on improving understanding of Ethereum network upgrades and governance processes.</p>
                <span className="pgrid-cta">View Program →</span>
              </div>
            </Link>
            {/* Card 2 */}
            <Link href={ROUTES.eipSupport} className="pgrid-card group">
              <Image src="/assets/images/EIP Summit Workshop.jpg" alt="EIP Support" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="pgrid-img object-cover" />
              <div className="pgrid-overlay" />
              <div className="pgrid-content">
                <span className="pgrid-badge pgrid-badge--grey">GOVERNANCE</span>
                <h3 className="pgrid-title">EIP Support</h3>
                <p className="pgrid-desc">Strengthening the Ethereum Improvement Proposal process through structure and coordinated reviews.</p>
                <span className="pgrid-cta">View Program →</span>
              </div>
            </Link>
            {/* Card 3 */}
            <Link href={ROUTES.podcast} className="pgrid-card group">
              <Image src="/assets/images/Podcast Content.webp" alt="Podcast" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="pgrid-img object-cover" />
              <div className="pgrid-overlay" />
              <div className="pgrid-content">
                <span className="pgrid-badge pgrid-badge--grey">CONTENT</span>
                <h3 className="pgrid-title">Podcast &amp; Content</h3>
                <p className="pgrid-desc">Translating complex Ethereum governance into accessible knowledge through videos and podcasts.</p>
                <span className="pgrid-cta">View Program →</span>
              </div>
            </Link>
            {/* Card 4 */}
            <Link href={ROUTES.communityPartnerships} className="pgrid-card group">
              <Image src="/assets/images/Who We Are.webp" alt="Community Partnerships" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="pgrid-img object-cover" />
              <div className="pgrid-overlay" />
              <div className="pgrid-content">
                <span className="pgrid-badge pgrid-badge--grey">COMMUNITY</span>
                <h3 className="pgrid-title">Community Partnerships</h3>
                <p className="pgrid-desc">Collaborating with ecosystem communities to expand participation in Ethereum governance.</p>
                <span className="pgrid-cta">View Program →</span>
              </div>
            </Link>
            {/* Card 5 */}
            <Link href={ROUTES.wiep} className="pgrid-card group">
              <Image src="/assets/images/Women in Protocol.webp" alt="Women in Protocol" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="pgrid-img object-cover" />
              <div className="pgrid-overlay" />
              <div className="pgrid-content">
                <span className="pgrid-badge pgrid-badge--grey">INCLUSION</span>
                <h3 className="pgrid-title">Women in Protocol</h3>
                <p className="pgrid-desc">Supporting women entering Ethereum governance through mentorship and education.</p>
                <span className="pgrid-cta">View Program →</span>
              </div>
            </Link>
            {/* Card 6 */}
            <Link href={ROUTES.institutionalBridging} className="pgrid-card group">
              <Image src="/assets/images/Enterprise & Institutional View.webp" alt="Institutional Bridging" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="pgrid-img object-cover" />
              <div className="pgrid-overlay" />
              <div className="pgrid-content">
                <span className="pgrid-badge pgrid-badge--grey">INSTITUTIONAL</span>
                <h3 className="pgrid-title">Institutional Bridging</h3>
                <p className="pgrid-desc">Bridging Ethereum governance with enterprise stakeholders through education and dialogue.</p>
                <span className="pgrid-cta">View Program →</span>
              </div>
            </Link>
            {/* Card 7 — wide (col span 2) */}
            <Link href={ROUTES.events} className="pgrid-card pgrid-card--wide group">
              <Image src="/assets/images/Events Workshops.webp" alt="Events" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="pgrid-img object-cover" />
              <div className="pgrid-overlay" />
              <div className="pgrid-content">
                <span className="pgrid-badge pgrid-badge--grey">ECOSYSTEM FESTIVALS</span>
                <h3 className="pgrid-title">Events &amp; Workshops</h3>
                <p className="pgrid-desc">Organizing roundtables and workshops that bring the ecosystem together for discussion around EIPs and emerging standards.</p>
                <span className="pgrid-cta">View Program →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* ── Impact ── */}
      <section className="proplay-section bg-background border-t border-[var(--border-soft)]" id="impact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-20 justify-between items-start md:items-end mb-16">
            <div className="max-w-2xl">
              <div className="global-section-tag justify-start">OUR IMPACT</div>
              <h2 className="global-section-title mb-4">Numbers <br /><em>that matter.</em></h2>
              <p className="global-body-lg text-[var(--text-soft)]">Every year we publish a full impact report. Here&apos;s what we&apos;ve accomplished measured not in activities, but in actual ecosystem impact.</p>
            </div>
            <a href="/reports/First_Annual_Report_ECH_Institute_Inc.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-10 py-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">VIEW FULL REPORT</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Network Upgrades */}
            <div className="bg-[var(--surface-card-theme)] p-8 xl:p-10 rounded-2xl border border-[var(--border-soft)] shadow-sm hover:shadow-lg hover:border-[var(--accent-brand)] transition-all duration-300 group animate-on-scroll">
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-6xl font-syne font-extrabold text-[var(--accent-brand)] leading-none mb-4 group-hover:scale-110 transition-transform duration-300">12+</span>
                <h3 className="font-syne font-bold text-lg text-[var(--text-base)] mb-3">Protocol Coordination</h3>
                <p className="global-body text-sm text-[var(--text-soft)]">Organizing every All Core Devs (ACD) call and coordinating EIP readiness for 12+ network upgrades.</p>
              </div>
            </div>

            {/* Card 2: Educational Podcasts */}
            <div className="bg-[var(--surface-card-theme)] p-8 xl:p-10 rounded-2xl border border-[var(--border-soft)] shadow-sm hover:shadow-lg hover:border-[var(--accent-brand)] transition-all duration-300 group animate-on-scroll delay-1">
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-6xl font-syne font-extrabold text-[var(--accent-brand)] leading-none mb-4 group-hover:scale-110 transition-transform duration-300">200+</span>
                <h3 className="font-syne font-bold text-lg text-[var(--text-base)] mb-3">Educational Podcasts</h3>
                <p className="global-body text-sm text-[var(--text-soft)]">Inviting EIP authors to explain protocol changes in plain language for the ecosystem.</p>
              </div>
            </div>

            {/* Card 3: WIEP Cohorts */}
            <div className="bg-[var(--surface-card-theme)] p-8 xl:p-10 rounded-2xl border border-[var(--border-soft)] shadow-sm hover:shadow-lg hover:border-[var(--accent-brand)] transition-all duration-300 group animate-on-scroll delay-2">
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-6xl font-syne font-extrabold text-[var(--accent-brand)] leading-none mb-4 group-hover:scale-110 transition-transform duration-300">4</span>
                <h3 className="font-syne font-bold text-lg text-[var(--text-base)] mb-3">WIEP Cohorts</h3>
                <p className="global-body text-sm text-[var(--text-soft)]">Empowering technical women through hands-on study groups and mentorship.</p>
              </div>
            </div>

            {/* Card 4: PRs Reviewed */}
            <div className="bg-[var(--surface-card-theme)] p-8 xl:p-10 rounded-2xl border border-[var(--border-soft)] shadow-sm hover:shadow-lg hover:border-[var(--accent-brand)] transition-all duration-300 group animate-on-scroll delay-3">
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-6xl font-syne font-extrabold text-[var(--accent-brand)] leading-none mb-4 group-hover:scale-110 transition-transform duration-300">1100+</span>
                <h3 className="font-syne font-bold text-lg text-[var(--text-base)] mb-3">PRs Reviewed</h3>
                <p className="global-body text-sm text-[var(--text-soft)]">In-depth technical reviews conducted during ECH Office Hours for EIP authors and contributors.</p>
              </div>
            </div>

            {/* Card 5: Community Members */}
            <div className="bg-[var(--surface-card-theme)] p-8 xl:p-10 rounded-2xl border border-[var(--border-soft)] shadow-sm hover:shadow-lg hover:border-[var(--accent-brand)] transition-all duration-300 group animate-on-scroll delay-4">
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-6xl font-syne font-extrabold text-[var(--accent-brand)] leading-none mb-4 group-hover:scale-110 transition-transform duration-300">20,000+</span>
                <h3 className="font-syne font-bold text-lg text-[var(--text-base)] mb-3">Community Members</h3>
                <p className="global-body text-sm text-[var(--text-soft)]">A global network of contributors, developers, and ecosystem stakeholders.</p>
              </div>
            </div>

            {/* Card 6: EIP Editing Hours */}
            <div className="bg-[var(--surface-card-theme)] p-8 xl:p-10 rounded-2xl border border-[var(--border-soft)] shadow-sm hover:shadow-lg hover:border-[var(--accent-brand)] transition-all duration-300 group animate-on-scroll delay-5">
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-6xl font-syne font-extrabold text-[var(--accent-brand)] leading-none mb-4 group-hover:scale-110 transition-transform duration-300">100+</span>
                <h3 className="font-syne font-bold text-lg text-[var(--text-base)] mb-3">EIP Editing Hours</h3>
                <p className="global-body text-sm text-[var(--text-soft)]">Supporting the EIP and ERC lifecycle from draft review to finalization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <div className="border-t border-[var(--border-soft)]">
        <CardSlider />
      </div>

  {/* ── Partners Marquee ── */}
      <section className="proplay-section-dense bg-background overflow-hidden border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-darkGray"></div>
            <span className="text-[10px] font-black tracking-[0.3em] text-lightGray uppercase">OUR NETWORK</span>
            <div className="h-px w-8 bg-darkGray"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-syne font-extrabold text-[var(--text-base)] leading-tight">
            Partnered by &amp; <br className="md:hidden" /> <em>Collaborating with.</em>
          </h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[
              { id: 'ef', src: "/assets/Supported by logo//ethereum-foundation-logo.svg", alt: "Ethereum Foundation", size: "scale-[3.5]", href: "https://ethereum.org" },
              { id: 'gitcoin', src: "/assets/Supported by logo//gitcoin.svg", alt: "Gitcoin", href: "https://gitcoin.co" },
              { id: 'eipsinsight', src: "/assets/Supported by logo//EIPsInsights.gif", alt: "EIPs Insight", size: "scale-[1.5]", href: "https://eipsinsight.com/" },
              { id: 'optimism', src: "/assets/Supported by logo//Optimism-logo.png", alt: "Optimism", href: "https://optimism.io" },
              { id: 'ethpune', src: "/assets/Supported by logo//ETH Pune.png", alt: "ETH Pune", size: "scale-[3]", href: "https://www.ethpune.com/" },
              { id: 'octant', src: "/assets/Supported by logo//octant-logo.svg", alt: "Octant", href: "https://octant.app" },
              // { id: 'ethstaker', src: "/assets/Supported by logo//ethstaker-logo.svg", alt: "EthStaker", href: "https://ethstaker.cc" },
              { id: 'magicians', src: "/assets/Supported by logo//ethereum magicians logo.png", alt: "Ethereum Magicians", size: "scale-[1.5]", href: "https://ethereum-magicians.org" },
              { id: 'ethcluj', src: "/assets/Supported by logo//EthCluj-logo.png", alt: "EthCluj", href: "https://ethcluj.ro" },
              { id: 'eea', src: "/assets/Supported by logo//enterpriseethereumalliance_logo.png", alt: "Enterprise Ethereum Alliance", href: "https://entethalliance.org" },
              { id: 'edcon', src: "/assets/Supported by logo//EDCON-logo.png", alt: "EDCON", href: "https://edcon.io" }
            ].map((partner) => (
              <Link key={partner.id} href={partner.href} target="_blank" rel="noopener noreferrer" className="marquee-item px-16 md:px-24">
                <div className="h-8 md:h-10 flex items-center justify-center">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className={`h-full w-auto object-contain transition-all duration-500 ${partner.size || ''}`}
                  />
                </div>
              </Link>
            ))}
            {/* Duplicated for smooth loop */}
            {[
              { id: 'ef-clone', src: "/assets/Supported by logo//ethereum-foundation-logo.svg", alt: "Ethereum Foundation", size: "scale-[3.5]", href: "https://ethereum.org" },
              { id: 'gitcoin-clone', src: "/assets/Supported by logo//gitcoin.svg", alt: "Gitcoin", href: "https://gitcoin.co" },
              { id: 'eipsinsight-clone', src: "/assets/Supported by logo//EIPsInsights.gif", alt: "EIPs Insight", size: "scale-[1.5]", href: "https://eipsinsight.com/" },
              { id: 'optimism-clone', src: "/assets/Supported by logo//Optimism-logo.png", alt: "Optimism", href: "https://optimism.io" },
              { id: 'ethpune-clone', src: "/assets/Supported by logo//ETH Pune.png", size: "scale-[3]", alt: "ETH Pune", href: "https://www.ethpune.com/" },
              { id: 'octant-clone', src: "/assets/Supported by logo//octant-logo.svg", alt: "Octant", href: "https://octant.app" },
              // { id: 'ethstaker-clone', src: "/assets/Supported by logo//ethstaker-logo.svg", alt: "EthStaker", href: "https://ethstaker.cc" },
              { id: 'magicians-clone', src: "/assets/Supported by logo//ethereum magicians logo.png", alt: "Ethereum Magicians", size: "scale-[1.5]", href: "https://ethereum-magicians.org" },
              { id: 'ethcluj-clone', src: "/assets/Supported by logo//EthCluj-logo.png", alt: "EthCluj", href: "https://ethcluj.ro" },
              { id: 'eea-clone', src: "/assets/Supported by logo//enterpriseethereumalliance_logo.png", alt: "Enterprise Ethereum Alliance", href: "https://entethalliance.org" },
              { id: 'edcon-clone', src: "/assets/Supported by logo//EDCON-logo.png", alt: "EDCON", href: "https://edcon.io" }
            ].map((partner) => (
              <Link key={partner.id} href={partner.href} target="_blank" rel="noopener noreferrer" className="marquee-item px-16 md:px-24">
                <div className="h-8 md:h-10 flex items-center justify-center">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className={`h-full w-auto object-contain transition-all duration-500 ${partner.size || ''}`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get Involved ── */}
      <section className="proplay-section bg-background relative overflow-hidden border-t border-[var(--border-soft)]" id="get-involved-peek">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative h-[400px]">
            <div className="gi-mascot-wrap">
              <img src="/assets/logo/cat5.png" alt="Cat peeking" className="relative z-10 w-[400px] h-auto object-contain" />
            </div>
          </div>
          <div className="lg:col-span-7 animate-on-scroll">
            <div className="global-section-tag">GET INVOLVED</div>
            <h2 className="global-section-title mb-8 text-[var(--text-base)] leading-[1.05] tracking-tight">
              Join us in building <br /><em>a better community.</em>
            </h2>
            <p className="grow-0 global-body-lg mb-12 text-[var(--text-soft)] max-w-xl leading-relaxed">
              Change doesn&apos;t happen alone. Whether you have time, skills, or resources to give there is a meaningful place for you at ECH Institute.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link href={ROUTES.support} className="btn btn-primary px-10 py-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">DONATE NOW</Link>
              <Link href={ROUTES.getInvolved} className="btn-gi-outline px-10 py-5 text-sm uppercase transition-all duration-300">GET INVOLVED &rarr;</Link>
              <a href="/reports/First_Annual_Report_ECH_Institute_Inc.pdf" target="_blank" rel="noopener noreferrer" className="btn-gi-outline px-10 py-5 text-sm uppercase transition-all duration-300">VIEW FULL REPORT</a>
            </div>
          </div>
        </div>
      </section>

    


      <section className="proplay-section bg-background relative overflow-hidden border-t border-[var(--border-soft)]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="animate-on-scroll">
              <div className="global-section-tag !text-accent border-accent/20">CONTACT ECH</div>
              <h2 className="global-section-title mb-8 text-[var(--text-base)] leading-[1.05] tracking-tight">
                Let&apos;s build <br /><em className="text-accent">the future.</em>
              </h2>
              <div className="flex flex-col gap-4 max-w-md">
                <a href={EXTERNAL_LINKS.email} className="group relative p-6 rounded-2xl border border-border bg-[var(--surface-card-theme)] transition-all duration-300 hover:border-accent/40 hover:bg-darkGray overflow-hidden">
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface-card-muted)] border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-base)] transition-transform duration-300 group-hover:scale-110">
                      <Mail size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-[0.2em] text-lightGray uppercase block mb-1">Direct Inquiry</span>
                      <span className="text-base font-syne font-bold text-[var(--text-base)] group-hover:text-accent transition-colors">team@ethcatherders.com</span>
                    </div>
                  </div>
                </a>

                <a href={EXTERNAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="group relative p-6 rounded-2xl border border-border bg-[var(--surface-card-theme)] transition-all duration-300 hover:border-accent/40 hover:bg-darkGray overflow-hidden">
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface-card-muted)] border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-base)] transition-transform duration-300 group-hover:scale-110">
                      <Twitter size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-[0.2em] text-lightGray uppercase block mb-1">X / Twitter</span>
                      <span className="text-base font-syne font-bold text-[var(--text-base)] group-hover:text-accent transition-colors">@ECHinstitute</span>
                    </div>
                  </div>
                </a>

                <a href={EXTERNAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="group relative p-6 rounded-2xl border border-border bg-[var(--surface-card-theme)] transition-all duration-300 hover:border-accent/40 hover:bg-darkGray overflow-hidden">
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface-card-muted)] border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-base)] transition-transform duration-300 group-hover:scale-110">
                      <Youtube size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-[0.2em] text-lightGray uppercase block mb-1">YouTube</span>
                      <span className="text-base font-syne font-bold text-[var(--text-base)] group-hover:text-accent transition-colors">@ECHinstitute</span>
                    </div>
                  </div>
                </a>

                <a href={EXTERNAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="group relative p-6 rounded-2xl border border-border bg-[var(--surface-card-theme)] transition-all duration-300 hover:border-accent/40 hover:bg-darkGray overflow-hidden">
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface-card-muted)] border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-base)] transition-transform duration-300 group-hover:scale-110">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-[0.2em] text-lightGray uppercase block mb-1">Discord Community</span>
                      <span className="text-base font-syne font-bold text-[var(--text-base)] group-hover:text-accent transition-colors">@Discord</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="animate-on-scroll delay-2 relative">
              <div className="relative p-1 lg:p-1 bg-darkGray rounded-[32px] border border-border shadow-2xl overflow-hidden">
                <div className="bg-[var(--surface-card-theme)] p-6 lg:p-10 rounded-[28px] shadow-inner border border-border relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F5A51D]/20 to-transparent"></div>
                  {isSubmitted ? (
                    <div className="py-12 text-center animate-fade-in flex flex-col items-center">
                      <div className="mb-8 p-4 bg-black rounded-2xl border border-border">
                        <img src="/assets/logo/ECH Institute Logo - White.png" alt="ECH Institute" className="h-12 w-auto object-contain brightness-0 invert" />
                      </div>
                      <div className="w-20 h-20 bg-accent text-black rounded-full flex items-center justify-center mb-8 shadow-lg shadow-yellow-500/20">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-syne font-bold text-[var(--text-base)] mb-4 uppercase tracking-tight">Inquiry Received.</h3>
                      <p className="global-body text-lightGray mb-10 max-w-sm mx-auto leading-relaxed">
                        A formal acknowledgement has been dispatched to <span className="text-accent font-bold underline decoration-[#F5A51D]/30">{submittedEmail}</span>. Our team will review your submission and respond within two business days.
                      </p>
                      <button onClick={() => { setIsSubmitted(false); }} className="text-[10px] font-black tracking-[0.4em] text-[var(--text-base)] uppercase border-b-2 border-accent pb-2 hover:text-accent transition-all">
                        SEND ANOTHER MESSAGE
                      </button>
                    </div>
                  ) : (
                    <form
                      action="https://formsubmit.co/team@ethcatherders.com"
                      method="POST"
                      onSubmit={() => {
                        setIsSubmitting(true);
                        const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
                        if (emailInput) localStorage.setItem('submittedEmail', emailInput.value);
                      }}
                      className="space-y-5"
                    >
                      <input type="hidden" name="_subject" value="New ECH Institute Contact Form Submission!" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_from_name" value="ECH Institute" />
                      <input type="hidden" name="_autoresponse" value="Thank you for contacting ECH Institute. We have received your message and will reach out to you within two business days. This is an automated confirmation from our system." />
                      <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}#contact-success` : ''} />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-[0.3em] text-lightGray uppercase ml-1 block">First Name</label>
                          <input type="text" name="First Name" className="contact-pro-input !bg-[var(--surface-card-muted)] !border-[var(--border-soft)] !text-[var(--text-base)] placeholder-[#878787]/30 focus:!border-accent focus:!ring-1 focus:!ring-[#F5A51D]/20 transition-all duration-300 rounded-xl w-full px-6 py-4 text-sm font-medium" placeholder="Jane" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-[0.3em] text-lightGray uppercase ml-1 block">Last Name</label>
                          <input type="text" name="Last Name" className="contact-pro-input !bg-[var(--surface-card-muted)] !border-[var(--border-soft)] !text-[var(--text-base)] placeholder-[#878787]/30 focus:!border-accent focus:!ring-1 focus:!ring-[#F5A51D]/20 transition-all duration-300 rounded-xl w-full px-6 py-4 text-sm font-medium" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-[0.3em] text-lightGray uppercase ml-1 block">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          className="contact-pro-input !bg-[var(--surface-card-muted)] !border-[var(--border-soft)] !text-[var(--text-base)] placeholder-[#878787]/30 focus:!border-accent focus:!ring-1 focus:!ring-[#F5A51D]/20 transition-all duration-300 rounded-xl w-full px-6 py-4 text-sm font-medium"
                          placeholder="jane@example.com"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-[0.3em] text-lightGray uppercase ml-1 block">Telegram (Compulsory)</label>
                          <input type="text" name="Telegram" className="contact-pro-input !bg-[var(--surface-card-muted)] !border-[var(--border-soft)] !text-[var(--text-base)] placeholder-[#878787]/30 focus:!border-accent focus:!ring-1 focus:!ring-[#F5A51D]/20 transition-all duration-300 rounded-xl w-full px-6 py-4 text-sm font-medium" placeholder="@username" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-[0.3em] text-lightGray uppercase ml-1 block">Discord (Optional)</label>
                          <input type="text" name="Discord" className="contact-pro-input !bg-[var(--surface-card-muted)] !border-[var(--border-soft)] !text-[var(--text-base)] placeholder-[#878787]/30 focus:!border-accent focus:!ring-1 focus:!ring-[#F5A51D]/20 transition-all duration-300 rounded-xl w-full px-6 py-4 text-sm font-medium" placeholder="username#0000" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-[0.3em] text-lightGray uppercase ml-1 block">Your Message</label>
                        <textarea
                          name="Message"
                          rows={4}
                          className="contact-pro-input !bg-[var(--surface-card-muted)] !border-[var(--border-soft)] !text-[var(--text-base)] placeholder-[#878787]/30 focus:!border-accent focus:!ring-1 focus:!ring-[#F5A51D]/20 transition-all duration-300 resize-none min-h-[140px] rounded-xl w-full px-6 py-4 text-sm font-medium"
                          placeholder="Tell us more about how we can work together..."
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 text-sm font-black tracking-[0.3em] bg-accent text-white hover:bg-[#1B1B1E] transition-all duration-300 uppercase mt-4 rounded-xl border-0 shadow-lg shadow-yellow-500/10 disabled:opacity-80"
                      >
                        {isSubmitting ? 'Processing...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}

