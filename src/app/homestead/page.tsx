'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import {
  Home, Globe, BookOpen, Network, Shield, Target, CheckCircle2,
  ChevronRight, ExternalLink, MessageSquare, Calendar,
  ChevronDown, GitBranch, AlertCircle, Clock, Cpu, FileText,
  Lightbulb, Users, Zap, ArrowRight, Layers,
  TrendingUp, Award, Info
} from 'lucide-react';
import { ROUTES, EXTERNAL_LINKS } from '@/config/routes';
import { cn } from '@/lib/utils';
import { StickySideNav } from '@/components/ui/StickySideNav';

// ─── Sections for sticky nav ─────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  // { id: 'governance-hub', label: 'Governance Hub' },
  { id: 'what-is-governance', label: 'What is Governance' },
  { id: 'eip-process', label: 'The EIP Process' },
  { id: 'network-upgrades', label: 'Network Upgrades' },
  { id: 'ech-role', label: 'Role of ECH Institute' },
  { id: 'why-it-matters', label: 'Why It Matters' },
  { id: 'get-involved', label: 'Get Involved' },
];

// ─── Governance Hub — How Ethereum Governance Works ──────────────────────────
const governanceHowItems = [
  {
    icon: Lightbulb,
    title: 'Ideas & Community Discussion',
    detail: 'Every change to Ethereum begins as an informal idea. Before any formal document is written, the concept is discussed openly on Ethereum Magicians (the primary governance forum), Discord channels, and research forums like ethresear.ch. This early phase gauges community interest, identifies potential problems, and refines the proposal before it goes through the formal EIP process. ECH Institute monitors these discussions and helps surface important conversations to the core developer community.',
    tone: 'neutral',
  },
  {
    icon: FileText,
    title: 'Formal EIP Drafting',
    detail: 'Once an idea has sufficient community traction, it is formalized as an Ethereum Improvement Proposal (EIP). EIPs must follow the template defined in EIP-1, which requires a preamble, abstract, motivation, full specification, rationale, backward compatibility analysis, and test cases. The proposal is submitted as a pull request to the ethereum/EIPs GitHub repository and reviewed by EIP editors for format and technical soundness. ECH Institute coordinates EIP editor office hours and EIPIP calls to shepherd EIPs through this phase.',
    tone: 'info',
  },
  {
    icon: Users,
    title: 'Core Developer Review (ACD Calls)',
    detail: 'After EIP editors approve a draft, the proposal enters technical review by core Ethereum developers through All Core Devs (ACD) calls. ACD calls are biweekly calls alternating between Execution Layer (ACDE) and Consensus Layer (ACDC) meetings. These open calls are the primary venue where client teams (Geth, Nethermind, Besu, Lighthouse, Prysm, etc.) discuss whether to support an EIP. ECH Institute documents every ACD call and publishes notes to the ethereum/pm repository within 24 hours, creating a permanent public record.',
    tone: 'violet',
  },
  {
    icon: Network,
    title: 'Upgrade Planning & Inclusion',
    detail: 'EIPs that pass technical review can be nominated for inclusion in a network upgrade. This process follows the formal inclusion stages defined by EIP-7723 (see below). Client teams must agree on which EIPs to include and implement them before a devnet is deployed for testing. A series of devnets, public testnets, and monitoring periods precede mainnet activation. ECH Institute coordinates upgrade communication — from initial CFI nomination through post-mainnet confirmation — ensuring the entire community stays informed.',
    tone: 'success',
  },
  {
    icon: Cpu,
    title: 'Mainnet Activation & Post-Deployment',
    detail: 'Once all client teams have implemented and tested the upgrade, mainnet activation is scheduled at a specific block number or timestamp. The upgrade activates simultaneously across all Ethereum clients. ECH Institute monitors post-deployment metrics and publishes upgrade summaries for the community. Historical documentation of every Ethereum upgrade since Frontier (2015) is preserved in the ethereum/pm GitHub repository.',
    tone: 'warning',
  },
];

// ─── Upgrade Lifecycle (4 formal inclusion stages from EIP-7723) ──────────────
const upgradeLcStages = [
  {
    stage: 'Proposed for Inclusion',
    abbr: 'PFI',
    icon: Lightbulb,
    tone: 'neutral',
    description: 'An EIP author or community member nominates a finalized EIP for consideration in an upcoming network upgrade. The nomination is made publicly, typically in the relevant ACD meeting issue on GitHub or on Ethereum Magicians.',
    actions: [
      'Community or author nominates EIP on GitHub',
      'Must already be in Final or Review status',
      'Listed on Forkcast.org as PFI',
      'Open for community feedback and objections',
    ],
    echRole: 'ECH Institute tracks all PFI nominations in EIPIP calls and ensures they appear in ACD meeting agendas.',
  },
  {
    stage: 'Considered for Inclusion',
    abbr: 'CFI',
    icon: AlertCircle,
    tone: 'warning',
    description: 'Client teams signal that an EIP is being actively reviewed for potential inclusion. CFI is an informal signal — it does not guarantee inclusion but indicates that client teams are evaluating the EIP seriously and may implement it.',
    actions: [
      'Client teams discuss EIP in ACD calls',
      'Client devs begin prototyping implementations',
      'Testing on local devnets begins',
      'Technical objections surfaced and discussed',
    ],
    echRole: 'ECH Institute documents CFI decisions in ACD notes and tracks implementation progress across client teams.',
  },
  {
    stage: 'Scheduled for Inclusion',
    abbr: 'SFI',
    icon: Clock,
    tone: 'violet',
    description: 'Client teams have formally agreed that the EIP will be included in a specific named upgrade. All major clients must commit to implementing the EIP before it reaches SFI status. This is the last decision gate before testnet deployment.',
    actions: [
      'All major clients commit to implementation',
      'EIP included in upgrade specification',
      'Devnet with EIP activated for testing',
      'Public testnet deployment scheduled',
    ],
    echRole: 'ECH Institute coordinates upgrade communication timelines and begins preparing community-facing documentation.',
  },
  {
    stage: 'Included in Network Upgrade',
    abbr: 'INU',
    icon: CheckCircle2,
    tone: 'success',
    description: 'The EIP is part of the finalized, named network upgrade and will activate on Ethereum mainnet. All clients have implemented and tested it on public testnets. The mainnet activation block or timestamp has been set. No further community decisions are required.',
    actions: [
      'Public testnet activation confirmed',
      'Mainnet activation block/timestamp set',
      'Community communication distributed',
      'Post-activation monitoring begins',
    ],
    echRole: 'ECH Institute publishes upgrade guides, coordinates post-deployment reports, and archives all documentation.',
  },
];

