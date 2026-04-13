'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Building2, Globe, GitBranch, Zap, Users } from 'lucide-react';
import { ROUTES } from '@/config/routes';

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQ_TOPICS = [
  {
    id: 'general',
    label: 'General & ECH Institute',
    icon: Building2,
    color: '#f59e0b',
    bg: '#fffbeb',
    border: '#fde68a',
    questions: [
      {
        q: 'What is the ECH Institute?',
        a: 'ECH Institute (formerly Ethereum Cat Herders) is a nonprofit organization incorporated in 2024 that serves as neutral coordination and education infrastructure for Ethereum governance. The original Ethereum Cat Herders group was a loose volunteer collective that helped coordinate All Core Devs (ACD) calls and EIP process improvements since 2019. ECH Institute formalizes that work as a registered 501(c)(3) nonprofit — enabling it to receive grants and donations, publish transparent financial reports, and operate with long-term institutional credibility. Our mandate covers governance coordination, EIP process support, educational content, and inclusion programs for the Ethereum protocol ecosystem.',
      },
      {
        q: 'How can I contribute to the ECH Institute?',
        a: 'There are several ways to contribute. Join our Discord server (dsc.gg/ech) to connect with the community. You can attend All Core Devs (ACD) calls — these are public, open to anyone. If you are interested in a structured pathway, the Women in Ethereum Protocol (WiEP) program offers classrooms and mentorship for women entering protocol work. You can also contribute to meeting documentation on the ethereum/pm GitHub repository, participate in EIPIP office hours, or help review EIP proposals on Ethereum Magicians. Every contribution — from reading and sharing content to writing EIP summaries — helps strengthen the governance commons.',
      },
      {
        q: 'Is the ECH Institute part of the Ethereum Foundation?',
        a: 'No. ECH Institute is an independent, nonprofit organization. We are not a department, subsidiary, or affiliate of the Ethereum Foundation (EF). Our independence is intentional — it allows us to provide neutral coordination infrastructure without conflicts of interest. We work alongside EF Protocol Support, client teams, and other ecosystem organizations in a complementary role. EF Protocol Support staffs technical coordination directly; ECH Institute provides community-facing coordination, documentation, and education as a public-good institution funded independently through grants and donations.',
      },
      {
        q: 'What programs does ECH Institute run?',
        a: 'ECH Institute runs several programs: (1) PEEPanEIP — a video series featuring 100+ deep-dives on specific EIPs with their authors. (2) WiEP (Women in Ethereum Protocol) — structured classrooms, office hours, and mentorship for increasing gender diversity in protocol work. (3) EPD (Ecosystem Project Demo) — live demonstrations of projects building on Ethereum infrastructure. (4) EIPIP Office Hours — open calls where anyone can discuss EIP process improvements with editors and core developers. (5) Upgrade Communication — publishing All Core Devs meeting notes, upgrade timelines, and node operator guides for each network hard fork.',
      },
      {
        q: 'How is ECH Institute funded?',
        a: 'ECH Institute is funded through a mix of protocol grants (including from the Ethereum Foundation), ecosystem sponsorships, and direct donations. As a registered 501(c)(3) public charity in the United States, donations may be tax-deductible for US taxpayers. We publish annual transparency reports outlining our funding sources, budget allocation, and organizational activities. Our treasury accepts both fiat and cryptocurrency donations. We maintain zero private conflicts of interest — our work benefits the entire Ethereum ecosystem rather than any single company or protocol direction.',
      },
    ],
  },
  {
    id: 'governance',
    label: 'Governance',
    icon: Globe,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    questions: [
      {
        q: 'How does Ethereum governance work?',
        a: 'Ethereum uses an off-chain, rough-consensus governance model. There is no formal voting mechanism or single governing body. Protocol changes emerge through a structured social process: ideas are discussed on Ethereum Magicians forums, formalized as EIPs, reviewed in public GitHub pull requests, debated in All Core Devs (ACD) calls, and accepted or rejected based on broad agreement among client implementation teams. No single entity can unilaterally force a protocol change. This multi-client requirement preserves Ethereum\'s decentralization — all major clients must implement and run a change for it to activate on mainnet.',
      },
      {
        q: 'What are All Core Devs (ACD) calls?',
        a: 'All Core Devs calls are biweekly public meetings where Ethereum\'s core developer community discusses protocol changes, EIP reviews, upgrade planning, and coordination topics. There are two alternating call types: ACDE (Execution Layer) and ACDC (Consensus Layer). Calls are open to observers — anyone can join to listen. ECH Institute documents every ACD call and publishes detailed notes to the ethereum/pm GitHub repository within 24 hours. Video recordings are also published to YouTube. These calls are the primary decision-making venue for Ethereum network upgrades.',
      },
      {
        q: 'Who has the final say in Ethereum protocol decisions?',
        a: 'No single entity has final say. Ethereum protocol decisions emerge from rough consensus among client implementation teams — Geth, Nethermind, Besu, Erigon, Reth on the execution layer; Lighthouse, Prysm, Teku, Lodestar, Nimbus on the consensus layer. If a change is not accepted by all major client teams, it cannot activate on mainnet. This multi-client model means any single client team can block a change, but cannot force one. Broad, well-justified proposals succeed; controversial or rushed ones are deferred — often for months or entire upgrade cycles.',
      },
      {
        q: 'How can I participate in Ethereum governance as a newcomer?',
        a: 'Start by observing. Watch recorded ACD calls on YouTube and read meeting notes at github.com/ethereum/pm. For live discussions, Ethereum Magicians (ethereum-magicians.org) is the primary public forum for EIP proposals and governance conversations. ECH Institute\'s Discord and EIPIP office hours are specifically designed to help newcomers understand the EIP process and ask questions in a welcoming environment. The WiEP program offers structured classrooms for women entering protocol work. Even reading EIP proposals and leaving thoughtful comments on Ethereum Magicians is a meaningful contribution.',
      },
      {
        q: 'What is the role of ECH Institute in Ethereum governance?',
        a: 'ECH Institute plays a neutral infrastructure role — we do not advocate for specific EIPs or protocol directions. Our governance contributions include: coordinating EIPIP office hours and ACD call logistics; publishing detailed ACD meeting notes to the public archive; creating educational content that helps new participants understand the governance process; maintaining upgrade communication timelines for node operators and the broader community; and facilitating conversations between EIP authors, editors, and core developers. Our neutrality is our most important asset — it allows us to serve the entire ecosystem without conflicts of interest.',
      },
    ],
  },
  {
    id: 'eips',
    label: 'EIPs & Protocol',
    icon: GitBranch,
    color: '#3b82f6',
    bg: '#eff6ff',
    border: '#bfdbfe',
    questions: [
      {
        q: 'What is an EIP (Ethereum Improvement Proposal)?',
        a: 'An EIP is a formal document describing a proposed change to the Ethereum protocol. EIPs follow the standardized template from EIP-1 which requires: Preamble (metadata), Abstract (concise summary), Motivation (why the change is needed), Specification (technical details), Rationale (design decisions), Backward Compatibility analysis, and Test Cases. EIPs serve two purposes: they are the proposal document and, once finalized, the permanent technical specification for that feature. EIPs are submitted as pull requests to the ethereum/EIPs GitHub repository and are publicly accessible to anyone in the world.',
      },
      {
        q: 'How do I track the status of a specific EIP?',
        a: 'For formal status (Draft, Review, Last Call, Final), visit eips.ethereum.org — each EIP page shows its current status and revision history. For upgrade inclusion status (Proposed for Inclusion, Considered for Inclusion, Scheduled for Inclusion, Included), use Forkcast.org which provides a real-time visual tracker for all active upgrades. For implementation progress across client teams, check the Ethereum Foundation\'s Protocol Support dashboard at ps.ethereum.foundation. ECH Institute also publishes ACD meeting notes at github.com/ethereum/pm that reference specific EIPs by number and their current discussion state.',
      },
      {
        q: 'What is the difference between EIP types?',
        a: 'There are three EIP types: (1) Standards Track EIPs propose changes to the Ethereum protocol itself — subclassified as Core (hard fork changes), Networking (P2P protocol), Interface (API/RPC), and ERC (application-level standards like ERC-20 tokens and ERC-721 NFTs). (2) Meta EIPs describe processes or changes to the EIP process itself — EIP-1 is the defining example. (3) Informational EIPs provide general guidelines or information without proposing protocol code changes. The vast majority of well-known EIPs — including token standards — are ERC-type Standards Track EIPs.',
      },
      {
        q: 'How do EIPs become finalized standards?',
        a: 'EIPs move through a defined lifecycle: Idea (informal discussion on Ethereum Magicians) → Draft (formal document submitted as a PR to ethereum/EIPs) → Review (editors and core developers evaluate technical soundness) → Last Call (14-day public comment window) → Final (accepted as official standard). Moving from Draft to Final typically takes months to years depending on complexity and community support. EIP editors facilitate format and clarity review — they do not make protocol decisions. ECH Institute\'s EIPIP office hours actively support EIP authors through this process, helping them navigate reviewer feedback and improve their proposals.',
      },
      {
        q: 'Can anyone write and submit an EIP?',
        a: 'Yes — anyone can write and submit an EIP. There is no application process or required credentials. The EIP repository at github.com/ethereum/EIPs accepts pull requests from the public. However, quality matters: EIPs must strictly follow the EIP-1 template, include complete technical specifications, and demonstrate clear motivation — not just a vague idea. A well-written EIP backed by community discussion on Ethereum Magicians is far more likely to receive meaningful engagement. ECH Institute\'s EIPIP office hours exist specifically to help potential authors understand the process and receive early feedback before formal submission.',
      },
    ],
  },
  {
    id: 'upgrades',
    label: 'Network Upgrades',
    icon: Zap,
    color: '#10b981',
    bg: '#f0fdf4',
    border: '#a7f3d0',
    questions: [
      {
        q: 'When is the next Ethereum network upgrade?',
        a: 'Ethereum is moving to a biannual upgrade schedule — two major network upgrades per year, in H1 and H2. The most current upgrade timelines are tracked at Forkcast.org and the Ethereum Foundation\'s Protocol Support dashboard (ps.ethereum.foundation). ECH Institute publishes upgrade communication and timelines to github.com/ethereum/pm after each ACD planning call. As of 2025, the Pectra upgrade is deployed to public testnets and Fusaka is in active planning. Always check official resources for the most up-to-date activation dates, as timelines shift based on testnet readiness and client team agreement.',
      },
      {
        q: 'What major changes are coming in the Pectra upgrade?',
        a: 'The Pectra upgrade (Prague + Electra) is a dual execution+consensus layer hard fork with several significant EIPs: EIP-7702 (Account Abstraction) allows EOA wallets to temporarily act like smart contracts for a single transaction — enabling gasless transactions and batching. EIP-7251 increases the maximum effective validator balance from 32 ETH to 2048 ETH, improving staking economics. EIP-6110 and EIP-7002 improve deposit and withdrawal processing. EIP-7549 and EIP-7685 improve attestation processing efficiency. EIP-2935 supports stateless clients by storing historical block hashes in state. Together, these represent a major validator UX upgrade and account abstraction on-ramp.',
      },
      {
        q: 'What is the Fusaka upgrade and what does it include?',
        a: 'Fusaka (Osaka + Fulu) is the upgrade following Pectra and is currently in planning. The major anticipated inclusion is EOF (EVM Object Format, EIP-7692) — a significant restructuring of the EVM bytecode format that makes contract code more structured, reducing deployment risks and enabling new optimizations. Additional EIPs under discussion include further staking improvements and cross-layer fee market changes. EIP status for Fusaka is tracked at Forkcast.org. Because Fusaka is in the planning phase, inclusions remain subject to change based on client team agreement and testnet performance. ECH Institute publishes Fusaka planning updates as they emerge from ACD calls.',
      },
      {
        q: 'I am a node operator — what do I need to do for an upgrade?',
        a: 'For each Ethereum network upgrade, node operators must update both their execution client (Geth, Nethermind, Besu, Erigon, or Reth) and their consensus client (Lighthouse, Prysm, Teku, Lodestar, or Nimbus) to versions that support the new upgrade, before the activation block or timestamp. ECH Institute publishes node operator upgrade guides for each hard fork — these include client version requirements, activation timestamps, and troubleshooting notes. Always verify upgrade announcements through multiple official sources. Failing to update before activation will cause your node to follow the wrong chain and miss the upgrade.',
      },
      {
        q: 'Where can I watch discussions about upcoming upgrades?',
        a: 'Several resources cover upgrade discussions: (1) YouTube — ECH Institute publishes All Core Devs call recordings on the Ethereum Cat Herders channel. (2) PEEPanEIP — ECH Institute\'s video series features 100+ EIP deep-dives with their authors, including EIPs targeted for upcoming upgrades. (3) EPD (Ecosystem Project Demo) — live project demonstrations tied to upgrade features. (4) GitHub — github.com/ethereum/pm has ACD call agendas and notes for every upgrade planning session. (5) Forkcast.org — real-time visual upgrade tracker. (6) Ethereum Magicians — primary forum for EIP authors and reviewers. ECH Institute also aggregates these resources on our Education page.',
      },
    ],
  },
  {
    id: 'getinvolved',
    label: 'Getting Involved',
    icon: Users,
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
    questions: [
      {
        q: 'What Fellowships or programs does ECH Institute offer?',
        a: 'ECH Institute runs the WiEP (Women in Ethereum Protocol) program — a structured fellowship for women who want to contribute to Ethereum protocol work. WiEP includes classroom sessions covering EIP fundamentals, governance processes, and protocol history; mentorship pairing with experienced protocol contributors; hands-on participation in EIPIP office hours and ACD call observation; and a community of peers navigating the same learning journey. Applications open periodically and are announced through Discord and Twitter/X. Beyond WiEP, ECH Institute\'s EIPIP office hours are open to all community members regardless of background or experience level.',
      },
      {
        q: 'How do I attend an All Core Devs call?',
        a: 'All Core Devs calls are publicly observable — no application or invitation required. Call schedules and Zoom links are published in the ethereum/pm GitHub repository (github.com/ethereum/pm) a few days before each call. You can also find announcements in the Ethereum R&D Discord and through ECH Institute\'s Discord and Twitter channels. Observers are expected to listen silently — these are working sessions for core developers. After each call, ECH Institute publishes detailed written notes and video recordings so you can follow along even if you miss the live session.',
      },
      {
        q: 'How can I help document or support ECH Institute\'s work?',
        a: 'Documentation contributions are genuinely valuable and always welcome. You can help by: reviewing and improving ACD call notes on the ethereum/pm GitHub repository; writing summaries or explainers of recent EIPs for the ECH Institute blog; helping moderate EIPIP office hours; creating translated content for non-English speaking communities; or providing technical review on educational materials. The best starting point is the ECH Institute Discord — introduce yourself in the #get-involved channel and the team will connect you with current open tasks. All contributions are acknowledged in our annual transparency reports.',
      },
      {
        q: 'Can I invite ECH Institute to speak at my event or conference?',
        a: 'Yes — ECH Institute contributors regularly speak at Ethereum events including EthCC, Devcon, ETHGlobal, and protocol-focused conferences. Speaking requests and collaboration inquiries can be directed through our contact email (listed on the About page) or Discord server. We are particularly interested in opportunities to present on Ethereum governance, the EIP process, upgrade coordination, and inclusion programs. We also offer workshop formats for governance education sessions suitable for university courses, enterprise Ethereum programs, and developer onboarding curricula.',
      },
      {
        q: 'How can I financially support ECH Institute?',
        a: 'ECH Institute is a 501(c)(3) nonprofit and accepts both fiat and cryptocurrency donations. Cryptocurrency donations can be sent to our published treasury address (listed on the Support page of this website). Fiat donations and larger grant inquiries can be made through our contact page. If you represent an organization interested in a formal sponsorship arrangement — conference co-branding, grant partnership, or program sponsorship — please reach out through the Support page. Your support directly funds governance coordination, educational content, the WiEP fellowship, and upgrade communication infrastructure that benefits the entire Ethereum ecosystem.',
      },
    ],
  },
];

