'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, X, CheckCircle2, Calendar, Building2, Target, Heart, Sparkles } from 'lucide-react';
import MembersSlider from '@/components/features/MembersSlider';
import './about.css';

export default function AboutPage() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e: Event) {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <main className="pt-16 lg:pt-24 about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="heroContainer">
          <div className="heroContent">
            <div className="heroText">
              <h1 className="heroTitle">
                About ECH Institute
              </h1>
              <p className="heroDescription">
                The ECH Institute are a group of individuals working together to support the Ethereum community through tasks that are best described as decentralized project management, team coordination, and information dissemination projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section with Image */}
      <section id="who-we-are" className="section">
        <div className="sectionContainer">
          <div className="sectionWithImage">
            <div className="sectionImage">
              <Image
                src="/assets/ech_full_logo.png"
                alt="ECH Institute Logo"
                width={300}
                height={300}
                className="image"
              />
            </div>
            <div className="sectionContentWrapper">
              <div className="sectionHeader">
                {/* <div className="iconContainer">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div> */}
                <h2 className="sectionTitle">Who We Are</h2>
              </div>
              <div className="sectionContent">
                <p>
                  Since coming on the scene in January 2019, we help coordinate EIPs for network upgrades, pre and post communication needed for successful deployment of network upgrades, community consensus gathering, community funding, and many other tasks.
                </p>
                <p>
                  ECH Institute is uniquely positioned at the intersection of People, Process and Protocol. It operates to support Ethereum&apos;s governance participation, and protocol‑coordination infrastructure. As a neutral public good, it ensures the protocol remains accessible and decentralized as it scales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="section sectionAlt">
        <div className="sectionContainer">
          <div className="sectionHeader">
            {/* <div className="iconContainer">
              <Target className="w-6 h-6 text-yellow-600" />
            </div> */}
            <h2 className="sectionTitle">What We Do</h2>
          </div>
          <div className="grid">
            <div className="gridItem">
              <CheckCircle2 className="gridItemIcon" />
              <div className="gridItemContent">
                <h3>EIP Coordination</h3>
                <p>Coordinate Ethereum Improvement Proposals (EIPs) for network upgrades and protocol changes.</p>
              </div>
            </div>
            <div className="gridItem">
              <CheckCircle2 className="gridItemIcon" />
              <div className="gridItemContent">
                <h3>Network Upgrade Communication</h3>
                <p>Facilitate pre and post-communication needed for successful deployment of network upgrades.</p>
              </div>
            </div>
            <div className="gridItem">
              <CheckCircle2 className="gridItemIcon" />
              <div className="gridItemContent">
                <h3>Community Consensus Gathering</h3>
                <p>Help build consensus within the Ethereum community on important protocol decisions.</p>
              </div>
            </div>
            <div className="gridItem">
              <CheckCircle2 className="gridItemIcon" />
              <div className="gridItemContent">
                <h3>Community Funding</h3>
                <p>Coordinate and manage community funding initiatives for public goods and protocol development.</p>
              </div>
            </div>
            <div className="gridItem">
              <CheckCircle2 className="gridItemIcon" />
              <div className="gridItemContent">
                <h3>Information Dissemination</h3>
                <p>Share critical information about Ethereum protocol changes, upgrades, and governance processes.</p>
              </div>
            </div>
            <div className="gridItem">
              <CheckCircle2 className="gridItemIcon" />
              <div className="gridItemContent">
                <h3>Decentralized Project Management</h3>
                <p>Provide decentralized project management and team coordination for Ethereum ecosystem initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section id="what-we-dont-do" className="section">
        <div className="sectionContainer">
          <div className="card">
            <div className="sectionHeader">
              {/* <div className="iconContainer">
                <X className="w-6 h-6 text-yellow-600" />
              </div> */}
              <h2 className="sectionTitle">What We Don&apos;t Do</h2>
            </div>
            <div className="sectionContent">
              <p>
                ECH Institute does not make protocol decisions, control Ethereum development, or act as a central authority. We are a neutral coordination body that supports the decentralized decision-making processes of the Ethereum community.
              </p>
              <p>
                We do not endorse specific projects, tokens, or commercial entities. Our focus is solely on supporting Ethereum&apos;s protocol governance and coordination as a public good.
              </p>
              <p>
                We do not control or own any part of the Ethereum protocol. We facilitate coordination and communication, but all protocol decisions remain in the hands of the broader Ethereum community, including core developers, researchers, and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Institutional Evolution & Continuity Section */}
      <section id="evolution" className="section">
        <div className="sectionContainer">
          <div className="card">
            <div className="sectionHeader">
              {/* <div className="iconContainer">
                <Building2 className="w-6 h-6 text-yellow-600" />
              </div> */}
              <h2 className="sectionTitle">Institutional Evolution & Continuity</h2>
            </div>
            
            {/* Timeline */}
            <div className="timeline">
              {/* Timeline line */}
              <div className="timelineLine"></div>
              
              <div className="timelineItems">
                {/* Today (2026) */}
                <div className="timelineItem">
                  <div className="timelineIcon">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="timelineContent">
                    <div className="timelineHeader">
                      <h3 className="timelineTitle">Today (2026)</h3>
                      <span className="badge badgeBlue">Active & Operational</span>
                    </div>
                    <p className="timelineDescription">
                      The ECH Institute serves as the primary decentralized project management and coordination layer for the Ethereum network. It is currently responsible for managing the technical roadmap for upcoming network upgrades, facilitating the All Core Devs (ACD) meetings, and expanding the PEEPanEIP educational platform.
                    </p>
                    <div className="timelineMilestone">
                      <p>
                        <strong>Mission:</strong> Ensuring Ethereum remains a transparent, decentralized, and accessible global public infrastructure.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2025 - Full Institutional Maturity */}
                <div className="timelineItem">
                  <div className="timelineIcon">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="timelineContent">
                    <div className="timelineHeader">
                      <h3 className="timelineTitle">2025</h3>
                      <span className="badge badgeYellow">Full Institutional Maturity</span>
                    </div>
                    <p className="timelineDescription">
                      Following its legal registration, the ECH Institute established a formalized board and governance structure. This allowed the organization to manage larger ecosystem grants and professionalize the support provided to Ethereum Improvement Proposal (EIP) authors and core developers.
                    </p>
                    <div className="timelineMilestone">
                      <p>
                        <strong>Key Focus:</strong> Scaling protocol governance and enhancing transparency in the decision-making processes for Ethereum&apos;s Layer 1.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2024 - 501(c)(3) Registration */}
                <div className="timelineItem">
                  <div className="timelineIcon">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="timelineContent">
                    <div className="timelineHeader">
                      <h3 className="timelineTitle">2024</h3>
                      <span className="badge badgeGreen">501(c)(3) Nonprofit Registration</span>
                    </div>
                    <p className="timelineDescription">
                      This year marked the official legal birth of the ECH Institute as a registered 501(c)(3) tax-exempt charitable organization.
                    </p>
                    <div className="timelineMilestone">
                      <p>
                        <strong>Significance:</strong> Moving to a registered nonprofit status was essential to establish the Institute as a neutral public good. This legal foundation ensures that the organization operates for the benefit of the entire community, independent of private corporate interests.
                      </p>
                      <p style={{ marginTop: '12px' }}>
                        <strong>Transition:</strong> The organization shifted all operations from the previous informal &quot;Cat Herders&quot; model to the structured, institutional framework of the ECH Institute.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Members Section - MembersSlider */}
      <section id="members" className="section membersSection">
        <div className="sectionContainer">
          <div className="membersSliderWrapper">
            <MembersSlider />
          </div>
        </div>
      </section>


      
      {/* People Behind ECH Institute Section */}
      <section id="people" className="section sectionAlt">
        <div className="sectionContainer">
          <div className="sectionHeader">
            {/* <div className="iconContainer">
              <Heart className="w-6 h-6 text-yellow-600" />
            </div> */}
            <h2 className="sectionTitle">People Behind ECH Institute</h2>
          </div>
          <div className="sectionContent">
            <p>
              ECH Institute is powered by a diverse group of dedicated individuals who contribute their time, expertise, and passion to support the Ethereum ecosystem. Our team includes:
            </p>
            <div className="grid">
              <div className="roleCard">
                <Sparkles className="w-8 h-8 mb-3" />
                <h3 className="font-semibold text-xl mb-2">Core Contributors</h3>
                <p>Long-term contributors who coordinate major initiatives, manage EIP processes, and facilitate community consensus.</p>
              </div>
              <div className="roleCard">
                <Users className="w-8 h-8 mb-3" />
                <h3 className="font-semibold text-xl mb-2">Community Coordinators</h3>
                <p>Individuals who help organize meetings, document discussions, and ensure information flows effectively throughout the community.</p>
              </div>
              <div className="roleCard">
                <Target className="w-8 h-8 mb-3" />
                <h3 className="font-semibold text-xl mb-2">Technical Writers</h3>
                <p>Team members who create documentation, write blog posts, and translate complex technical information into accessible content.</p>
              </div>
              <div className="roleCard">
                <Heart className="w-8 h-8 mb-3" />
                <h3 className="font-semibold text-xl mb-2">Outreach Specialists</h3>
                <p>Contributors who engage with the broader Ethereum community, organize events, and facilitate community participation.</p>
              </div>
            </div>
            <div className="ctaBox">
              <p>
                <strong>Want to help the ECH Institute?</strong>
              </p>
              <p>
                There&apos;s plenty of opportunities to weigh in the ECH Institute, help with documenting meeting notes, writing blogs, make community outreach, participate in process improvements, and even earn bounty.
              </p>
              <div className="ctaButtons">
                <Link href="https://discord.com/invite/Nz6rtfJ8Cu" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#3c3c3c] text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#2a2a2a]">
                    Join our Discord
                  </Button>
                </Link>
                <Link href="https://www.ethcatherders.com/join" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#3c3c3c] text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#2a2a2a]">
                    Join ECH
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