// ─── Why Clear Governance Matters ────────────────────────────────────────────
const govMattersItems = [
  {
    icon: TrendingUp,
    title: 'Improves Decision Quality',
    tone: 'info',
    desc: 'When the governance process is clearly documented and publicly observable, more stakeholders participate in review. More reviewers catch more edge cases, spot implementation risks, and surface use cases that authors may have missed. This diversity of review makes the resulting EIPs and upgrades more robust and battle-tested before they reach mainnet.',
    bullets: [
      'More reviewers catch more edge cases and bugs',
      'Diverse stakeholder perspectives improve design',
      'Open review creates accountability for proposals',
      'Historical records enable pattern recognition',
    ],
  },
  {
    icon: Zap,
    title: 'Reduces Coordination Overhead',
    tone: 'success',
    desc: 'Without clear governance processes, every upgrade requires renegotiating the same fundamental questions: who decides, how do we signal readiness, when does testing happen, and how do we communicate to users? Clear processes like the EIP lifecycle and EIP-7723 inclusion stages eliminate this overhead. ECH Institute\'s documentation and coordination work means that participants don\'t need to reinvent the process every cycle.',
    bullets: [
      'Standardized stages (EIP-7723) remove ambiguity',
      'Documented decisions prevent repeated debates',
      'Predictable timelines let builders plan ahead',
      'Neutral coordination reduces inter-team friction',
    ],
  },
  {
    icon: Globe,
    title: 'Enables Broader Participation',
    tone: 'violet',
    desc: 'If governance processes are opaque or undocumented, only insiders with social connections can meaningfully participate. Every meeting note published, every EIP explained in plain language, and every office hour opened to the public is a direct investment in broader participation. ECH Institute\'s educational content and coordination infrastructure specifically exist to lower this barrier for contributors worldwide.',
    bullets: [
      'Open documentation lowers the knowledge barrier',
      'Plain-language explanations reach non-technical audiences',
      'Office hours give community members direct access',
      'WiEP and inclusion programs expand the contributor pool',
    ],
  },
];

// ─── Explore Links ────────────────────────────────────────────────────────────
const exploreLinks = [
  {
    icon: MessageSquare,
    title: 'EIP Discussions',
    subtitle: 'Ethereum Magicians',
    desc: 'The primary public forum for EIP proposals, technical discussions, and governance conversations. Forum threads are the birthplace of most EIPs and run alongside the formal GitHub review process.',
    href: 'https://ethereum-magicians.org/',
    tag: 'Active Forum',
    tone: 'violet',
    external: true,
  },
  {
    icon: FileText,
    title: 'Meeting Notes',
    subtitle: 'ethereum/pm on GitHub',
    desc: 'All Core Devs call notes, EIPIP meeting summaries, and upgrade planning documentation published by ECH Institute. The complete, searchable archive of Ethereum protocol governance decisions.',
    href: 'https://github.com/ethereum/pm',
    tag: 'Public Archive',
    tone: 'neutral',
    external: true,
  },
  {
    icon: Calendar,
    title: 'Governance Calls',
    subtitle: 'EIPIP Office Hours',
    desc: 'ECH Institute\'s open EIPIP office hours connect community members with EIP editors and core developers. Agendas are published in advance on GitHub. Anyone can attend and ask questions.',
    href: 'https://github.com/ethereum-cat-herders/EIPIP/issues',
    tag: 'Open to All',
    tone: 'success',
    external: true,
  },
  {
    icon: TrendingUp,
    title: 'Upgrade Tracker',
    subtitle: 'Forkcast.org',
    desc: 'Visual real-time tracker showing which EIPs are Proposed, Considered, Scheduled, or Included in active Ethereum network upgrades. Community-maintained and updated continuously.',
    href: 'https://forkcast.org',
    tag: 'Live Tracker',
    tone: 'warning',
    external: true,
  },
  {
    icon: Globe,
    title: 'Protocol Support',
    subtitle: 'Ethereum Foundation',
    desc: 'The Ethereum Foundation\'s Protocol Support dashboard covering EIP status, client implementation tracking, and upgrade planning across the Ethereum protocol layer.',
    href: 'https://ps.ethereum.foundation',
    tag: 'EF Resource',
    tone: 'info',
    external: true,
  },
  {
    icon: BookOpen,
    title: 'EIPs Repository',
    subtitle: 'github.com/ethereum/EIPs',
    desc: 'The official GitHub repository where all Ethereum Improvement Proposals live. Browse active drafts, read finalized standards, and track the complete EIP review history.',
    href: 'https://github.com/ethereum/EIPs',
    tag: 'GitHub Repo',
    tone: 'neutral',
    external: true,
  },
];

