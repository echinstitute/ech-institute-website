'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { getYouTubeEmbedUrl, getYouTubeThumbnailUrl } from '@/lib/youtube';
import {
  Calendar,
  MapPin,
  Users,
  Building2,
  Mic,
  Video,
  Code,
  MessageSquare,
  Sparkles,
  LucideIcon,
  Star,
  Circle,
  Trophy,
  Image as ImageIcon,
  Target,
  FileText,
  Network,
  Scale,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
  Play
} from 'lucide-react';
export default function EventsPage() {
  const [activeEventId, setActiveEventId] = useState('road-to-devcon-2026');
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [tappedVideo, setTappedVideo] = useState<string | null>(null); // mobile tap-to-play
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<Array<{ src: string; alt: string }>>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalImagesRef = useRef<Array<{ src: string; alt: string }>>([]);
  const videoHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Open image modal
  const openImageModal = (images: Array<{ src: string; alt: string }>, index: number) => {
    setModalImages(images);
    modalImagesRef.current = images;
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.classList.add('no-scroll'); // Prevent background scrolling
  };

  // Close image modal
  const closeImageModal = () => {
    setModalOpen(false);
    document.body.classList.remove('no-scroll'); // Restore scrolling
  };

  // Navigate to previous image
  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
  };

  // Navigate to next image
  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const imagesLength = modalImagesRef.current.length;
      if (imagesLength === 0) return;

      if (e.key === 'Escape') {
        setModalOpen(false);
        document.body.classList.remove('no-scroll');
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  const scrollToEvent = (eventId: string) => {
    const section = document.getElementById(eventId);
    if (!section) return;
    setActiveEventId(eventId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.event-detail-section'));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveEventId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (videoHoverTimeoutRef.current) {
        clearTimeout(videoHoverTimeoutRef.current);
      }
    };
  }, []);

  const eventDetails: any[] = [
    {
      id: 'road-to-devcon-2026',
      year: '2026',
      month: 'TBD',
      badge: 'Upcoming',
      badgeType: 'upcoming',
      tags: ['DEVCON 2026', 'ROAD TO DEVCON', 'ROUNDTABLE', 'GOVERNANCE'],
      title: 'Road to Devcon 2026',
      subtitle: '(Roundtable Series)',
      location: 'Global — Multiple Locations',
      date: '2026 — Dates TBA',
      echFootprint: 'Ongoing roundtable series',
      description:
        'The Road to Devcon 2026 is ECH Institute\'s flagship pre-Devcon initiative — a series of community roundtables and technical coordination sessions designed to prepare the Ethereum community for Devcon 2026. Building on the momentum of Devconnect Argentina and the EIP Summit, this series will bring together core developers, researchers, and community builders to align on protocol priorities ahead of the world\'s largest Ethereum developer conference.',
      activities: [
        {
          icon: MessageSquare,
          title: 'Community Roundtables',
          description:
            'Structured roundtable discussions on key Ethereum upgrade milestones, governance decisions, and ecosystem priorities — open to developers, researchers, and community contributors worldwide.',
        },
        {
          icon: Mic,
          title: 'Technical Briefings',
          description:
            'Pre-Devcon technical sessions covering the state of the EIP process, upcoming upgrade proposals, and what the community needs to know before Devcon 2026.',
        },
        {
          icon: Users,
          title: 'WiEP Road to Devcon',
          description:
            'Dedicated Women in Ethereum Protocol sessions as part of the Road to Devcon series — building community and mentorship pipelines in advance of the global conference.',
        },
        {
          icon: Globe,
          title: 'Global Coordination',
          description:
            'Coordinating with regional Ethereum communities worldwide to ensure diverse participation and broad ecosystem representation at Devcon 2026.',
        },
      ],
      recapVideo: 'https://www.youtube.com/live/4N4LHKReoV4?si=KYC7fve_K9PhNDTD',
      photos: [],
    },
    {
      id: 'devconnect-argentina',
      year: '2025',
      month: 'Nov',
      badge: 'Recently Completed',
      badgeType: 'featured',
      tags: ['DEVCONNECT ARG', 'WORLD\'S FAIR', 'LATAM', 'EIP SUMMIT'],
      title: 'Devconnect Argentina 2025',
      subtitle: '(EIP Summit)',
      location: 'Buenos Aires, Argentina · La Rural',
      date: 'Nov 17–22, 2025',
      echFootprint: '5 ECH-led activations',
      description:
        'ECH Institute provided a dedicated technical forum for protocol researchers and helped grow the Ethereum developer ecosystem in Latin America (LATAM). During Devconnect at La Rural, ECH anchored the first standalone summit focused on the EIP lifecycle and complemented it with technical sessions, community presence, and regional inclusion programming.',
      activities: [
        {
          title: 'EIP summit',
          description: 'Explore the full technical programming from the first-ever EIP Summit. Watch deep dives on protocol governance, executable specifications, and research-to-reality pipelines led by core developers and researchers.',
          videoUrl: 'https://youtube.com/playlist?list=PL4cwHXAawZxo_4-sDIY0ISXklLYn0ESpC&si=55_AIMn8DkTZudf0',
          playlistVideoId: 'U_8H6h_GfQ0'
        },
        {
          title: 'Devconnect Argentina 2025 Event Playlist',
          description: 'Catch all the talks, panels, and community moments from ECH Institute\'s activations across Devconnect Argentina 2025. Watch the full event playlist.',
          videoUrl: 'https://youtube.com/playlist?list=PL4cwHXAawZxoPEaPPAMB-fOJgFVmbQeH7&si=oqZGzDv9ToO_1LrZ',
          playlistVideoId: 'N64FlANVK8U'
        },
        {
          title: 'Women in Ethereum Protocol (WiEP)',
          description: 'A major networking event supporting Women in Ethereum Protocol (WiEP), providing an inclusive space for mentoring, connecting, and empowering women entering protocol development in Latin America.',
          image: '/assets/events/Devconnect Argentina 2025/IMG_3683.webp',
          videoUrl: 'https://youtu.be/MiYQ_P7vtEQ?si=ikg2lw6asXeoaRut',
          hidePlayIcon: true
        },
        {
          title: 'Devconnect - Enterprise Education',
          description: 'Focused enterprise education talks aimed at bridging the gap between corporate use cases and Ethereum\'s public good infrastructure. Discover how institutions can meaningfully engage with protocol development.',
          videoUrl: 'https://youtube.com/playlist?list=PL4cwHXAawZxpz-erUbKKUnnGoQNdF8s7Z&si=mNqMhvLlsWuA0yzD',
          playlistVideoId: '9Ajj6Z_rBCo'
        },
      ],
      recapVideo: 'https://youtu.be/N64FlANVK8U?si=Y9SBZ1I2R5EfeoVH',
      photos: [
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3553.webp', alt: 'Devconnect Argentina 2025 - EIP Summit Opening' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3576.webp', alt: 'Devconnect Argentina 2025 - EIP Summit Session' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3599.webp', alt: 'Devconnect Argentina 2025 - Protocol Governance Workshop' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3683.webp', alt: 'Devconnect Argentina 2025 - WiEP Brunch Networking' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3698.webp', alt: 'Devconnect Argentina 2025 - Community Hub Activities' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3713.webp', alt: 'Devconnect Argentina 2025 - Ethereum World\'s Fair' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3751.webp', alt: 'Devconnect Argentina 2025 - Technical Sessions' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3794.webp', alt: 'Devconnect Argentina 2025 - Community Engagement' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3797.webp', alt: 'Devconnect Argentina 2025 - Protocol Discussions' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3818.webp', alt: 'Devconnect Argentina 2025 - EIP Authors & Researchers' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3874.webp', alt: 'Devconnect Argentina 2025 - Networking Event' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3888.webp', alt: 'Devconnect Argentina 2025 - Event Highlights' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3910.webp', alt: 'Devconnect Argentina 2025 - Community Moments' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3929.webp', alt: 'Devconnect Argentina 2025 - Workshop Activities' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_3975.webp', alt: 'Devconnect Argentina 2025 - Conference Sessions' },
        { src: '/assets/events/Devconnect Argentina 2025/IMG_4002.webp', alt: 'Devconnect Argentina 2025 - Final Event Moments' },
      ],
    },
    {
      id: 'eth-tokyo-edcon-2025',
      year: '2025',
      month: 'Sep',
      badge: 'Key Event',
      badgeType: 'featured',
      tags: ['EDCON 2025', 'WIEP', 'OSAKA', 'COMMUNITY BOOTH'],
      title: 'ECH Institute & WiEP at EDCON 2025',
      subtitle: '(Osaka, Japan)',
      location: 'Grand Green Osaka, Osaka, Japan',
      date: 'Sep 17–19, 2025',
      echFootprint: 'Main Stage talk, Booth 4 & community activations',
      description:
        'ECH Institute and Women in Ethereum Protocol (WiEP) brought their community coordination mission to EDCON 2025 at Grand Green Osaka. Pooja Ranjan delivered a featured talk on the Main Stage covering education and diversity in protocol development, while the ECH & WiEP team hosted Booth 4 on Level 4F — connecting attendees with the Ethereum Cat Herders mission, sharing exclusive event swag, and onboarding newcomers and long-time contributors alike into the Ethereum ecosystem.',
      activities: [
        {
          icon: Mic,
          title: 'Main Stage Keynote — WiEP Talk',
          description:
            'Pooja Ranjan delivered "Education & Diversity in Protocol Development (Women in Ethereum Protocol)" on the EDCON Main Stage on September 17, 11:55 AM – 12:15 PM, highlighting the importance of inclusive participation in Ethereum\'s protocol governance.',
        },
        {
          icon: Building2,
          title: 'ECH & WiEP Community Booth (Booth 4)',
          description:
            'Operated Booth 4 on Level 4F near the registration table throughout EDCON 2025 — providing attendees with direct access to the Ethereum Cat Herders team, information on EIPs, network upgrades, and how to get involved in protocol community work.',
        },
        {
          icon: Users,
          title: 'Meet the Herders',
          description:
            'Hosted open conversations at the booth about ECH\'s role in guiding and educating the Ethereum community on Ethereum Improvement Proposals and network upgrades — and how newcomers can become part of this dynamic community.',
        },
        {
          icon: MessageSquare,
          title: 'Learn & Network',
          description:
            'Created a welcoming space for both first-time Ethereum attendees and long-time contributors to ask questions, share experiences, and explore pathways into the Ethereum ecosystem — from EIPs to governance and beyond.',
        },
        {
          icon: Sparkles,
          title: 'Exclusive Event Swag',
          description:
            'Distributed exclusive ECH Institute & WiEP swag available only at EDCON 2025 — a memorable touchpoint for community members who visited the booth during the event.',
        },
        {
          icon: Globe,
          title: 'Community Call & Ticket Giveaway',
          description:
            'Invited the broader Ethereum community to join ECH\'s first Community Call for a chance to win tickets to EDCON 2025, expanding access and engagement with the global protocol coordination ecosystem.',
        },
      ],
      recapVideo: null,
      photos: [],
    },
    {
      id: 'devcon-bangkok',
      year: '2024',
      month: 'Nov',
      badge: 'Key Event',
      badgeType: 'featured',
      tags: ['DEVCON 7', 'TALKS', 'COMMUNITY HUB', 'GOVERNANCE'],
      title: 'Devcon 7 Southeast Asia',
      subtitle: '(Bangkok)',
      location: 'Bangkok, Thailand · QSNCC',
      date: 'Nov 12–15, 2024',
      echFootprint: '5 ECH-led activations',
      description:
        'Devcon 7 brought more than 12,500 people to the Queen Sirikit National Convention Center (QSNCC) in Bangkok. ECH Institute focused on onboarding first-time attendees about 60% were new to Devcon to how Ethereum is governed, not only how it is traded, and on diversity through WiEP and structured community feedback.',
      activities: [
        {
          title: 'Devcon - Opening talk on EIPs',
          description: 'Pooja Ranjan delivered "EIPs Simplified: History and Process Explained" to demystify network upgrades and help newcomers see a clear path from spectator to core contributor.',
          image: '/assets/events/Devcon 7 Bangkok/IMG_3780.webp',
          videoUrl: ''
        },
        {
          title: 'Devcon - ECH Booth',
          description: 'A dedicated four-day community hub where attendees engaged directly with ECH on Ethereum governance, how upgrades are coordinated, and how to get involved.',
          image: '/assets/events/Devcon 7 Bangkok/IMG_3800.webp',
          videoUrl: ''
        },
        {
          title: 'Devcon - FEM Session Notes',
          description: 'Facilitated comprehensive note-taking and coordination for the Fellowship of Ethereum Magicians, ensuring critical technical discussions on core EIPs were documented for the global community.',
          image: '/assets/events/Devcon 7 Bangkok/IMG_3801.webp',
          videoUrl: ''
        },
        {
          title: 'Devcon - WiEP Brunch',
          description: 'Co-hosted the WiEP Brunch & Networking event for over 400 community members. Featured the introductory talk "Empowering Women in Ethereum," creating space to connect senior contributors with newer researchers.',
          image: '/assets/events/Devcon 7 Bangkok/IMG_3868.webp',
          videoUrl: ''
        },
        {
          title: 'Devcon - Web3Hub (Community support)',
          description: 'Extended the ECH presence into the Web3Hub space, offering hands-on community support, answering questions on protocol upgrades, and running surveys to improve educational resources like PEEPanEIP.',
          image: '/assets/events/Devcon 7 Bangkok/IMG_3882.webp',
          videoUrl: ''
        },
      ],
      recapVideo: 'https://youtu.be/rksdvA4oHWU?si=70QTp_dfsF57ybjh',
      photos: [
        { src: '/assets/events/Devcon 7 Bangkok/IMG_3780.webp', alt: 'Devcon 7 Bangkok - Main Conference Hall' },
        { src: '/assets/events/Devcon 7 Bangkok/IMG_3800.webp', alt: 'Devcon 7 Bangkok - ECH Impact Booth' },
        { src: '/assets/events/Devcon 7 Bangkok/IMG_3801.webp', alt: 'Devcon 7 Bangkok - Governance Deep-Dive Workshop' },
        { src: '/assets/events/Devcon 7 Bangkok/IMG_3868.webp', alt: 'Devcon 7 Bangkok - WiEP Brunch & Networking' },
        { src: '/assets/events/Devcon 7 Bangkok/IMG_3882.webp', alt: 'Devcon 7 Bangkok - Community Engagement Session' },
      ],
    },
    {
      id: 'eth-singapore',
      year: '2024',
      month: 'Sep',
      badge: 'Key Event',
      badgeType: 'featured',
      tags: ['HACKATHON', 'TALKS', 'NETWORKING', 'STANDARDIZATION'],
      title: 'ETH Singapore 2024',
      subtitle: '(Pragma)',
      location: 'Singapore · Marina Bay Sands & Fullerton Hotel (Pragma)',
      date: 'Sep 19–22, 2024',
      echFootprint: '5 ECH-led activations',
      description:
        'ECH Institute served as a community pillar for Southeast Asia\'s Ethereum developer ecosystem, aligning regional builders with global roadmap work through governance education and EIP standardization. The main program ran at Marina Bay Sands (September 19–22, 2024); Pragma Singapore technical workshops took place at the Fullerton Hotel.',
      activities: [
        {
          title: 'Eth Singapore - Main stage talk',
          description: 'Delivered the keynote "ECH Contributing to Ethereum\'s Infinite Garden," outlining ECH\'s critical role as a decentralized coordinator and why coordination ("herding") is just as vital as code.',
          image: '/assets/events/ETH Singapore 2024/ech-event-1.webp',
          videoUrl: ''
        },
        {
          title: 'Eth Singapore - Fireside chat with Aya Miyaguchi',
          description: 'Participated in a high-impact fireside chat with Aya Miyaguchi, Executive Director of the Ethereum Foundation, discussing ecosystem growth, protocol education, and ECH\'s support of the EF.',
          image: '/assets/events/ETH Singapore 2024/ech-event-2.jpg',
          videoUrl: ''
        },
        {
          title: 'Eth Singapore - WiEP Workshop',
          description: 'Organized a major WiEP networking event on September 16 at the ArtScience Museum, connecting women in technical and protocol-facing roles to foster mentorship and collaboration.',
          image: '/assets/events/ETH Singapore 2024/photo_34_2026-04-26_08-29-31.jpg',
          videoUrl: ''
        },
      ],
      recapVideo: 'https://youtu.be/v9G684uz6Rk?si=RugRRy81ISBQIDJu',
      photos: [
        { src: '/assets/events/ETH Singapore 2024/ech-event-1.webp', alt: 'ETH Singapore 2024 - Marina Bay Sands Conference' },
        { src: '/assets/events/ETH Singapore 2024/ech-event-2.jpg', alt: 'ETH Singapore 2024 - Keynote Presentation & WiEP Networking' },
        { src: '/assets/events/ETH Singapore 2024/photo_34_2026-04-26_08-29-31.jpg', alt: 'ETH Singapore 2024 - Event Activity' },
        { src: '/assets/events/ETH Singapore 2024/photo_42_2026-04-26_08-29-31.jpg', alt: 'ETH Singapore 2024 - Community Interaction' },
        { src: '/assets/events/ETH Singapore 2024/photo_43_2026-04-26_08-29-31.jpg', alt: 'ETH Singapore 2024 - Event Moments' },
      ],
    },
  ];

  return (
    <main className="events-page pt-16 lg:pt-24">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-container">
          <div className="events-hero-content">
            <div className="events-hero-text flex flex-col items-center text-center">
              <div className="hero-badge animate-fade-up mb-6">
                <span className="badge-dot"></span>
                Protocol & Community
              </div>
              <h1 className="global-hero-title animate-fade-up delay-1">
                Events <span className="text-[#F5A51D]">& Talks</span>
              </h1>
              <p className="hero-subtitle animate-fade-up delay-2 mt-6 max-w-3xl">
                From ETH Singapore 2024 and Devcon 7 Bangkok to Eth Tokyo & EDCON 2025, Devconnect Argentina 2025, and the Road to Devcon 2026 — ECH Institute shows up where the protocol meets the community: EIPs, governance education, WiEP, and hands-on activations that turn global events into lasting onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="events-shell">
        <aside className="events-side-nav !bg-transparent" aria-label="Event sections">
          <div className="events-side-nav-card !bg-transparent">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-[#F5A51D] rounded-full"></div>
              <p className="events-side-nav-label text-sm font-black tracking-[0.15em] text-[#FBFBFB] uppercase">Event Index</p>
            </div>
            <div className="events-side-nav-list flex flex-col gap-3">
              {eventDetails.map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => scrollToEvent(event.id)}
                  className={`events-side-nav-item group w-full flex flex-col !items-start !text-left rounded-2xl border bg-[#1B1B1E] p-5 transition-all duration-300 relative overflow-hidden ${
                    activeEventId === event.id 
                      ? 'border-[#F5A51D] shadow-[0_0_20px_rgba(245,165,29,0.1)]' 
                      : 'border-[#262626] hover:border-[#F5A51D]/50 hover:bg-[#262626]/50'
                  }`}
                >
                  {activeEventId === event.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5A51D]" />
                  )}
                  <div className="flex justify-between items-center w-full mb-3">
                    <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                      activeEventId === event.id ? 'text-[#F5A51D]' : 'text-[#FBFBFB]/40 group-hover:text-[#FBFBFB]/80'
                    }`}>
                      {event.year}
                    </span>
                    {event.badge === 'Upcoming' && (
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#151419] bg-[#F5A51D] px-2 py-0.5 rounded-sm">
                        Upcoming
                      </span>
                    )}
                  </div>
                  <div className={`text-[15px] font-extrabold leading-snug mb-1 transition-colors ${
                    activeEventId === event.id ? 'text-[#F5A51D]' : 'text-[#FBFBFB]/80 group-hover:text-[#F5A51D]'
                  }`}>
                    {event.title}
                  </div>
                  <div className="text-xs text-[#FBFBFB]/40 font-medium">
                    {event.subtitle.replace(/[()]/g, '')}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="events-main-column">
          {eventDetails.map((event) => (
            <section
              key={event.id}
              id={event.id}
              className="event-detail-section"
            >
              <div className="events-container">
                <div className="event-header">
                  <div className="event-header-top">
                    <span className={`event-badge badge-${event.badgeType}`}>
                      {event.badgeType === 'featured' && <Star className="badge-icon" />}
                      {event.badgeType === 'upcoming' && <Circle className="badge-icon" />}
                      {event.badge}
                    </span>
                    <div className="event-type-tags">
                      {event.tags.map((tag: string, tagIndex: number) => (
                        <span key={tagIndex} className="type-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="global-section-title !text-left !text-[#FBFBFB] mb-6">
                    {event.title.split(' ').slice(0, -1).join(' ')} <span className="text-[#F5A51D]">{event.title.split(' ').slice(-1)}</span>
                  </h2>
                  <div className="event-meta-row">
                    <span className="meta-item">
                      <MapPin className="meta-icon" />
                      {event.location}
                    </span>
                    <span className="meta-item">
                      <Calendar className="meta-icon" />
                      {event.date}
                    </span>
                    {event.echFootprint && (
                      <span className="meta-item">
                        <Target className="meta-icon" />
                        {event.echFootprint}
                      </span>
                    )}
                  </div>
                </div>

                <div className="event-content-main">
                  <p className="event-description-large">{event.description}</p>

                  {event.recapVideo && (
                    <div className="event-video-section">
                      <div className="event-video-card">
                        <div className="event-video-copy">
                          <p className="event-video-label">Featured recap</p>
                          <h3 className="recap-title">
                            <Video className="recap-title-icon" />
                            Event Recap Video
                          </h3>
                          <p className="event-video-description">
                            Watch the full recap from this ECH Institute event activation, including talks, community moments, and highlights from the venue.
                          </p>
                          <a
                            href={event.recapVideo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="event-video-link"
                          >
                            Watch on YouTube
                            <ArrowUpRight className="event-link-icon" />
                          </a>
                        </div>
                        <div
                          className="recap-video-container event-video-container-large cursor-pointer"
                          onMouseEnter={() => {
                            if (videoHoverTimeoutRef.current) {
                              clearTimeout(videoHoverTimeoutRef.current);
                            }
                            videoHoverTimeoutRef.current = setTimeout(() => {
                              setHoveredVideo(event.id);
                            }, 1200);
                          }}
                          onMouseLeave={() => {
                            if (videoHoverTimeoutRef.current) {
                              clearTimeout(videoHoverTimeoutRef.current);
                              videoHoverTimeoutRef.current = null;
                            }
                            setHoveredVideo(null);
                          }}
                          onClick={() => {
                            setTappedVideo((prev) => (prev === event.id ? null : event.id));
                          }}
                        >
                          {(hoveredVideo === event.id || tappedVideo === event.id) ? (
                            <iframe
                              src={getYouTubeEmbedUrl(event.recapVideo)}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="recap-video"
                              title={`${event.title} Recap`}
                            ></iframe>
                          ) : (
                            <Image
                              src={getYouTubeThumbnailUrl(event.recapVideo)}
                              alt={`${event.title} Recap Thumbnail`}
                              width={960}
                              height={540}
                              className="recap-video-thumbnail"
                              loading="lazy"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )}



                  {event.activities && event.activities.length > 0 && (
                    <div className="event-activities">
                      <h3 className="global-section-title !text-left !text-[#FBFBFB] text-3xl mb-8 flex items-center gap-3">
                        <Sparkles className="text-[#F5A51D] w-8 h-8" />
                        Specific <span className="text-[#F5A51D]">ECH Activities</span>
                      </h3>
                      {event.id === 'road-to-devcon-2026' || event.id === 'eth-tokyo-edcon-2025' ? (
                        <div className="activities-grid">
                          {event.activities.map((activity: any, activityIndex: number) => {
                            const IconComponent = activity.icon as LucideIcon;
                            return (
                              <div key={activityIndex} className="activity-item">
                                <div className="activity-icon">
                                  <IconComponent className="activity-icon-svg" />
                                </div>
                                <div className="activity-content">
                                  <div className="activity-title">{activity.title}</div>
                                  <div className="activity-description">{activity.description}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="flex flex-col gap-12 mt-8">
                          {event.activities.map((activity: any, activityIndex: number) => {
                            const isEven = activityIndex % 2 === 0;
                            return (
                              <div key={activityIndex} className={`flex flex-col md:flex-row gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                                {activity.videoUrl ? (
                                  <a href={activity.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 relative rounded-2xl overflow-hidden border border-[#262626] bg-[#1B1B1E] aspect-video group shadow-lg cursor-pointer block">
                                    {(activity.image || activity.videoUrl) && (
                            <Image
                              src={activity.image || (activity.playlistVideoId ? `https://img.youtube.com/vi/${activity.playlistVideoId}/maxresdefault.jpg` : getYouTubeThumbnailUrl(activity.videoUrl))}
                              alt={activity.title} 
                              fill 
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                                    )}
                                    {activity.videoUrl && !activity.videoUrl.includes('playlist') && !activity.hidePlayIcon && (
                                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 rounded-full bg-[#F5A51D] flex items-center justify-center text-[#151419] shadow-[0_0_30px_rgba(245,165,29,0.3)]">
                                          <Play className="w-6 h-6 ml-1" fill="currentColor" />
                                        </div>
                                      </div>
                                    )}
                                  </a>
                                ) : (
                                  <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden border border-[#262626] bg-[#1B1B1E] aspect-video group shadow-lg">
                                    {activity.image && (
                                      <Image 
                                        src={activity.image} 
                                        alt={activity.title} 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                      />
                                    )}
                                  </div>
                                )}
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                  <div className="w-12 h-1 bg-[#F5A51D] mb-5 rounded-full shadow-[0_0_10px_rgba(245,165,29,0.5)]"></div>
                                  <h4 className="font-syne font-bold text-xl md:text-2xl text-[#FBFBFB] mb-4 leading-tight">{activity.title}</h4>
                                  <p className="text-[#FBFBFB]/70 text-base leading-relaxed mb-6">{activity.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {event.photos && event.photos.length > 0 && (
                    <div className="event-photos-section">
                      <h3 className="photos-title">
                        <ImageIcon className="photos-title-icon" />
                        Event Photos
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {event.photos.slice(0, 6).map((photo: any, photoIndex: number) => (
                          <div
                            key={photoIndex}
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group bg-[#1B1B1E] border border-[#262626] hover:border-[#F5A51D] transition-all"
                            onClick={() => openImageModal(event.photos, photoIndex)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                openImageModal(event.photos, photoIndex);
                              }
                            }}
                          >
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              width={400}
                              height={300}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.classList.add('hidden');
                                const parent = target.parentElement;
                                if (parent && !parent.querySelector('.photo-error')) {
                                  const errorDiv = document.createElement('div');
                                  errorDiv.className = 'photo-error photo-placeholder';
                                  errorDiv.innerHTML = '<svg class="photo-placeholder-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span class="photo-placeholder-text">Image not available</span>';
                                  parent.appendChild(errorDiv);
                                }
                              }}
                            />
                            {/* Hover overlay removed per user request */}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className="image-modal-close" onClick={closeImageModal} aria-label="Close modal">
            <X />
          </button>
          <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
            {modalImages.length > 1 && (
              <>
                <button 
                  className="image-modal-nav image-modal-prev" 
                  onClick={goToPreviousImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft />
                </button>
                <button 
                  className="image-modal-nav image-modal-next" 
                  onClick={goToNextImage}
                  aria-label="Next image"
                >
                  <ChevronRight />
                </button>
              </>
            )}
            <div className="image-modal-content">
              <Image
                src={modalImages[currentImageIndex].src}
                alt={modalImages[currentImageIndex].alt}
                width={1200}
                height={800}
                className="image-modal-image"
                priority={currentImageIndex === 0}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.classList.add('hidden');
                  const errorDiv = document.createElement('div');
                  errorDiv.className = 'image-error-message';
                  errorDiv.textContent = 'Image format not supported. Please convert .HEIC files to .jpg or .png';
                  target.parentElement?.appendChild(errorDiv);
                }}
              />
            </div>
            {modalImages.length > 1 && (
              <div className="image-modal-counter">
                {currentImageIndex + 1} / {modalImages.length}
              </div>
            )}
            <div className="image-modal-caption">
              {modalImages[currentImageIndex].alt.split(' - ')[0]}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


