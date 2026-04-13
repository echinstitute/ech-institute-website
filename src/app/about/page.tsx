'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES, EXTERNAL_LINKS } from '@/config/routes';
import { Users, CheckCircle2, Building2, Target, Heart, Sparkles, Video, ChevronLeft, ChevronRight } from 'lucide-react';

const BOARD_MEMBERS = [
  { id: '1', name: 'Pooja Ranjan', position: 'President', image: '/assets/profiles/Pooja Ranjan.png', bio: 'Leads ECH Institute coordination and hosts PEEPanEIP. Focuses on EIP education and community consensus.' },
  { id: '2', name: 'George Hervey', position: 'Vice President', image: '/assets/profiles/George Hervey.png', bio: 'Board member supporting ECH Institute governance and ecosystem coordination.' },
  { id: '3', name: 'Hudson Jameson', position: 'Treasurer', image: '/assets/profiles/Hudson Jameson.jpg', bio: 'Veteran Ethereum contributor. Supports protocol governance and institutional transparency.' },
  { id: '4', name: 'Meenakshi Singh', position: 'Secretary', image: '/assets/profiles/Meenakshi Singh.jpg', bio: 'Board member contributing to ECH Institute strategy and community initiatives.' },
];

const PEOPLE_CARDS = [
  { icon: Sparkles, title: 'Core Contributors', desc: 'Manage major initiatives and the EIP process.' },
  { icon: Users, title: 'Community Coordinators', desc: 'Organize meetings and ensure documentation, such as ACD notes, is archived in the ethereum/pm repository.' },
  { icon: Target, title: 'Technical Writers', desc: 'Create documentation and translate complex technical protocol information into accessible blogs and resources.' },
  { icon: Video, title: 'Multimedia Producers', desc: 'Responsible for recording, editing, and livestreaming educational content and animated shorts.' },
  { icon: Heart, title: 'Outreach Specialists', desc: 'Engage with the community and manage partnerships for events like Devcon and EthDenver.' },
];