// ─── What is Governance accordion items ─────────────────────────────────────
const governanceItems = [
  {
    icon: Lightbulb,
    title: 'What is Ethereum Governance?',
    summary: 'How decisions about Ethereum\'s protocol are made without any central authority.',
    detail: 'Ethereum governance is the process by which changes to the protocol are proposed, discussed, evaluated, and implemented. Unlike traditional software with a centralized team, Ethereum relies on a rough consensus model meaning changes must achieve broad agreement among client teams, researchers, application developers, and the broader community before they are accepted. No single entity has veto power or final authority over the protocol.',
    points: [
      'Decentralized decision-making with no single authority',
      'Rough consensus required across client teams and community',
      'Changes proposed through the EIP (Ethereum Improvement Proposal) process',
      'All discussions are open and accessible to anyone',
      'Client teams must independently choose to implement changes',
    ],
  },
  {
    icon: Globe,
    title: 'Upgrade Selection Process',
    summary: 'How specific EIPs are chosen to be included in each Ethereum network upgrade.',
    detail: 'The upgrade selection process is a community-driven effort to identify which EIPs are ready, well-tested, and sufficiently supported for inclusion in the next hard fork. This process happens primarily through All Core Devs (ACD) calls and dedicated upgrade planning calls. EIPs that are "Considered for Inclusion" (CFI) are monitored, debated, and eventually accepted or deferred based on readiness and client team support.',
    points: [
      'EIPs can be "Considered for Inclusion" (CFI) to signal readiness',
      'Upgrade planning calls discuss which EIPs have client support',
      'Client teams must implement and agree on EIPs before activation',
      'EIP-7723 standardizes the "inclusion" states for EIPs',
      'Forkcast.org provides a public tracking view of upgrade state',
    ],
    links: [
      { label: 'Forkcast.org Upgrade Tracker', href: 'https://forkcast.org', external: true },
      { label: 'Protocol Support Dashboard', href: 'https://ps.ethereum.foundation', external: true },
    ],
  },
  {
    icon: Network,
    title: 'What is the EIP Process?',
    summary: 'The formal system through which protocol changes are proposed and standardized.',
    detail: 'An Ethereum Improvement Proposal (EIP) is a formal document that describes a change to the Ethereum protocol. Each EIP follows a standard structure defined by EIP-1 including a preamble, abstract, motivation, specification, rationale, backward compatibility notes, and test cases. EIPs serve as both the proposal document and the permanent specification for accepted changes.',
    points: [
      'EIPs follow the template defined by EIP-1',
      'Proposals are submitted as PRs to the ethereum/EIPs GitHub repository',
      'EIP editors review for format, clarity, and technical soundness',
      'Community discussion happens on Ethereum Magicians and GitHub',
      'Finalized EIPs become the permanent specification for that feature',
    ],
    links: [
      { label: 'EIPs Repository on GitHub', href: 'https://github.com/ethereum/EIPs', external: true },
      { label: 'EIP-1: EIP Purpose and Guidelines', href: 'https://eips.ethereum.org/EIPS/eip-1', external: true },
    ],
  },
  {
    icon: Info,
    title: 'Why Governance Matters',
    summary: 'How good governance keeps Ethereum decentralized, secure, and evolving responsibly.',
    detail: 'Governance is what prevents Ethereum from being controlled by any single entity while still allowing it to evolve and improve. Without a structured governance process, changes could be made by whichever party had the most resources or influence. Good governance ensures that all voices have a pathway to participate, decisions are well-documented, and changes are tested and deliberate.',
    points: [
      'Prevents capture by any single company or interest group',
      'Ensures changes are thoroughly tested before mainnet activation',
      'Creates a documented record of why decisions were made',
      'Opens participation pathways to the entire global community',
      'Protects the social contract of decentralization',
    ],
  },
];

// ─── EIP Process Steps ────────────────────────────────────────────────────────
const eipStages = [
  { stage: 'Idea', icon: Lightbulb, tone: 'neutral', description: 'A concept is informally discussed on Ethereum Magicians or Discord to gauge community interest and feasibility before any formal document is written.', actions: ['Post on Ethereum Magicians', 'Gauge community interest', 'Refine the core idea'] },
  { stage: 'Draft', icon: FileText, tone: 'info', description: 'A formal EIP document is written following the EIP-1 template. It is submitted as a pull request to the ethereum/EIPs GitHub repository and assigned an EIP number.', actions: ['Write EIP using the EIP-1 template', 'Submit PR to ethereum/EIPs', 'Assigned an EIP number by editors'] },
  { stage: 'Review', icon: AlertCircle, tone: 'warning', description: 'EIP editors and the core developer community review the proposal for technical soundness, specification clarity, and backward compatibility. Revisions are made in response to feedback.', actions: ['EIP editor format review', 'Core developer technical review', 'Revisions based on feedback'] },
  { stage: 'Last Call', icon: Clock, tone: 'violet', description: 'A final 14-day public comment window for all stakeholders. The EIP is considered complete unless critical issues are raised that require it to return to Review status.', actions: ['14-day public comment window', 'Broadcast to wider community', 'Final chance to raise blocking issues'] },
  { stage: 'Final', icon: CheckCircle2, tone: 'success', description: 'The EIP is accepted as an official Ethereum standard. From here it may be considered for inclusion in an upcoming network upgrade, or may stand alone as an informational or interface standard.', actions: ['Accepted as official standard', 'Considered for network upgrade inclusion', 'Becomes permanent reference spec'] },
  { stage: 'Deployed', icon: Cpu, tone: 'warning', description: 'The EIP has been activated on Ethereum mainnet as part of a network upgrade. It is now enforced at the protocol level across all Ethereum clients.', actions: ['Mainnet activation via upgrade', 'Enforced by all client implementations', 'Documentation finalized and archived'] },
];

