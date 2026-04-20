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
} from 'lucide-react';
export default function EventsPage() {
  const [activeEventId, setActiveEventId] = useState('devconnect-argentina');
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
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.15, 0.3, 0.5],
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

  // Event details (Mumbai commented out)
  const eventDetails = [
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
          icon: Trophy,
          title: 'The EIP Summit',
          description:
            'Organized and hosted the first-ever standalone summit dedicated to Ethereum Improvement Proposals (EIPs), with technical programming for protocol authors and researchers.',
        },
        {
          icon: Mic,
          title: 'Technical sessions',
          description:
            'Led sessions including “From Research to Reality” (bridging research and implementation), “Code is Law” (executable specifications and avoiding spec drift), and “Don’t just use Ethereum: help shape it!” (why community feedback on EIPs matters).',
        },
        {
          icon: Network,
          title: 'ECH Impact booth',
          description:
            'Maintained a physical presence at the Ethereum World’s Fair to host conversations on identity, creator economies, and how protocol changes show up for builders and the public.',
        },
        {
          icon: Users,
          title: 'WiEP Latin America',
          description:
            'Hosted a Women in Ethereum Protocol (WiEP) networking brunch on November 18 to mentor and connect women in the region entering protocol development.',
        },
        {
          icon: Video,
          title: 'Content production',
          description:
            'Filmed and produced the official recap of Devconnect 2025 for the global Ethereum community.',
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
          icon: Mic,
          title: 'Onboarding keynote',
          description:
            'Delivered “EIPs Simplified: History and Process Explained” to demystify how upgrades happen and help newcomers see a path from spectator to contributor.',
        },
        {
          icon: Scale,
          title: 'Governance workshops',
          description:
            'Facilitated hands-on sessions titled “Shaping Ethereum’s Protocol Governance & Decision Making,” including how to engage with Core EIPs that affect network economics and security.',
        },
        {
          icon: Building2,
          title: 'Impact booth',
          description:
            'Operated a four-day dedicated space for attendees to engage with ECH on Ethereum governance and how upgrades are coordinated.',
        },
        {
          icon: Users,
          title: 'WiEP brunch & networking',
          description:
            'Co-hosted the WiEP Brunch & Networking event for 400+ community members and delivered the introductory talk “Empowering Women in Ethereum,” creating space to connect senior contributors with newer researchers in a very large conference.',
        },
        {
          icon: MessageSquare,
          title: 'Community research',
          description:
            'Ran a comprehensive survey to collect testimonials and feedback on making technical documentation and protocol education more accessible shaping improvements to series like PEEPanEIP.',
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
        'ECH Institute served as a community pillar for Southeast Asia’s Ethereum developer ecosystem, aligning regional builders with global roadmap work through governance education and EIP standardization. The main program ran at Marina Bay Sands (September 19–22, 2024); Pragma Singapore technical workshops took place at the Fullerton Hotel.',
      activities: [
        {
          icon: Mic,
          title: 'Keynote',
          description:
            'Delivered “ECH Contributing to Ethereum’s Infinite Garden,” outlining ECH’s role as a decentralized coordinator and why coordination (“herding”) matters alongside code for a resilient network.',
        },
        {
          icon: MessageSquare,
          title: 'Ecosystem dialogue',
          description:
            'Participated in a fireside chat with Aya Miyaguchi, Executive Director of the Ethereum Foundation, on ecosystem growth and how ECH supports the EF through education and coordination.',
        },
        {
          icon: Users,
          title: 'WiEP mentorship',
          description:
            'Organized a major WiEP networking event on September 16 at the ArtScience Museum to connect women in technical and protocol-facing roles.',
        },
        {
          icon: FileText,
          title: 'Standardization (Pragma Singapore)',
          description:
            'Hosted workshops focused on the EIP standardization process and protocol-level best practices for advanced developers.',
        },
        {
          icon: Code,
          title: 'Educational demos',
          description:
            'Ran live showcases of Learn2Earn and the PEEPanEIP series to onboard hackers to protocol learning before they build.',
        },
      ],
      recapVideo: 'https://youtu.be/v9G684uz6Rk?si=RugRRy81ISBQIDJu', 
      photos: [
        { src: '/assets/events/ETH Singapore 2024/ech-event-1.webp', alt: 'ETH Singapore 2024 - Marina Bay Sands Conference' },
        { src: '/assets/events/ETH Singapore 2024/ech-event-2.webp', alt: 'ETH Singapore 2024 - Keynote Presentation & WiEP Networking' },
      ],
    },
  ];

  return (
    <main className="events-page pt-16 lg:pt-24">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-container">
          <div className="events-hero-content">
            <div className="events-hero-text">
              <h1 className="events-hero-title">
                Events & Talks
              </h1>
              <p className="events-hero-description">
                From ETH Singapore 2024 and Devcon 7 Bangkok to Devconnect Argentina 2025 ECH Institute shows up where the protocol meets the community: EIPs, governance education, WiEP, and hands-on activations that turn global events into lasting onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="events-shell">
        <aside className="events-side-nav" aria-label="Event sections">
          <div className="events-side-nav-card">
            <p className="events-side-nav-label">Event Index</p>
            <div className="events-side-nav-list">
              {eventDetails.map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => scrollToEvent(event.id)}
                  className={`events-side-nav-item ${activeEventId === event.id ? 'is-active' : ''}`}
                >
                  <span className="events-side-nav-year">{event.year}</span>
                  <span className="events-side-nav-title text-center">{event.title} <br /> {event.subtitle}</span>
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
                      {event.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="type-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="event-main-title">{event.title}</h2>
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
                              quality={85}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {event.activities && event.activities.length > 0 && (
                    <div className="event-activities">
                      <h3 className="activities-title">
                        <Sparkles className="activities-title-icon" />
                        Specific ECH Activities
                      </h3>
                      <div className="activities-grid">
                        {event.activities.map((activity, activityIndex) => {
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
                    </div>
                  )}

                  {event.photos && event.photos.length > 0 && (
                    <div className="event-photos-section">
                      <h3 className="photos-title">
                        <ImageIcon className="photos-title-icon" />
                        Event Photos
                      </h3>
                      <div className="photos-grid">
                        {event.photos.slice(0, 6).map((photo, photoIndex) => (
                          <div
                            key={photoIndex}
                            className="photo-item"
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
                              className="photo-image"
                              loading="lazy"
                              quality={85}
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
                            <div className="photo-overlay">
                              <ImageIcon className="photo-overlay-icon" />
                            </div>
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
                quality={90}
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