export default function AboutPage() {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [peopleCarouselIndex, setPeopleCarouselIndex] = useState(0);
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e: Event) {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-24">
      {/* ── Hero — "proplay" inner-page style ──────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-tag">
            <span className="page-hero-dot" />
            501(c)(3) Nonprofit · Est. 2024
          </div>
          <h1 className="page-hero-title">
            About <em>ECH</em><br />Institute
          </h1>
          <p className="page-hero-desc">
            ECH Institute Inc. is a 501(c)(3) non-profit organization that transitioned to a
            formalized institutional steward on July 11, 2024 — supporting the Ethereum ecosystem
            through decentralized project management, coordination, and technical education as a
            neutral public good.
          </p>
          <div className="page-hero-actions">
            <Link href="/support#donate" className="btn btn-primary">Support Our Mission</Link>
            <a href="#who-we-are" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-4 px-4 md:py-8 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="shrink-0 w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] lg:w-[30%] flex justify-center items-center mx-auto lg:mx-0">
              <Image
                src="/assets/ech_full_logo.png"
                alt="ECH Institute Logo"
                width={300}
                height={300}
                className="w-full h-auto object-contain max-w-[180px] max-h-[180px] sm:max-w-[220px] sm:max-h-[220px] lg:max-w-[300px] lg:max-h-[300px]"
              />
            </div>
            <div className="flex-1">
              <span className="global-section-tag">Our Foundation</span>
              <h2 className="global-section-title">Who <em>We Are</em></h2>
              <div className="global-body-lg space-y-4">
                <p>
                  The evolution of decentralized protocol governance has necessitated structured, neutral entities capable of bridging core technical research and community-wide implementation. Since our beginnings in January 2024 have helped coordinate EIPs for network upgrades, pre- and post-deployment communication for successful hard forks, community consensus gathering, community funding, and related coordination tasks.
                </p>
                <p>
                  ECH Institute is uniquely positioned at the intersection of People, Process, and Protocol. It operates to support Ethereum&apos;s governance participation and protocol-coordination infrastructure. As a neutral public good, it ensures the protocol remains accessible and decentralized as it scales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Core Operational Mandate */}
      <section id="what-we-do" className="py-4 px-4 md:py-8 md:px-8 bg-[#f5a51d]">
        <div className="max-w-7xl mx-auto">
          <span className="global-section-tag">Operational Mandate</span>
          <h2 className="global-section-title">Core <em>Operations</em>: What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              { title: 'Educational Content Production', desc: 'Producing technical content to expand community knowledge: the PEEPanEIP video series to simplify EIPs, animated shorts for complex concepts, and the Learn2earn platform to incentivize protocol learning.' },
              { title: 'Technical Onboarding (WiEP)', desc: 'Facilitating the Women in Ethereum Protocol (WiEP) study groups to onboard and train underrepresented developers for core protocol contribution.' },
              { title: 'EIP Coordination', desc: 'Managing the lifecycle of Ethereum Improvement Proposals and shepherding them from initial drafts to finalization.' },
              { title: 'Network Upgrade Communication', desc: 'Facilitating the essential pre- and post-deployment communication for successful hard forks such as Pectra and Fusaka.' },
              { title: 'Community Consensus Gathering', desc: 'Building consensus across a decentralized community on critical protocol decisions through meetings and forums.' },
              { title: 'Information Dissemination', desc: 'Sharing technical updates on governance and protocol changes, including hosting and documenting the All Core Devs (ACD) meetings.' },
              { title: 'Community Funding & Public Goods', desc: 'Managing and coordinating funding initiatives and promoting open-source tooling through the Ecosystem Project Demo (EPD) series.' },
              { title: 'Decentralized Project Management', desc: 'Providing the coordination layer for diverse Ethereum ecosystem initiatives—the "operating system" for organizational tasks.' },
            ].map((item) => (
              <div key={item.title} className="global-card flex items-start gap-3">
                <CheckCircle2 className="global-icon-yellow w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="global-card-title">{item.title}</h3>
                  <p className="global-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section id="what-we-dont-do" className="py-4 px-4 md:py-8 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="global-card p-5 sm:p-8 lg:p-12">
            <span className="global-section-tag">Operational Boundaries</span>
            <h2 className="global-section-title">What We <em>Don&apos;t Do</em></h2>
            <div className="global-body-lg space-y-4">
              <p>
                <strong>No Protocol Authority:</strong> We do not make protocol decisions or control Ethereum development; authority remains with the broader community of developers and researchers.
              </p>
              <p>
                <strong>Neutral Positioning:</strong> We do not act as a central authority or endorse specific commercial projects, tokens, or entities.
              </p>
              <p>
                <strong>Non-Ownership:</strong> We facilitate coordination but do not own or control any part of the Ethereum protocol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution & Timeline */}
      <section id="evolution" className="py-4 px-4 md:py-8 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="global-card p-5 sm:p-8 lg:p-12">
            <span className="global-section-tag">Institutional History</span>
            <h2 className="global-section-title">Institutional <em>Evolution &amp; Continuity</em> (2024–2026)</h2>
            <div className="relative mt-8">
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 to-amber-500" />
              <div className="flex flex-col gap-8 md:gap-12">
                {[
                  { year: 'Today (2026)', badge: 'Active & Operational', badgeCls: 'bg-blue-100 text-blue-800', desc: 'The Institute serves as the primary coordination and education layer for the network, managing the roadmap for the Glamsterdam and Hegotá upgrades.', milestone: 'Mission: Combining technical coordination with a heavy emphasis on community education and onboarding so the network\'s evolution remains transparent and inclusive.', icon: Target },
                  { year: '2025', badge: 'Institutional Maturity', badgeCls: 'bg-[#f5a51d] text-amber-800', desc: 'Establishment of a formalized board and governance structure, including the addition of veteran contributors like Hudson Jameson to the Board of Directors.', milestone: 'Key Focus: Scaling protocol governance and enhancing transparency in decision-making for Ethereum\'s Layer 1.', icon: Building2 },
                  { year: '2024', badge: '501(c)(3) Registration', badgeCls: 'bg-green-100 text-green-800', desc: 'The official legal birth of ECH Institute as a registered 501(c)(3) charitable organization on July 11, 2024. This established a neutral legal foundation independent of private corporate interests.', milestone: 'The organization shifted all operations to the structured, institutional framework of the ECH Institute.', icon: CheckCircle2 },
                ].map((item) => (
                  <div key={item.year} className="global-card relative flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex w-12 h-12 md:w-16 md:h-16 rounded-full items-center justify-center shrink-0 border-4 border-amber-200 shadow-md z-10 bg-[#f5a51d]">
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" style={{ color: '#ffffff' }} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 md:pt-2">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="global-section-title">{item.year}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${item.badgeCls}`}>{item.badge}</span>
                      </div>
                      <p className="global-body mb-4">{item.desc}</p>
                      <div className="bg-[#f5a51d] p-4 global-rounded border-l-4 global-border-yellow">
                        <p className="global-body text-sm">{item.milestone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-black">
              <h3 className="global-section-title mb-4">2026 Technical Roadmap</h3>
              <p className="global-body mb-6">A defining characteristic of 2026 is the shift toward a biannual upgrade schedule—moving Ethereum toward predictable engineering delivery. ECH Institute provides the coordination framework for the year&apos;s primary milestones:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="global-card p-6">
                  <h4 className="global-card-title mb-2">Glamsterdam (H1 2026)</h4>
                  <p className="global-body text-sm">Focus on scaling and user experience. Includes Block-level Access Lists (EIP-7928), transitioning transaction execution to a parallel model for greater efficiency.</p>
                </div>
                <div className="global-card p-6">
                  <h4 className="global-card-title mb-2">Hegotá (H2 2026)</h4>
                  <p className="global-body text-sm">Centers on hardening the L1 and managing state growth—long-term sustainability and censorship resistance, with systems like Forward-inclusion Lists (FOCIL) for transaction censorship defense.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People */}
      <section id="people" className="py-4 px-4 md:py-8 md:px-8 bg-[#f5a51d]">
        <div className="max-w-7xl mx-auto">
          <span className="global-section-tag">Our Community</span>
          <h2 className="global-section-title">People Behind <em>ECH Institute</em></h2>
          <div className="global-body-lg space-y-4 mb-8">
            <p>ECH Institute is powered by a diverse group of dedicated individuals who contribute their time, expertise, and passion to support the Ethereum ecosystem. Our team includes:</p>
          </div>
          {/* Mobile: one card carousel with nav */}
          <div className="md:hidden">
            <div className="global-card p-6 sm:p-8 text-center flex flex-col items-center min-h-[200px]">
              {(() => {
                const item = PEOPLE_CARDS[peopleCarouselIndex];
                const Icon = item.icon;
                return (
                  <>
                    <Icon className="global-icon-yellow w-8 h-8 mb-3" />
                    <h3 className="global-card-title mb-2">{item.title}</h3>
                    <p className="global-body">{item.desc}</p>
                  </>
                );
              })()}
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                type="button"
                onClick={() => setPeopleCarouselIndex((i) => (i === 0 ? PEOPLE_CARDS.length - 1 : i - 1))}
                className="p-2 rounded-full border-2 border-black hover:border-amber-400 hover:bg-[#f5a51d] transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
              <div className="flex gap-2">
                {PEOPLE_CARDS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPeopleCarouselIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === peopleCarouselIndex ? 'bg-[#f5a51d] scale-125' : 'bg-gray-300'
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setPeopleCarouselIndex((i) => (i === PEOPLE_CARDS.length - 1 ? 0 : i + 1))}
                className="p-2 rounded-full border-2 border-black hover:border-amber-400 hover:bg-[#f5a51d] transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
          {/* Desktop: grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {PEOPLE_CARDS.map((item) => (
              <div key={item.title} className="global-card p-8 text-center flex flex-col items-center">
                <item.icon className="global-icon-yellow w-8 h-8 mb-3" />
                <h3 className="global-card-title mb-2">{item.title}</h3>
                <p className="global-body">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ECH Institute Board — Members and Officers */}
          <div className="mt-12">
            <h3 className="global-section-title mb-6">ECH Institute Board</h3>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-black mb-4">Members of ECH Institute Board</h4>
              <p className="global-body text-black mb-4">Click a member to see their background.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {BOARD_MEMBERS.map((member) => {
                  const isSelected = selectedMemberId === member.id;
                  return (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => setSelectedMemberId(isSelected ? null : member.id)}
                      className={`w-full rounded-[12px] border-2 bg-white transition-all duration-200 text-left p-4 [border-color:var(--card-border)] hover:[border-color:var(--card-border-hover)] hover:shadow-[var(--shadow-card)] ${isSelected
                          ? '[border-color:var(--card-border-hover)] bg-[#f5a51d]/50 shadow-[var(--shadow-hover)]'
                          : ''
                        }`}
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={56}
                            height={56}
                            className="w-14 h-14 rounded-full object-cover shrink-0 border-2 [border-color:var(--card-border)]"
                          />
                        ) : (
                          <span className="w-14 h-14 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 font-bold text-base shrink-0">
                            {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                          </span>
                        )}
                        <span className="min-w-0">
                          <span className="block font-semibold text-black truncate">{member.name}</span>
                          <span className="block text-sm text-[#f5a51d] truncate">{member.position}</span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
              {selectedMemberId && (() => {
                const member = BOARD_MEMBERS.find((m) => m.id === selectedMemberId);
                if (!member) return null;
                const initials = member.name.split(' ').map((n) => n[0]).join('').slice(0, 2);
                return (
                  <div
                    className="mt-6 p-0 overflow-hidden rounded-[12px] border-2 bg-white shadow-[var(--shadow-card)] [border-color:var(--card-border)]"
                    aria-live="polite"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-48 md:w-56 shrink-0 flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 p-8">
                        {member.image ? (
                          <Image src={member.image} alt={member.name} width={160} height={160} className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40" />
                        ) : (
                          <span className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 font-bold text-3xl md:text-4xl">
                            {initials}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                        <h4 className="global-section-title mb-1">{member.name}</h4>
                        <p className="text-[#f5a51d] font-semibold mb-4">{member.position}</p>
                        <p className="global-body text-black">{member.bio}</p>
                        <button
                          type="button"
                          onClick={() => setSelectedMemberId(null)}
                          className="mt-4 text-sm font-medium text-[#f5a51d] hover:text-[#f5a51d]"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Multimedia and Educational Series */}
          <div className="mt-12">
            <h3 className="global-section-title mb-4">Multimedia and Educational Series</h3>
            <p className="global-body-lg mb-6">The Institute&apos;s educational mission is delivered through specialized series:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href={ROUTES.peepaneip} className="global-card p-6 block no-underline text-inherit hover:border-amber-400 transition-colors">
                <h4 className="global-card-title mb-2">PEEPanEIP</h4>
                <p className="global-body text-sm">Deep-dive interviews with EIP authors to explain technical changes intended for network upgrades.</p>
              </Link>
              <Link href={ROUTES.fusakaFiles} className="global-card p-6 block no-underline text-inherit hover:border-amber-400 transition-colors">
                <h4 className="global-card-title mb-2">The Fusaka Files</h4>
                <p className="global-body text-sm">A limited series documenting the technical transition toward the Fusaka upgrade and its scaling implications.</p>
              </Link>
              <Link href={ROUTES.epd} className="global-card p-6 block no-underline text-inherit hover:border-amber-400 transition-colors">
                <h4 className="global-card-title mb-2">EPD</h4>
                <p className="global-body text-sm">Ecosystem Project Demo showcasing public goods, infrastructure tools, and community initiatives.</p>
              </Link>
              <Link href={ROUTES.wiep} className="global-card p-6 block no-underline text-inherit hover:border-amber-400 transition-colors">
                <h4 className="global-card-title mb-2">Women in Ethereum Protocol (WiEP)</h4>
                <p className="global-body text-sm">Study groups and community support for women interested in contributing to Ethereum&apos;s core protocol. Peer support, mentorship, and structured learning.</p>
              </Link>
            </div>
          </div>

          <div className="mt-12 p-8 global-card global-border-yellow text-center bg-gradient-to-br from-white to-amber-50">
            <p className="global-body-lg mb-4"><strong>Participation and Ecosystem Contribution</strong></p>
            <p className="global-body-lg mb-6">ECH Institute has established itself as the social and organizational &quot;operating system&quot; for Ethereum. By combining technical coordination with a strong emphasis on community education and onboarding, the Institute ensures the network&apos;s evolution remains transparent and inclusive. You can contribute through documentation, content creation, community outreach, and incentivized bounties.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={EXTERNAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="btn btn-primary-white">Join our Discord</Link>
              <Link href={EXTERNAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">Follow on X</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