// ─── FAQSection Component ──────────────────────────────────────────────────────
export default function FAQSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ '0-0': true });

  const toggleItem = (key: string) =>
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setOpenItems({ [`${idx}-0`]: true });
  };

  const topic = FAQ_TOPICS[activeTab];

  return (
    <section
      id="faq"
      className="py-10 md:py-12 px-4 md:px-8"
      style={{ background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)', borderTop: '1px solid #e5e7eb' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-yellow)' }}>
            Knowledge Base
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about ECH Institute, Ethereum governance, EIPs, and network upgrades.
          </p>
        </div>

        {/* Tab Bar — horizontally scrollable on mobile */}
        <div
          className="flex gap-2 overflow-x-auto pb-2 mb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FAQ_TOPICS.map((t, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={t.id}
                onClick={() => handleTabChange(idx)}
                className="flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 border-2 flex-shrink-0"
                style={
                  isActive
                    ? { background: t.bg, borderColor: t.color, color: t.color, boxShadow: `0 2px 8px ${t.color}22` }
                    : { background: 'white', borderColor: '#e5e7eb', color: '#6b7280' }
                }
              >
                <t.icon size={14} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Topic intro badge */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="proplay-icon-container h-9 w-9"
            style={{ '--dynamic-bg': topic.bg, '--dynamic-accent': topic.color } as React.CSSProperties}
          >
            <topic.icon size={18} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
              {topic.label}
            </p>
            <p className="text-xs text-gray-400">{topic.questions.length} questions</p>
          </div>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {topic.questions.map((item, qi) => {
            const key = `${activeTab}-${qi}`;
            const isOpen = !!openItems[key];
            return (
              <div
                key={key}
                className="proplay-dynamic-card rounded-xl overflow-hidden"
                style={{
                  '--dynamic-bg': topic.bg,
                  '--dynamic-accent': topic.color,
                  '--card-border-alt': isOpen ? topic.border : '#e5e7eb',
                  boxShadow: isOpen ? `0 4px 16px ${topic.color}18` : 'none',
                } as React.CSSProperties}
              >
                {/* Question button */}
                <button
                  onClick={() => toggleItem(key)}
                  className="w-full flex items-center gap-4 p-4 sm:p-5 text-left transition-colors"
                  style={{ background: isOpen ? topic.bg + '55' : 'white' }}
                >
                  {/* Step number */}
                  <div
                    className="proplay-icon-container h-8 w-8 !text-sm font-extrabold !border-1.5"
                    style={{
                      '--dynamic-bg': isOpen ? topic.bg : '#f3f4f6',
                      '--dynamic-accent': isOpen ? topic.color : '#9ca3af',
                    } as React.CSSProperties}
                  >
                    {qi + 1}
                  </div>
                  <span className="flex-1 font-bold text-black text-sm sm:text-base leading-snug">
                    {item.q}
                  </span>
                  <div
                    className="proplay-icon-container h-7 w-7 !rounded-full !border-1.5 transition-transform duration-300"
                    style={{
                      '--dynamic-bg': isOpen ? topic.bg : '#f3f4f6',
                      '--dynamic-accent': isOpen ? topic.color : '#9ca3af',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    } as React.CSSProperties}
                  >
                    <ChevronDown size={13} />
                  </div>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div
                    className="px-4 sm:px-5 pb-5 pt-1"
                    style={{ borderTop: `1.5px solid ${topic.border}` }}
                  >
                    <div
                      className="mt-3 p-4 rounded-xl text-sm leading-relaxed text-gray-600"
                      style={{ background: topic.bg }}
                    >
                      {item.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-10 rounded-2xl border-2 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5"
          style={{
            borderColor: 'var(--color-yellow)',
            background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)',
          }}
        >
          <div className="flex-shrink-0 hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
            <topic.icon size={22} style={{ color: 'var(--color-yellow)' }} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-extrabold text-black text-lg mb-1">Still have questions?</p>
            <p className="text-gray-500 text-sm">
              Join our Discord for live support or explore the Homestead page for in-depth governance documentation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center flex-shrink-0">
            <Link href="https://dsc.gg/ech" target="_blank" className="btn btn-primary">
              Join Discord
            </Link>
            <Link href={ROUTES.homestead} className="btn btn-outline">
              Homestead
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
