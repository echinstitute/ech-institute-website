'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/config/routes';
import CardSlider from '@/components/features/CardSlider';
import FAQSection from '@/components/features/FAQSection';
import { Settings, ShieldCheck, Clock, Mail, Twitter, Youtube } from 'lucide-react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/team@ethcatherders.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        // Fallback or error handling
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
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
      <section className="hero pt-10 pb-12 md:pt-16 md:pb-20" id="hero">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 w-full flex flex-col md:flex-row items-center gap-12">
          <div className="hero-content flex-1 text-left">
            <div className="hero-badge animate-fade-up">
              <span className="badge-dot"></span>
              501(c)(3) Nonprofit · Est. 2024
            </div>
            <h1 className="global-hero-title animate-fade-up delay-1">ECH Institute</h1>
            <p className="hero-tagline animate-fade-up">Education, Community, Homesteading!</p>
            <p className="hero-subtitle animate-fade-up delay-2">
              ECH Institute is committed to empowering individuals with knowledge, strengthening communities, and supporting ecosystem projects. Our work focuses on creating meaningful change while serving the broader ecosystem as a public good.
            </p>
            <div className="hero-buttons animate-fade-up delay-3">
              <Link href={ROUTES.education} className="btn btn-primary">Our Programs</Link>
              <Link href={ROUTES.getInvolved} className="btn btn-outline">Get Involved</Link>
            </div>
          </div>
          <div className="hero-image flex-1 hidden md:flex justify-end relative h-[500px] w-full">
            <Image 
              src="/assets/images/Catty.webp" 
              alt="ECH Institute mascot" 
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-10 md:py-16 bg-white" id="who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="global-section-tag">WHO WE ARE</div>
              <h2 className="global-section-title mb-6">
                Built on <em>purpose,</em><br />driven by community.
              </h2>
              <p className="global-body-lg mb-10">
                ECH Institute believes everyone deserves access to education and the opportunity to contribute regardless of race, gender &amp; background. We bridge gaps by empowering individuals with blockchain knowledge, strengthening communities, and supporting the Web3 ecosystem as a public good, with a strong focus on inclusion and diversity.
              </p>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <span className="text-[#facc14] font-syne font-bold text-2xl">01</span>
                  <div>
                    <h3 className="global-card-title">Education First</h3>
                    <p className="global-body">We create accessible pathways to learn blockchain and participate in the Web3 ecosystem empowering individuals at every stage to contribute with confidence.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[#facc14] font-syne font-bold text-2xl">02</span>
                  <div>
                    <h3 className="global-card-title">Community-Centered</h3>
                    <p className="global-body">We build inclusive, supportive communities that enable meaningful participation because learning and contributing in Web3 go hand in hand.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[#facc14] font-syne font-bold text-2xl">03</span>
                  <div>
                    <h3 className="global-card-title">Open Accountability</h3>
                    <p className="global-body">We operate with transparency and integrity openly sharing our work, progress, and impact with the communities we serve and support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pl-4 lg:pl-10">
              <div className="absolute inset-0 -left-2 sm:-left-4 top-8 -bottom-8 bg-[#fffbeb] rounded-3xl -z-10"></div>
              <div className="flex flex-col shadow-2xl rounded-3xl overflow-hidden bg-white">
                <div className="aspect-[4/3] relative w-full">
                  <Image 
                    src="/assets/EIP Summit Group Photo.webp" 
                    alt="ECH Institute community at EIP Summit" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#fefce8] p-8 lg:p-12 border-t border-yellow-100">
                  <p className="text-2xl lg:text-3xl font-lora italic text-gray-800 leading-relaxed mb-8">
                    &ldquo;We don&apos;t help communities. We are part of them.&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-yellow-400"></span>
                    <span className="text-xs font-bold tracking-[0.25em] text-gray-900 uppercase">ECH INSTITUTE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          OUR JOURNEY — Infographic Timeline
      ══════════════════════════════════════════════════ */}
      <section className="evo-section" id="evolution">
        <div className="evo-container">

          {/* Header */}
          <div className="evo-header animate-on-scroll">
            <div className="global-section-tag justify-center">OUR JOURNEY</div>
            <h2 className="evo-main-title">
              Institutional Evolution &amp; <span className="evo-accent">Continuity</span>
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
                <div className="evo-text-block" style={{ marginTop: '10px' }}>
                  <strong className="evo-blk-title">INSTITUTIONAL ENGAGEMENT</strong>
                  <span className="evo-blk-body">Special podcast to explain Ethereum upgrades to Institutional users.</span>
                </div>
              </div>

              <div className="evo-col">
                <div className="evo-text-block">
                  <strong className="evo-blk-title">EVENT SUPPORT</strong>
                  <span className="evo-blk-body">Supporting Road to Devcon — bringing the biggest festival of Ethereum to India.</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── Programs ── */}
      <section className="py-12 md:py-16 bg-white" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-stretch lg:items-end mb-16">
            <div className="lg:w-1/2 flex flex-col justify-end">
              <div className="global-section-tag justify-start mb-4">WHAT WE DO</div>
              <h2 className="global-section-title mb-0 leading-[1.1] pb-1">Programs built <br /><span className="text-[#facc14]">for real impact.</span></h2>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-end">
              <p className="global-body-lg text-left lg:text-right text-gray-600 mb-0 lg:pb-1">Each ECH program supports Ethereum governance through clear processes, coordination, and participation focused on long-term, sustainable outcomes rather than short-term fixes.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href={ROUTES.education} className="program-img-card group lg:row-span-2 relative overflow-hidden">
              <Image src="/assets/How We Work with EF.webp" alt="Education" fill className="bg-img object-cover" />
              <div className="overlay-dark-gradient absolute inset-0"></div>
              <div className="content relative z-10">
                <span className="badge">FLAGSHIP PROGRAM</span>
                <h3>Education &amp; Literacy</h3>
                <p>Centered on improving understanding of Ethereum network upgrades and governance processes through structured explanations, documentation, and coordination.</p>
                <div className="btn-wrap">
                  <span className="program-img-card-btn">View Program &rarr;</span>
                </div>
              </div>
            </Link>

            <Link href={ROUTES.eipSupport} className="program-img-card group">
              <img src="/assets/IMG_355.webp" alt="EIP Support" className="bg-img" />
              <div className="overlay-dark-gradient"></div>
              <div className="content">
                <span className="badge !bg-gray-200 !text-gray-800">GOVERNANCE</span>
                <h3>EIP Support</h3>
                <p>Strengthening the Ethereum Improvement Proposal process through structure and coordinated reviews.</p>
                <div className="btn-wrap">
                  <span className="program-img-card-btn">View Program &rarr;</span>
                </div>
              </div>
            </Link>

            <Link href={ROUTES.podcast} className="program-img-card group">
              <img src="/assets/IMG_3600.webp" alt="Podcast" className="bg-img" />
              <div className="overlay-dark-gradient"></div>
              <div className="content">
                <span className="badge !bg-gray-200 !text-gray-800">CONTENT</span>
                <h3>Podcast &amp; Content</h3>
                <p>Translating complex Ethereum governance into accessible knowledge through videos and podcasts.</p>
                <div className="btn-wrap">
                  <span className="program-img-card-btn">View Program &rarr;</span>
                </div>
              </div>
            </Link>

            <Link href={ROUTES.communityPartnerships} className="program-img-card group">
              <img src="/assets/Who We Serve.webp" alt="Community Partnerships" className="bg-img" />
              <div className="overlay-dark-gradient"></div>
              <div className="content">
                <span className="badge !bg-gray-200 !text-gray-800">COMMUNITY</span>
                <h3>Community Partnerships</h3>
                <p>Collaborating with ecosystem communities to expand participation in Ethereum governance.</p>
                <div className="btn-wrap">
                  <span className="program-img-card-btn">View Program &rarr;</span>
                </div>
              </div>
            </Link>

            <Link href={ROUTES.wiep} className="program-img-card group">
              <img src="/assets/EIP Summit Group Photo.webp" alt="Women in Protocol" className="bg-img" />
              <div className="overlay-dark-gradient"></div>
              <div className="content">
                <span className="badge">INCLUSION</span>
                <h3>Women in Protocol</h3>
                <p>Supporting women entering Ethereum governance through mentorship and education.</p>
                <div className="btn-wrap">
                  <span className="program-img-card-btn">View Program &rarr;</span>
                </div>
              </div>
            </Link>

            <Link href={ROUTES.institutionalBridging} className="program-img-card group">
              <img src="/assets/Enterprise & Institutional View.webp" alt="Institutional Bridging" className="bg-img" />
              <div className="overlay-dark-gradient"></div>
              <div className="content">
                <span className="badge !bg-gray-200 !text-gray-800">INSTITUTIONAL</span>
                <h3>Institutional Bridging</h3>
                <p>Bridging Ethereum governance with enterprise stakeholders through education and dialogue.</p>
                <div className="btn-wrap">
                  <span className="program-img-card-btn">View Program &rarr;</span>
                </div>
              </div>
            </Link>

            <Link href={ROUTES.events} className="program-img-card group md:col-span-2 lg:col-span-2" style={{ minHeight: '320px' }}>
              <img src="/assets/2025 recap.webp" alt="Events" className="bg-img" />
              <div className="overlay-dark-gradient opacity-90"></div>
              <div className="content md:w-3/4 lg:w-3/4">
                <span className="badge">ECOSYSTEM FESTIVALS</span>
                <h3>Events &amp; Workshops</h3>
                <p>Organizing roundtables and workshops that bring the ecosystem together for discussion around EIPs and emerging standards.</p>
                <div className="btn-wrap">
                  <span className="program-img-card-btn">View Program &rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="py-12 md:py-16 bg-white border-y border-gray-100" id="impact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-20 justify-between items-start md:items-end mb-16">
            <div className="max-w-2xl">
              <div className="global-section-tag justify-start">OUR IMPACT</div>
              <h2 className="global-section-title mb-4">Numbers <br /><em>that matter.</em></h2>
              <p className="global-body-lg text-gray-600">Every year we publish a full impact report. Here&apos;s what we&apos;ve accomplished measured not in activities, but in actual ecosystem impact.</p>
            </div>
            <button className="btn btn-primary md:flex-shrink-0">VIEW FULL REPORT</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Network Upgrades */}
            <div className="flex flex-col xl:flex-row bg-white overflow-hidden rounded-2xl border border-[#CED2D9] shadow-sm hover:shadow-lg hover:border-[#facc14] transition-all duration-300 h-full group animate-on-scroll">
              <div className="bg-gray-50 group-hover:bg-[#fefce8] transition-colors duration-300 p-8 xl:p-10 flex flex-col justify-center items-center text-center xl:w-[40%] border-b xl:border-b-0 xl:border-r border-[#CED2D9]">
                <span className="text-5xl md:text-6xl font-syne font-extrabold text-[#facc14] leading-none mb-3">2</span>
                <h3 className="font-syne font-bold text-lg text-gray-900">Network Upgrades</h3>
              </div>
              <div className="p-8 xl:p-10 flex flex-col justify-center xl:w-[60%]">
                <p className="global-body font-medium text-gray-800 mb-4">Over the twelve months, we supported the Dencun upgrade and the Pectra upgrade.</p>
                <p className="global-body text-gray-600">We livestreamed both upgrades with community partners. We invited core EIP proposal Authors to share about the significance of the upgrades to scale Ethereum.</p>
              </div>
            </div>

            {/* Card 2: Podcasts Produced */}
            <div className="flex flex-col xl:flex-row bg-white overflow-hidden rounded-2xl border border-[#CED2D9] shadow-sm hover:shadow-lg hover:border-[#facc14] transition-all duration-300 h-full group animate-on-scroll delay-1">
              <div className="p-8 xl:p-10 flex flex-col justify-center xl:w-[60%] order-2 xl:order-1">
                <p className="global-body font-medium text-gray-800 mb-4">We produced 13 videos on the Dencun upgrade, 18 videos on the Pectra upgrade and featured 23 independent projects on Ecosystem Project Demo.</p>
                <p className="global-body text-gray-600 mb-2">We also coordinated and published:</p>
                <ul className="list-disc list-inside global-body text-gray-600 space-y-1 ml-2">
                  <li>30+ Eth Multicall</li>
                  <li>12+ ePBS Breakout Room</li>
                  <li>25+ EOF Implementers Meetings</li>
                </ul>
              </div>
              <div className="bg-gray-50 group-hover:bg-[#fefce8] transition-colors duration-300 p-8 xl:p-10 flex flex-col justify-center items-center text-center xl:w-[40%] order-1 xl:order-2 border-b xl:border-b-0 xl:border-l border-[#CED2D9]">
                <span className="text-5xl md:text-6xl font-syne font-extrabold text-[#facc14] leading-none mb-3">108+</span>
                <h3 className="font-syne font-bold text-lg text-gray-900">Podcasts Produced</h3>
              </div>
            </div>

            {/* Card 3: Community Members */}
            <div className="flex flex-col xl:flex-row bg-white overflow-hidden rounded-2xl border border-[#CED2D9] shadow-sm hover:shadow-lg hover:border-[#facc14] transition-all duration-300 h-full group animate-on-scroll delay-2">
              <div className="bg-gray-50 group-hover:bg-[#fefce8] transition-colors duration-300 p-8 xl:p-10 flex flex-col justify-center items-center text-center xl:w-[40%] border-b xl:border-b-0 xl:border-r border-[#CED2D9]">
                <span className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold text-[#facc14] leading-none mb-3">8.2K+</span>
                <h3 className="font-syne font-bold text-base sm:text-lg text-gray-900">Community Members</h3>
              </div>
              <div className="p-8 xl:p-10 flex flex-col justify-center xl:w-[60%]">
                <p className="global-body font-medium text-gray-800 leading-relaxed">Partnering over 5 global communities for events, Over 8200 people followed us on X/Twitter and hosting over 2,900 members on Discord, our community is growing!</p>
              </div>
            </div>

            {/* Card 4: ECH Core Efficiency */}
            <div className="flex flex-col xl:flex-row bg-white overflow-hidden rounded-2xl border border-[#CED2D9] shadow-sm hover:shadow-lg hover:border-[#facc14] transition-all duration-300 h-full group animate-on-scroll delay-3">
              <div className="p-8 xl:p-10 flex flex-col justify-center xl:w-[60%] order-2 xl:order-1">
                <p className="global-body font-medium text-gray-800 mb-4">Managing robust operations entirely transparently, providing a critical resource layer for developers and Ethereum ecosystem stakeholders.</p>
                <p className="global-body text-gray-600">Through our flagship initiatives, we streamline technical standard documentation, global mentorship, and core institutional outreach.</p>
              </div>
              <div className="bg-gray-50 group-hover:bg-[#fefce8] transition-colors duration-300 p-8 xl:p-10 flex flex-col justify-center items-center text-center xl:w-[40%] order-1 xl:order-2 border-b xl:border-b-0 xl:border-l border-[#CED2D9]">
                <span className="text-5xl md:text-6xl font-syne font-extrabold text-[#facc14] leading-none mb-3">7+</span>
                <h3 className="font-syne font-bold text-lg text-gray-900">Core Programs</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get Involved ── */}
      <section className="gi-pro-bg border-t border-gray-100 relative overflow-hidden" id="get-involved-peek">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative h-[400px]">
            <div className="gi-mascot-wrap">
              <img src="/assets/images/cat-peek.webp" alt="Cat peeking" className="relative z-10 w-[320px] h-auto object-contain drop-shadow-2xl animate-float" />
            </div>
          </div>
          <div className="lg:col-span-7 animate-on-scroll">
            <div className="global-section-tag">GET INVOLVED</div>
            <h2 className="global-section-title mb-8 text-gray-900 leading-[1.05] tracking-tight">
              Join us in building <br /><span className="text-[#facc14] italic">a better community.</span>
            </h2>
            <p className="grow-0 global-body-lg mb-12 text-gray-700 max-w-xl leading-relaxed">
              Change doesn&apos;t happen alone. Whether you have time, skills, or resources to give there is a meaningful place for you at ECH Institute.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link href={ROUTES.support} className="global-btn global-btn-primary px-10 py-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">DONATE NOW</Link>
              <Link href={ROUTES.getInvolved} className="btn-gi-outline px-10 py-5 text-sm uppercase transition-all duration-300">GET INVOLVED &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners Marquee ── */}
      <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gray-200"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">OUR NETWORK</span>
            <div className="h-px w-8 bg-gray-200"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-syne font-extrabold text-gray-900 leading-tight">
            Supported by &amp; <br className="md:hidden" /> <em>Collaborating with.</em>
          </h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[
              { id: 'ef', src: "/logos/ethereum-foundation-logo.png", alt: "Ethereum Foundation", size: "scale-200" },
              { id: 'gitcoin', src: "/logos/gitcoin.svg", alt: "Gitcoin", size: "scale-110" },
              { id: 'optimism', src: "/logos/Optimism-logo.png", alt: "Optimism", size: "scale-100" },
              { id: 'octant', src: "/logos/octant-logo.svg", alt: "Octant", size: "scale-100" },
              { id: 'ethstaker', src: "/logos/ethstaker-logo.svg", alt: "EthStaker", size: "scale-125" },
              { id: 'magicians', src: "/logos/ethereum magicians logo.png", alt: "Ethereum Magicians", size: "scale-200" },
              { id: 'ethcluj', src: "/logos/EthCluj-logo.svg", alt: "EthCluj", size: "scale-200" },
              { id: 'eea', src: "/logos/enterpriseethereumalliance_logo.jpg", alt: "Enterprise Ethereum Alliance", size: "scale-200" },
              { id: 'edcon', src: "/logos/EDCON-logo.jpeg", alt: "EDCON", size: "scale-250" }
            ].map((partner) => (
              <div key={partner.id} className="marquee-item flex items-center justify-center px-6 md:px-10">
                <div className="h-12 w-32 md:w-40 flex items-center justify-center">
                  <img 
                    src={partner.src} 
                    alt={partner.alt} 
                    className={`max-h-full max-w-full w-auto h-auto object-contain transition-all duration-300 ${partner.size}`}
                  />
                </div>
              </div>
            ))}
            {[
              { id: 'ef-clone', src: "/logos/ethereum-foundation-logo.png", alt: "Ethereum Foundation", size: "scale-200" },
              { id: 'gitcoin-clone', src: "/logos/gitcoin.svg", alt: "Gitcoin", size: "scale-110" },
              { id: 'optimism-clone', src: "/logos/Optimism-logo.png", alt: "Optimism", size: "scale-100" },
              { id: 'octant-clone', src: "/logos/octant-logo.svg", alt: "Octant", size: "scale-100" },
              { id: 'ethstaker-clone', src: "/logos/ethstaker-logo.svg", alt: "EthStaker", size: "scale-125" },
              { id: 'magicians-clone', src: "/logos/ethereum magicians logo.png", alt: "Ethereum Magicians", size: "scale-200" },
              { id: 'ethcluj-clone', src: "/logos/EthCluj-logo.svg", alt: "EthCluj", size: "scale-200" },
              { id: 'eea-clone', src: "/logos/enterpriseethereumalliance_logo.jpg", alt: "Enterprise Ethereum Alliance", size: "scale-200" },
              { id: 'edcon-clone', src: "/logos/EDCON-logo.jpeg", alt: "EDCON", size: "scale-250" }
            ].map((partner) => (
              <div key={partner.id} className="marquee-item flex items-center justify-center px-6 md:px-10">
                <div className="h-12 w-32 md:w-40 flex items-center justify-center">
                  <img 
                    src={partner.src} 
                    alt={partner.alt} 
                    className={`max-h-full max-w-full w-auto h-auto object-contain transition-all duration-300 ${partner.size}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="py-16 md:py-24 contact-pro-bg border-t border-gray-100 relative" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="animate-on-scroll">
              <div className="global-section-tag">CONTACT ECH</div>
              <h2 className="global-section-title mb-8 text-gray-900 leading-[1.05] tracking-tight">
                Let&apos;s build <br /><span className="text-[#facc14] italic">the future.</span>
              </h2>
              <p className="global-body-lg mb-12 text-gray-700 max-w-lg leading-relaxed">
                Whether you&apos;re looking to partner, contribute to an EIP, or need help understanding the latest network upgrade — we&apos;re here for the ecosystem.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <a href="mailto:team@ethcatherders.com" className="contact-pro-card p-6 rounded-3xl flex items-center gap-6 group">
                  <div className="icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-yellow-50 text-yellow-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-1">EMAIL</span>
                    <span className="text-lg font-syne font-bold text-gray-900 group-hover:text-[#facc14] transition-colors line-clamp-1">team@ethcatherders.com</span>
                  </div>
                </a>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <a href="https://x.com/ECHinstitute" target="_blank" rel="noopener noreferrer" className="contact-pro-card p-6 rounded-3xl flex items-center gap-6 group">
                    <div className="icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-yellow-50 text-yellow-500">
                      <Twitter size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-1">TWITTER</span>
                      <span className="text-lg font-syne font-bold text-gray-900 group-hover:text-[#facc14] transition-colors">@ECHinstitute</span>
                    </div>
                  </a>
                  
                  <a href="https://www.youtube.com/@echinstitute" target="_blank" rel="noopener noreferrer" className="contact-pro-card p-6 rounded-3xl flex items-center gap-6 group">
                    <div className="icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-yellow-50 text-yellow-500">
                      <Youtube size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-1">YOUTUBE</span>
                      <span className="text-lg font-syne font-bold text-gray-900 group-hover:text-[#facc14] transition-colors uppercase">ECH Institute</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll delay-2">
              <div className="p-1 lg:p-2 bg-gray-50/50 rounded-[40px] border border-gray-100 shadow-xl">
                <div className="bg-white p-8 lg:p-12 rounded-[32px] shadow-sm border border-gray-100">
                  {isSubmitted ? (
                    <div className="py-12 text-center animate-fade-in">
                      <div className="w-20 h-20 bg-[#facc14] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-yellow-200">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-syne font-bold text-gray-900 mb-4">Message Sent!</h3>
                      <p className="global-body text-gray-600 mb-10 max-w-sm mx-auto">We&apos;ve received your message and our team will get back to you within 2 business days.</p>
                      <button onClick={() => setIsSubmitted(false)} className="text-xs font-bold tracking-[0.3em] text-gray-900 uppercase border-b-2 border-[#facc14] pb-2 hover:text-[#facc14] transition-all">
                        SEND ANOTHER MESSAGE
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <input type="hidden" name="_subject" value="New ECH Institute Contact Form Submission!" />
                      <input type="hidden" name="_captcha" value="false" />
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase ml-1">First Name</label>
                          <input type="text" name="First Name" className="w-full contact-pro-input border-b-2 border-gray-100 py-3 focus:outline-none bg-transparent transition-all font-sans text-lg placeholder-gray-300" placeholder="Jane" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase ml-1">Last Name</label>
                          <input type="text" name="Last Name" className="w-full contact-pro-input border-b-2 border-gray-100 py-3 focus:outline-none bg-transparent transition-all font-sans text-lg placeholder-gray-300" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase ml-1">Email Address</label>
                        <input type="email" name="email" className="w-full contact-pro-input border-b-2 border-gray-100 py-3 focus:outline-none bg-transparent transition-all font-sans text-lg placeholder-gray-300" placeholder="jane@example.com" required />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase ml-1">Inquiry Type</label>
                        <div className="relative">
                          <select name="Inquiry Type" className="w-full contact-pro-input border-b-2 border-gray-100 py-3 focus:outline-none bg-transparent transition-all font-sans text-lg text-gray-400 appearance-none cursor-pointer relative z-10" required defaultValue="">
                            <option value="" disabled>How can we help?</option>
                            <option value="General Inquiry" className="text-gray-900">General Inquiry</option>
                            <option value="EIP Support" className="text-gray-900">EIP Support</option>
                            <option value="Support & Donation" className="text-gray-900">Support & Donation</option>
                            <option value="Volunteering" className="text-gray-900">Volunteering</option>
                            <option value="Partnership" className="text-gray-900">Partnership</option>
                            <option value="Institutional Engagement" className="text-gray-900">Institutional Engagement</option>
                            <option value="Education & Training" className="text-gray-900">Education & Training</option>
                            <option value="Other" className="text-gray-900">Other</option>
                          </select>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase ml-1">Your Message</label>
                        <textarea name="Message" rows={4} className="w-full contact-pro-input border-b-2 border-gray-100 py-3 focus:outline-none bg-transparent transition-all font-sans text-lg placeholder-gray-300 resize-none" placeholder="Tell us more about how we can work together..." required></textarea>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="global-btn global-btn-primary w-full py-6 text-base tracking-widest shadow-2xl hover:shadow-yellow-200/50 disabled:opacity-50 transition-all duration-300 bg-black text-white hover:bg-[#facc14] hover:text-black mt-4">
                        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
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
