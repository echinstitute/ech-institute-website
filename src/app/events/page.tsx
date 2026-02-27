'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  Play,
  ArrowRight,
  Globe,
  Building2,
  Mic,
  Video,
  BookOpen,
  GraduationCap,
  Code,
  MessageSquare,
  Sparkles,
  LucideIcon,
  Star,
  Circle,
  CheckCircle2,
  Clock,
  Trophy,
  Image as ImageIcon,
  Youtube,
  Award,
  Target,
  FileText,
  Network,
  Scale,
  Languages,
  Radio,
  ArrowUpRight,
  Smartphone,
  Home,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import './events.css';

export default function EventsPage() {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<Array<{ src: string; alt: string }>>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalImagesRef = useRef<Array<{ src: string; alt: string }>>([]);
  const videoHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Refs for sections
  const argentinaRef = useRef<HTMLDivElement>(null);
  const bangkokRef = useRef<HTMLDivElement>(null);
  const singaporeRef = useRef<HTMLDivElement>(null);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    // Handle youtu.be format: https://youtu.be/VIDEO_ID?si=...
    const youtuBeMatch = url.match(/youtu\.be\/([^?&#]+)/);
    if (youtuBeMatch) return youtuBeMatch[1];
    
    // Handle youtube.com/watch format
    const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
    if (watchMatch) return watchMatch[1];
    
    // Handle youtube.com/embed format
    const embedMatch = url.match(/youtube\.com\/embed\/([^?&#]+)/);
    if (embedMatch) return embedMatch[1];
    
    return null;
  };

  // Get YouTube thumbnail image URL
  const getYouTubeThumbnailUrl = (url: string): string => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return '';
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // Get YouTube embed URL (autoplay muted on hover with loop)
  const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return url;
    // Play muted on hover with loop - playlist parameter is required for loop to work
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&loop=1&playlist=${videoId}`;
  };

  // Open image modal
  const openImageModal = (images: Array<{ src: string; alt: string }>, index: number) => {
    setModalImages(images);
    modalImagesRef.current = images;
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close image modal
  const closeImageModal = () => {
    setModalOpen(false);
    document.body.style.overflow = ''; // Restore scrolling
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
        document.body.style.overflow = '';
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

  // Cleanup video hover timeout on unmount
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
      title: 'Devconnect Argentina 2025 — EIP Summit',
      location: 'Buenos Aires, Argentina · La Rural',
      date: 'Nov 17–22, 2025',
      attendees: '14,000+ Attendees',
      description:
        'In November 2025, the ECH Institute hosted a landmark standalone event during the first "Ethereum World\'s Fair" in Buenos Aires. ECH organized and hosted the first-ever dedicated "EIP Summit" by the ECH Institute, featuring a full program of technical talks for protocol authors and researchers.',
      activities: [
        {
          icon: Trophy,
          title: 'The EIP Summit',
          description: 'Organized and hosted the first-ever dedicated "EIP Summit" by the ECH Institute, featuring a full program of technical talks for protocol authors and researchers.',
        },
        {
          icon: FileText,
          title: '"From Research to Reality – An EIP\'s Journey"',
          description: 'A session led by Pooja Ranjan on bridging the gap between abstract research and deployed code.',
        },
        {
          icon: MessageSquare,
          title: '"Don\'t just use Ethereum: help shape it!"',
          description: 'A talk by Jochem Brouwer on the civic duty of providing feedback on EIP drafts.',
        },
        {
          icon: Code,
          title: '"Code is Law: Avoiding Spec-ulation"',
          description: 'Technical session on accelerating forks by coupling EIP markdown with executable specs.',
        },
        {
          icon: Network,
          title: 'Cowork & Impact Hub',
          description: 'Maintained an impact booth within the "Ethereum World\'s Fair" and co-facilitated Community Hubs focused on on-chain creator economies and identity.',
        },
        {
          icon: Users,
          title: 'WiEP Brunch',
          description: 'Hosted a regional WiEP networking session on November 18 to support Latin American women entering the protocol development cohort.',
        },
        {
          icon: Video,
          title: 'Official Recap',
          description: 'Produced the "Official Recap of Devconnect 2025," documenting the energy and community moments of the world\'s fair for the global audience.',
        },
      ],
      recapVideo: 'https://youtu.be/N64FlANVK8U?si=Y9SBZ1I2R5EfeoVH', 
      photos: [
        { src: '/events/Devconnect Argentina 2025/IMG_3553.webp', alt: 'Devconnect Argentina 2025 - EIP Summit Opening' },
        { src: '/events/Devconnect Argentina 2025/IMG_3576.webp', alt: 'Devconnect Argentina 2025 - EIP Summit Session' },
        { src: '/events/Devconnect Argentina 2025/IMG_3599.webp', alt: 'Devconnect Argentina 2025 - Protocol Governance Workshop' },
        { src: '/events/Devconnect Argentina 2025/IMG_3683.webp', alt: 'Devconnect Argentina 2025 - WiEP Brunch Networking' },
        { src: '/events/Devconnect Argentina 2025/IMG_3698.webp', alt: 'Devconnect Argentina 2025 - Community Hub Activities' },
        { src: '/events/Devconnect Argentina 2025/IMG_3713.webp', alt: 'Devconnect Argentina 2025 - Ethereum World\'s Fair' },
        { src: '/events/Devconnect Argentina 2025/IMG_3751.webp', alt: 'Devconnect Argentina 2025 - Technical Sessions' },
        { src: '/events/Devconnect Argentina 2025/IMG_3794.webp', alt: 'Devconnect Argentina 2025 - Community Engagement' },
        { src: '/events/Devconnect Argentina 2025/IMG_3797.webp', alt: 'Devconnect Argentina 2025 - Protocol Discussions' },
        { src: '/events/Devconnect Argentina 2025/IMG_3818.webp', alt: 'Devconnect Argentina 2025 - EIP Authors & Researchers' },
        { src: '/events/Devconnect Argentina 2025/IMG_3874.webp', alt: 'Devconnect Argentina 2025 - Networking Event' },
        { src: '/events/Devconnect Argentina 2025/IMG_3888.webp', alt: 'Devconnect Argentina 2025 - Event Highlights' },
        { src: '/events/Devconnect Argentina 2025/IMG_3910.webp', alt: 'Devconnect Argentina 2025 - Community Moments' },
        { src: '/events/Devconnect Argentina 2025/IMG_3929.webp', alt: 'Devconnect Argentina 2025 - Workshop Activities' },
        { src: '/events/Devconnect Argentina 2025/IMG_3975.webp', alt: 'Devconnect Argentina 2025 - Conference Sessions' },
        { src: '/events/Devconnect Argentina 2025/IMG_4002.webp', alt: 'Devconnect Argentina 2025 - Final Event Moments' },
      ],
    },
    {
      id: 'devcon-bangkok',
      year: '2024',
      month: 'Nov',
      badge: 'Key Event',
      badgeType: 'featured',
      tags: ['DEVCON 7', 'TALKS', 'COMMUNITY HUB', 'GOVERNANCE'],
      title: 'Devcon 7 Southeast Asia (Bangkok): Extensive Governance and Diversity',
      location: 'Bangkok, Thailand · QSNCC',
      date: 'Nov 12–15, 2024',
      attendees: '12,500+ Attendees',
      description:
        'Held at the Queen Sirikit National Convention Center (QSNCC) in November 2024, Devcon 7 was the largest Ethereum conference in history, welcoming over 12,500 attendees. ECH\'s engagement was its most extensive to date, focusing on community education and technical diversity.',
      activities: [
        {
          icon: Mic,
          title: 'Featured Presentation',
          description: 'Delivered the major talk, "EIPs Simplified: History and Process Explained," designed to onboard the 60% of attendees who were first-time Devcon participants.',
        },
        {
          icon: Building2,
          title: 'Impact Booth',
          description: 'Hosted a dedicated "Impact Booth" throughout the 4-day event, providing a physical space for community members to ask questions about protocol governance.',
        },
        {
          icon: Scale,
          title: 'Governance Sessions',
          description: 'Facilitated deep-dive workshops titled "Shaping Ethereum\'s Protocol Governance & Decision Making," exploring decentralized coordination.',
        },
        {
          icon: Users,
          title: 'Social Inclusion (WiEP)',
          description: 'Co-hosted the WiEP Brunch & Networking event, which saw engagement from over 400 community members. Delivered the introductory talk, "Empowering Women in Ethereum: WiEP Introduction".',
        },
        {
          icon: MessageSquare,
          title: 'Community Feedback',
          description: 'Conducted a comprehensive survey during the event to collect testimonials on how to make complex technical topics more accessible to the public.',
        },
      ],
      recapVideo: 'https://youtu.be/rksdvA4oHWU?si=70QTp_dfsF57ybjh',
      photos: [
        { src: '/events/Devcon 7 Bangkok/IMG_3780.webp', alt: 'Devcon 7 Bangkok - Main Conference Hall' },
        { src: '/events/Devcon 7 Bangkok/IMG_3800.webp', alt: 'Devcon 7 Bangkok - ECH Impact Booth' },
        { src: '/events/Devcon 7 Bangkok/IMG_3801.webp', alt: 'Devcon 7 Bangkok - Governance Deep-Dive Workshop' },
        { src: '/events/Devcon 7 Bangkok/IMG_3868.webp', alt: 'Devcon 7 Bangkok - WiEP Brunch & Networking' },
        { src: '/events/Devcon 7 Bangkok/IMG_3882.webp', alt: 'Devcon 7 Bangkok - Community Engagement Session' },
      ],
    },
    {
      id: 'eth-singapore',
      year: '2024',
      month: 'Sep',
      badge: 'Key Event',
      badgeType: 'featured',
      tags: ['HACKATHON', 'TALKS', 'NETWORKING', 'STANDARDIZATION'],
      title: 'ETH Singapore 2024: Regional Onboarding and Protocol Standardization',
      location: 'Singapore · Marina Bay Sands',
      date: 'Sep 19–22, 2024',
      attendees: '1,300+ Attendees',
      description:
        'In September 2024, the ECH Institute acted as a "community pillar" at ETH Singapore, the largest Ethereum developer gathering in Southeast Asia for the year. Held at the Marina Bay Sands from September 19–22, the event drew over 1,300 attendees and 930 active hackers from 59 countries.',
      activities: [
        {
          icon: Mic,
          title: 'Keynote Presentation',
          description: 'Delivered the opening session talk, "ECH Contributing to Ethereum\'s Infinite Garden," detailing how the organization supports the Ethereum roadmap.',
        },
        {
          icon: MessageSquare,
          title: 'Aya Miyaguchi Fireside Chat',
          description: 'Pooja Ranjan (Herder-in-Chief) participated in a fireside chat with the Executive Director of the Ethereum Foundation to discuss ecosystem growth.',
        },
        {
          icon: Users,
          title: 'WiEP Networking',
          description: 'Organized a major Women in Ethereum Protocol (WiEP) event on September 16 at the ArtScience Museum to mentor and connect women in the technical space.',
        },
        {
          icon: FileText,
          title: 'Standardization Workshops',
          description: 'Hosted sessions at Pragma Singapore (Fullerton Hotel) focused on EIP standardization and protocol governance processes.',
        },
        {
          icon: Code,
          title: 'Technical Demos',
          description: 'Showcased the Learn2Earn platform and the PEEPanEIP series to provide builders with tools for core protocol contribution.',
        },
      ],
      recapVideo: 'https://youtu.be/v9G684uz6Rk?si=RugRRy81ISBQIDJu', 
      photos: [
        { src: '/events/ETH Singapore 2024/ech-event-1.webp', alt: 'ETH Singapore 2024 - Marina Bay Sands Conference' },
        { src: '/events/ETH Singapore 2024/ech-event-2.webp', alt: 'ETH Singapore 2024 - Keynote Presentation & WiEP Networking' },
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
                From ETH Singapore 2024 to Devconnect Argentina 2025 — ECH Institute has been at the heart of Ethereum's global community events, educating, coordinating, and connecting builders worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Detail Sections */}
      {eventDetails.map((event) => (
        <section
          key={event.id}
          id={event.id}
          className="event-detail-section"
          ref={event.id === 'devconnect-argentina' ? argentinaRef : event.id === 'devcon-bangkok' ? bangkokRef : singaporeRef}
        >
          <div className="events-container">
            {/* Event Header */}
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
                {event.attendees && (
                  <span className="meta-item">
                    <Users className="meta-icon" />
                    {event.attendees}
                  </span>
                )}
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="event-content-layout">
              {/* Left Column - Description */}
              <div className="event-content-main">
                <p className="event-description-large">{event.description}</p>

                {/* Activities Section */}
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

                {/* Photos Section */}
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
                              target.style.display = 'none';
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

              {/* Right Column - Video */}
              {event.recapVideo && (
                <div className="event-content-sidebar">
                  <div className="event-recap-section event-recap-prominent">
                    <div className="recap-header">
                      <h3 className="recap-title">
                        <Video className="recap-title-icon" />
                        Event Recap Video
                      </h3>
                    </div>
                    <div 
                      className="recap-video-container"
                      onMouseEnter={() => {
                        // Clear any existing timeout
                        if (videoHoverTimeoutRef.current) {
                          clearTimeout(videoHoverTimeoutRef.current);
                        }
                        // Set timeout to play video after 1.5 seconds
                        videoHoverTimeoutRef.current = setTimeout(() => {
                          setHoveredVideo(event.id);
                        }, 1500);
                      }}
                      onMouseLeave={() => {
                        // Clear timeout if mouse leaves before 1.5 seconds
                        if (videoHoverTimeoutRef.current) {
                          clearTimeout(videoHoverTimeoutRef.current);
                          videoHoverTimeoutRef.current = null;
                        }
                        setHoveredVideo(null);
                      }}
                    >
                      {hoveredVideo === event.id ? (
                        <iframe
                          key={`${event.id}-video-${hoveredVideo}`}
                          src={getYouTubeEmbedUrl(event.recapVideo)}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="recap-video"
                          title={`${event.title} Recap`}
                        ></iframe>
                      ) : (
                        <Image
                          key={`${event.id}-thumbnail`}
                          src={getYouTubeThumbnailUrl(event.recapVideo)}
                          alt={`${event.title} Recap Thumbnail`}
                          width={640}
                          height={360}
                          className="recap-video-thumbnail"
                          loading="lazy"
                          quality={85}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Image Modal */}
      {modalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal} aria-label="Close modal">
              <X />
            </button>
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
                  target.style.display = 'none';
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