// ─── EIP status types (non-standards track) ──────────────────────────────────
const eipTypes = [
  { type: 'Standards Track', tone: 'info', desc: 'EIPs that change the Ethereum protocol itself including Core, Networking, Interface, and ERC (token/application) changes.' },
  { type: 'Meta EIP', tone: 'violet', desc: 'Describes a process or proposes a change to the EIP process itself. Not changes to the protocol.' },
  { type: 'Informational', tone: 'neutral', desc: 'Provides general guidelines or information to the Ethereum community. No binding changes to the protocol.' },
];

// ─── Network Upgrades ─────────────────────────────────────────────────────────
const upgradeItems = [
  {
    icon: GitBranch,
    title: 'How Upgrades Happen',
    summary: 'The coordinated process that activates multiple finalized EIPs simultaneously across all Ethereum clients.',
    detail: 'An Ethereum network upgrade (also called a hard fork) is a scheduled change to the protocol that requires all clients to update to a new version simultaneously. Upgrades are coordinated through the ACD calls and require unanimous agreement from all major client teams. A "fork hash" is used to coordinate the exact block or slot at which the upgrade activates.',
    points: [
      'Multiple finalized EIPs are bundled into a single upgrade',
      'All major Ethereum clients must implement the changes',
      'Activation happens at a specific block number or timestamp',
      'Devnets and testnets are deployed first for testing',
      'Community is notified well in advance of mainnet activation',
      'Post-deployment monitoring confirms upgrade success',
    ],
  },
  {
    icon: Layers,
    title: 'Inclusion States: EIP-7723',
    summary: 'The formal stages an EIP passes through before being included in a network upgrade.',
    detail: 'EIP-7723 standardizes how EIPs move from "Final" status into network upgrades. It defines three inclusion states that help client teams and the community track which EIPs are being considered, scheduled, and delivered. This brings more clarity to the upgrade planning process and reduces confusion about EIP status.',
    points: [
      'Considered for Inclusion (CFI): EIP is being reviewed for potential upgrade inclusion',
      'Scheduled for Inclusion (SFI): EIP has been formally accepted for the next upgrade',
      'Included: EIP is part of the finalized upgrade spec and will deploy on mainnet',
      'EIPs can be deferred to future upgrades if not ready',
      'Forkcast.org tracks these states publicly for the community',
    ],
    links: [
      { label: 'EIP-7723: Upgrade Inclusion Stages', href: 'https://eips.ethereum.org/EIPS/eip-7723', external: true },
      { label: 'Forkcast.org', href: 'https://forkcast.org', external: true },
    ],
  },
  {
    icon: Network,
    title: 'Recent Upgrades',
    summary: 'An overview of the latest Ethereum network upgrades and what they delivered.',
    detail: 'Ethereum has undergone numerous network upgrades since its genesis in 2015. Each upgrade bundles together improvements to the execution and consensus layers. Starting in 2026, Ethereum is transitioning to a biannual upgrade schedule to provide more predictable engineering timelines for client teams and the ecosystem.',
    points: [
      'Dencun (2024): Proto-danksharding (EIP-4844) blob transactions for L2 scaling',
      'Pectra (2025): Validator UX improvements, account abstraction, L2 fee improvements',
      'Fusaka (TBD): EOF (EVM Object Format) and additional EIPs under discussion',
      'Glamsterdam (H1 2026): Block-level Access Lists (EIP-7928), parallel execution',
      'Hegota (H2 2026): State growth management, forward-inclusion lists (FOCIL)',
    ],
    links: [
      { label: 'ECH Institute Events', href: '/events', external: false },
      { label: 'Protocol Support Dashboard', href: 'https://ps.ethereum.foundation', external: true },
    ],
  },
];

// ─── ECH Institute Role ───────────────────────────────────────────────────────
const echRoleItems = [
  {
    icon: MessageSquare,
    title: 'Coordination',
    summary: 'ECH Institute organizes and facilitates the calls and processes that keep Ethereum governance functioning.',
    detail: 'ECH Institute coordinates a wide range of governance infrastructure including EIPIP (EIP Improvement Process) meetings, All Core Devs documentation, and upgrade communication. As a neutral party, the Institute is able to facilitate conversations between groups that might otherwise lack a shared coordination venue. This coordination role is critical to ensuring no proposal or concern falls through the cracks.',
    points: [
      'Organizes EIPIP (EIP Improvement Process) office hours and calls',
      'Facilitates All Core Devs (ACD) call logistics and pre-meeting preparation',
      'Manages upgrade communication timelines with client teams',
      'Coordinates between EIP authors, editors, and core developers',
      'Maintains agenda systems and follow-up tracking for governance calls',
    ],
    links: [
      { label: 'EIPIP GitHub', href: 'https://github.com/ethereum-cat-herders/EIPIP', external: true },
    ],
  },
  {
    icon: FileText,
    title: 'Documentation',
    summary: 'Every significant Ethereum governance call is documented and publicly archived by ECH Institute.',
    detail: 'ECH Institute is responsible for documenting All Core Devs (ACD) calls, EIPIP meetings, and upgrade planning sessions. Notes are published to the ethereum/pm repository on GitHub, creating a permanent, searchable record of protocol decisions. This documentation work is often invisible but essential it ensures the community can track how decisions were made and hold the process accountable.',
    points: [
      'All Core Devs call notes published to ethereum/pm within 24 hours',
      'EIPIP meeting summaries shared with the community',
      'Upgrade planning timelines documented and maintained',
      'Historical archive of all ACD decisions dating back to 2019',
      'Accessible public record for researchers and future contributors',
    ],
    links: [
      { label: 'ethereum/pm Repository', href: 'https://github.com/ethereum/pm', external: true },
    ],
  },
  {
    icon: BookOpen,
    title: 'Education',
    summary: 'Making Ethereum governance concepts accessible through video, blog, and structured learning.',
    detail: 'Through the PEEPanEIP video series, WiEP classrooms, Ecosystem Project Demo (EPD) series, and blog content, ECH Institute produces educational resources that help beginners, contributors, and enterprises understand how Ethereum works and how to participate in its governance. The Education section of this website provides structured learning tracks for each audience type.',
    points: [
      'PEEPanEIP: 100+ video deep-dives on specific EIPs with their authors',
      'WiEP: Structured classrooms for women entering Ethereum protocol work',
      'EPD: Live demos of ecosystem projects building Ethereum infrastructure',
      'Blog: Technical governance analysis and upgrade communication',
      'Education hub: Structured learning tracks by audience type',
    ],
    links: [
      { label: 'Education Page', href: '/education', external: false },
      { label: 'PEEPanEIP', href: ROUTES.peepaneip, external: false },
    ],
  },
  {
    icon: Users,
    title: 'Participation Pathways',
    summary: 'How anyone can get involved in Ethereum governance with ECH Institute\'s help.',
    detail: 'One of ECH Institute\'s core mandates is to lower the barrier to meaningful participation in Ethereum governance. The Institute creates and maintains pathways for people at all experience levels from first-time readers to seasoned protocol researchers to engage with the governance process. This includes EIPIP office hours, the WiEP program, open ACD observation, and community documentation opportunities.',
    points: [
      'EIPIP office hours open to all interested community members',
      'ACD calls are publicly observable anyone can watch',
      'WiEP program provides structured on-ramp for new protocol contributors',
      'Community can contribute to ACD call documentation',
      'Ethereum Magicians forum is the primary public discussion space',
      'Discord communities provide real-time governance discussion access',
    ],
    links: [
      { label: 'Get Involved', href: ROUTES.getInvolved, external: false },
      { label: 'Ethereum Magicians', href: 'https://ethereum-magicians.org/', external: true },
    ],
  },
];

// ─── Why It Matters ───────────────────────────────────────────────────────────
const whyItems = [
  {
    icon: Globe,
    title: 'Public Infrastructure Needs Governance',
    summary: 'Ethereum is global financial and computational infrastructure governance is what keeps it trustworthy.',
    detail: 'Ethereum is used by millions of people and handles trillions of dollars in value. Like physical infrastructure such as roads or power grids, it requires governance structures that are transparent, accountable, and resistant to capture. Without structured governance, Ethereum\'s decentralization promise becomes fragile. Good governance is what makes Ethereum a public good rather than a corporate product.',
    points: [
      'Ethereum secures trillions in value across thousands of applications',
      'No central entity should have unilateral control over infrastructure this important',
      'Governance creates accountability without centralization',
      'Transparent processes build long-term trust with users and builders',
      'Structured governance is a prerequisite for Ethereum\'s legitimacy as public infrastructure',
    ],
  },
  {
    icon: Zap,
    title: 'Clarity Reduces Friction',
    summary: 'When the process is clear, everyone can plan and build with confidence.',
    detail: 'Unclear governance creates unpredictability that has real costs developers can\'t plan their roadmaps, enterprises can\'t make infrastructure decisions, and researchers can\'t know which proposals are worth pursuing. ECH Institute exists to provide that clarity. By documenting decisions, communicating upgrade timelines, and explaining the EIP process, the Institute reduces friction for the entire ecosystem.',
    points: [
      'Clear timelines let developers plan upgrades and migrations',
      'Documented decisions prevent repeated debates on settled questions',
      'Educational resources lower the cost of learning how to participate',
      'Transparent communication reduces uncertainty for enterprise builders',
      'Well-documented governance reduces coordination costs ecosystem-wide',
    ],
  },
  {
    icon: Target,
    title: 'Participation Improves Outcomes',
    summary: 'The more informed people participate in governance, the better Ethereum\'s decisions become.',
    detail: 'Ethereum\'s governance model is designed to benefit from broad participation. When more stakeholders engage with EIP proposals, more edge cases are identified, more perspectives are considered, and the resulting decisions are more robust. ECH Institute lowers the barrier to informed participation making it possible for researchers, developers, enterprises, and community members to contribute meaningfully to protocol decisions.',
    points: [
      'More reviewers catch more bugs and edge cases in EIP proposals',
      'Diverse perspectives lead to more robust and resilient protocol designs',
      'Informed community members make better decisions about running nodes and validators',
      'Wider participation strengthens the legitimacy of governance outcomes',
      'ECH Institute helps new participants go from observer to contributor',
    ],
  },
  {
    icon: Shield,
    title: 'Decentralization Requires Maintenance',
    summary: 'Decentralization is not a one-time achievement it requires continuous, active coordination.',
    detail: 'One of the most important and often overlooked aspects of Ethereum governance is that decentralization requires active maintenance. Without neutral coordination infrastructure, governance naturally tends toward centralization as the best-funded or most organized groups dominate the process. ECH Institute serves as a counterweight providing neutral, public-good coordination that ensures all voices have an equal pathway to participate.',
    points: [
      'Governance without neutral support tends toward informal centralization',
      'Neutral documentation prevents information asymmetry between insiders and outsiders',
      'Consistent coordination lowers barriers for new participants over time',
      'Public good infrastructure like ECH Institute deters regulatory capture',
      'Long-term decentralization requires long-term institutional support',
    ],
  },
];

export default function HomesteadPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [openGovHow, setOpenGovHow] = useState<Record<number, boolean>>({ 0: true });
  const [openGov, setOpenGov] = useState<Record<number, boolean>>({ 0: true });
  const [openEch, setOpenEch] = useState<Record<number, boolean>>({ 0: true });
  const [openUpgrades, setOpenUpgrades] = useState<Record<number, boolean>>({ 0: true });
  const [openWhy, setOpenWhy] = useState<Record<number, boolean>>({});
  const [openMatters, setOpenMatters] = useState<Record<number, boolean>>({ 0: true });
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    NAV_SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  // Generic accordion toggle helpers
  const toggle = (
    setter: React.Dispatch<React.SetStateAction<Record<number, boolean>>>,
    i: number
  ) => setter(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <main className="min-h-screen bg-[#151419] pt-16 lg:pt-24 text-[#FBFBFB]">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section id="overview" className="py-8 px-4 md:py-16 md:px-8 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 text-center max-w-3xl mx-auto">
            <h1 className="global-hero-title">Homestead</h1>
            <p className="global-body-lg text-brand-yellow font-bold text-[1.1rem]">
              ECH is the steward of major initiatives documented at Homestead.
            </p>
            <p className="global-body-lg">
              Supporting the processes, coordination, and participation that help Ethereum evolve responsibly as open, public infrastructure.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              <Link href="https://forkcast.org" target="_blank" className="btn btn-primary">
                <TrendingUp size={16} /> Forkcast.org
              </Link>
              <Link href="https://ps.ethereum.foundation" target="_blank" className="btn btn-outline">
                <Globe size={16} /> Protocol Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#262626] py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '6', label: 'EIP Lifecycle Stages' },
              { value: '3', label: 'EIP Inclusion States' },
              { value: '2x', label: 'Annual Upgrade Cadence' },
              { value: '2024', label: 'ECH Institute Founded' },
            ].map((s, i) => (
              <div key={i}>
                <div className="global-section-title text-brand-yellow">{s.value}</div>
                <div className="text-sm text-black font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-col layout: sticky nav + content ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex gap-8 items-start">

        {/* Sticky Left Nav */}
                <StickySideNav sections={NAV_SECTIONS} activeSection={activeSection} onSectionClick={scrollToSection} />

        {/* Main content */}
        <div className="flex-1 min-w-0 flex flex-col gap-16">

     

          {/* ── Section 1: What is Ethereum Governance ───────────────────── */}
          <section id="what-is-governance">
            <div className="flex items-center gap-3 mb-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
                <Globe className="h-4 w-4 global-icon-yellow" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-black">Section 1</p>
            </div>
            <h2 className="global-section-title mb-2">What is Ethereum Governance?</h2>
            <p className="global-body-lg mb-5">
              A simple explanation of how Ethereum makes decisions the upgrade selection process, the EIP framework, and where to track it live.
            </p>

            <div className="flex flex-col gap-3 mb-5">
              {governanceItems.map((item, i) => {
                const isOpen = openGov[i];
                return (
                  <div key={i} className="global-card p-0 overflow-hidden">
                    <button
                      className="theme-hover-surface w-full flex items-center gap-4 p-4 text-left transition-colors"
                      onClick={() => toggle(setOpenGov, i)}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black shrink-0">
                        <item.icon className="h-5 w-5 global-icon-yellow" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-base text-[#FBFBFB]">{item.title}</div>
                        <p className="global-body text-sm mt-0.5">{item.summary}</p>
                      </div>
                      <ChevronDown
                        size={16}
                        className={cn('text-[#FBFBFB] shrink-0 transition-transform duration-200', isOpen && 'is-open')}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#262626] px-4 pb-4 pt-4">
                        <p className="global-body text-sm mb-4 leading-relaxed">{item.detail}</p>
                        <div className="flex flex-col gap-2 mb-4">
                          {item.points.map((pt, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <CheckCircle2 size={14} className="global-icon-yellow shrink-0 mt-0.5" />
                              <span className="text-sm text-[#FBFBFB]">{pt}</span>
                            </div>
                          ))}
                        </div>
                        {item.links && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.links.map((lnk, k) => (
                              <Link key={k} href={lnk.href} target={lnk.external ? '_blank' : '_self'}
                                className="inline-flex items-center gap-1.5 text-xs font-bold border border-black rounded-full px-3 py-1.5 hover:border-amber-400 transition-colors no-underline text-brand-yellow">
                                {lnk.label} {lnk.external ? <ExternalLink size={10} /> : <ArrowRight size={10} />}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Key links callout */}
            <div className="global-card global-border-yellow">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="h-5 w-5 global-icon-yellow shrink-0" />
                <h3 className="global-card-title mb-0">Track Ethereum Governance Live</h3>
              </div>
              <p className="global-body text-sm mb-4">Two essential resources for tracking the current state of Ethereum upgrades and EIP inclusion in real time:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="https://forkcast.org" target="_blank"
                  className="global-card flex flex-col gap-2 no-underline text-inherit hover:border-amber-400 transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#FBFBFB]">Forkcast.org</span>
                    <ExternalLink size={13} className="text-[#FBFBFB] group-hover:text-amber-400 transition-colors" />
                  </div>
                  <p className="global-body text-xs">Visual tracker for EIP inclusion stages across Ethereum upgrades. Maintained by the community.</p>
                </Link>
                <Link href="https://ps.ethereum.foundation" target="_blank"
                  className="global-card flex flex-col gap-2 no-underline text-inherit hover:border-amber-400 transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#FBFBFB]">Protocol Support Dashboard</span>
                    <ExternalLink size={13} className="text-[#FBFBFB] group-hover:text-amber-400 transition-colors" />
                  </div>
                  <p className="global-body text-xs">Ethereum Foundation&apos;s Protocol Support page covering EIPs, client coordination, and upgrade tracking.</p>
                </Link>
              </div>
            </div>
          </section>

          {/* ── Section 2: The EIP Process (Lifecycle) ───────────────────── */}
          <section id="eip-process">
            <div className="flex items-center gap-3 mb-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B1B1E]">
                <GitBranch className="h-4 w-4 global-icon-yellow" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FBFBFB]">Section 2</p>
            </div>
            <h2 className="global-section-title mb-2">The EIP Process</h2>
            <p className="global-body-lg mb-5">
              What EIPs are, how they&apos;re structured, and the lifecycle every proposal passes through from concept to mainnet deployment.
            </p>

            {/* EIP Types */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {eipTypes.map((t, i) => (
                <div key={i} className="global-card hover:border-amber-400 transition-colors">
                  <span data-tone={t.tone} className="tone-badge inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-2">{t.type}</span>
                  <p className="global-body text-sm">{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Lifecycle */}
            <h3 className="global-card-title mb-4">EIP Lifecycle: Stage by Stage</h3>
            <div className="relative flex flex-col gap-3">
              <div className="absolute left-5 top-10 bottom-10 w-[2px] bg-gradient-to-b from-gray-200 via-amber-200 to-gray-200 rounded-full hidden sm:block" />
              {eipStages.map((s, i) => (
                <div key={s.stage} className="relative flex gap-4 items-start">
                  <div data-tone={s.tone} className="tone-icon relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 mt-1">
                    <s.icon size={17} />
                  </div>
                  <div className="flex-1 global-card mb-0 hover:border-amber-400 transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span data-tone={s.tone} className="tone-link text-xs font-bold uppercase tracking-widest">Stage {i + 1}</span>
                      <h4 className="global-card-title mb-0 text-[#FBFBFB]">{s.stage}</h4>
                    </div>
                    <p className="global-body text-sm mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.actions.map((a, j) => (
                        <span key={j} data-tone={s.tone} className="tone-inline-chip flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1">
                          <CheckCircle2 size={11} className="tone-link" /> {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3: Network Upgrades ──────────────────────────────── */}
          <section id="network-upgrades">
            <div className="flex items-center gap-3 mb-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B1B1E]">
                <Layers className="h-4 w-4 global-icon-yellow" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FBFBFB]">Section 3</p>
            </div>
            <h2 className="global-section-title mb-2">Network Upgrades</h2>
            <p className="global-body-lg mb-5">
              How Ethereum coordinates hard forks, the formal inclusion stages from EIP-7723, and an overview of recent and upcoming upgrades.
            </p>

            <div className="flex flex-col gap-3">
              {upgradeItems.map((item, i) => {
                const isOpen = openUpgrades[i];
                return (
                  <div key={i} className="global-card p-0 overflow-hidden">
                    <button
                      className="theme-hover-surface w-full flex items-center gap-4 p-4 text-left transition-colors"
                      onClick={() => toggle(setOpenUpgrades, i)}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B1B1E] shrink-0">
                        <item.icon className="h-5 w-5 global-icon-yellow" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-base text-[#FBFBFB]">{item.title}</div>
                        <p className="global-body text-sm mt-0.5">{item.summary}</p>
                      </div>
                      <ChevronDown
                        size={16}
                        className={cn('text-[#FBFBFB] shrink-0 transition-transform duration-200', isOpen && 'is-open')}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#262626] px-4 pb-4 pt-4">
                        <p className="global-body text-sm mb-4 leading-relaxed">{item.detail}</p>
                        <div className="flex flex-col gap-2 mb-4">
                          {item.points.map((pt, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <CheckCircle2 size={14} className="global-icon-yellow shrink-0 mt-0.5" />
                              <span className="text-sm text-black">{pt}</span>
                            </div>
                          ))}
                        </div>
                        {item.links && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.links.map((lnk, k) => (
                              <Link key={k} href={lnk.href} target={lnk.external ? '_blank' : '_self'}
                                className="inline-flex items-center gap-1.5 text-xs font-bold border border-black rounded-full px-3 py-1.5 hover:border-amber-400 transition-colors no-underline text-brand-yellow">
                                {lnk.label} {lnk.external ? <ExternalLink size={10} /> : <ArrowRight size={10} />}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Section 4: Role of ECH Institute ────────────────────────── */}
          <section id="ech-role">
            <div className="flex items-center gap-3 mb-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B1B1E]">
                <Award className="h-4 w-4 global-icon-yellow" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FBFBFB]">Section 4</p>
            </div>
            <h2 className="global-section-title mb-2">Role of ECH Institute</h2>
            <p className="global-body-lg mb-5">
              ECH Institute is the neutral coordination and education infrastructure for Ethereum governance. Here is how the Institute contributes across four pillars.
            </p>

            <div className="flex flex-col gap-3">
              {echRoleItems.map((item, i) => {
                const isOpen = openEch[i];
                return (
                  <div key={i} className="global-card p-0 overflow-hidden">
                    <button
                      className="theme-hover-surface w-full flex items-center gap-4 p-4 text-left transition-colors"
                      onClick={() => toggle(setOpenEch, i)}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B1B1E] shrink-0">
                        <item.icon className="h-5 w-5 global-icon-yellow" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-base text-[#FBFBFB]">{item.title}</div>
                        <p className="global-body text-sm mt-0.5">{item.summary}</p>
                      </div>
                      <ChevronDown
                        size={16}
                        className={cn('text-[#FBFBFB] shrink-0 transition-transform duration-200', isOpen && 'is-open')}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#262626] px-4 pb-4 pt-4">
                        <p className="global-body text-sm mb-4 leading-relaxed">{item.detail}</p>
                        <div className="flex flex-col gap-2 mb-4">
                          {item.points.map((pt, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <CheckCircle2 size={14} className="global-icon-yellow shrink-0 mt-0.5" />
                              <span className="text-sm text-black">{pt}</span>
                            </div>
                          ))}
                        </div>
                        {item.links && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.links.map((lnk, k) => (
                              <Link key={k} href={lnk.href} target={lnk.external ? '_blank' : '_self'}
                                className="inline-flex items-center gap-1.5 text-xs font-bold border border-black rounded-full px-3 py-1.5 hover:border-amber-400 transition-colors no-underline text-brand-yellow">
                                {lnk.label} {lnk.external ? <ExternalLink size={10} /> : <ArrowRight size={10} />}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Section 5: Why It Matters ────────────────────────────────── */}
          <section id="why-it-matters">
            <div className="flex items-center gap-3 mb-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B1B1E]">
                <Target className="h-4 w-4 global-icon-yellow" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FBFBFB]">Section 5</p>
            </div>
            <h2 className="global-section-title mb-2">Why This Matters</h2>
            <p className="global-body-lg mb-5">
              Ethereum&apos;s decentralization is not self-sustaining. It requires active governance infrastructure, clear processes, and broad participation.
            </p>

            <div className="flex flex-col gap-3">
              {whyItems.map((item, i) => {
                const isOpen = openWhy[i];
                return (
                  <div key={i} className="global-card p-0 overflow-hidden">
                    <button
                      className="theme-hover-surface w-full flex items-center gap-4 p-4 text-left transition-colors"
                      onClick={() => toggle(setOpenWhy, i)}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B1B1E] shrink-0">
                        <item.icon className="h-5 w-5 global-icon-yellow" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-base text-[#FBFBFB]">{item.title}</div>
                        <p className="global-body text-sm mt-0.5">{item.summary}</p>
                      </div>
                      <ChevronDown
                        size={16}
                        className={cn('text-[#FBFBFB] shrink-0 transition-transform duration-200', isOpen && 'is-open')}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#262626] px-4 pb-4 pt-4">
                        <p className="global-body text-sm mb-4 leading-relaxed">{item.detail}</p>
                        <div className="flex flex-col gap-2">
                          {item.points.map((pt, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <CheckCircle2 size={14} className="global-icon-yellow shrink-0 mt-0.5" />
                              <span className="text-sm text-[#FBFBFB]">{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Section 6: Get Involved ──────────────────────────────────── */}
          <section id="get-involved">
            <div className="flex items-center gap-3 mb-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B1B1E]">
                <Users className="h-4 w-4 global-icon-yellow" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FBFBFB]">Take the Next Step</p>
            </div>
            <h2 className="global-section-title mb-5">Get Involved in Governance</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: MessageSquare, title: 'Community Discussions', desc: 'Participate in EIP and governance conversations on Ethereum Magicians forums.', link: 'https://ethereum-magicians.org/', cta: 'Ethereum Magicians', external: true },
                { icon: Calendar, title: 'Attend Office Hours', desc: 'Connect with core devs and EIP editors in open EIPIP coordination calls.', link: 'https://github.com/ethereum-cat-herders/EIPIP/issues', cta: 'View Agenda', external: true },
                { icon: BookOpen, title: 'Learn More', desc: 'Start with the Education page for structured learning tracks by experience level.', link: ROUTES.education, cta: 'Education Hub', external: false },
              ].map((card, i) => (
                <Link key={i} href={card.link} target={card.external ? '_blank' : '_self'}
                  className="global-card flex flex-col gap-3 no-underline text-inherit hover:border-amber-400 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B1B1E] shrink-0">
                    <card.icon className="h-5 w-5 global-icon-yellow" />
                  </div>
                  <div className="flex-1">
                    <h3 className="global-card-title mb-1">{card.title}</h3>
                    <p className="global-body text-sm">{card.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold pt-2 border-t border-[#262626] text-brand-yellow">
                    {card.cta} <ArrowRight size={13} />
                  </div>
                </Link>
              ))}
            </div>

            <div className="global-card global-border-yellow text-center">
              <p className="global-body-lg mb-2"><strong>Participation &amp; Ecosystem Contribution</strong></p>
              <p className="global-body-lg mb-6">
                ECH Institute is your starting point for understanding and contributing to Ethereum governance. Join the community, attend office hours, or simply start reading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={EXTERNAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="btn btn-primary-white">
                  Join our Discord
                </Link>
                <Link href={ROUTES.getInvolved} className="btn btn-outline text-[#FBFBFB] border-[#262626]">
                  Get Involved
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}


