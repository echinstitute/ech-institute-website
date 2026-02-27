'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Member {
  id: number;
  name: string;
  description: string;
  twitter?: string;
  github?: string;
  image: string;
  role: string;
}

const members: Member[] = [
  {
    id: 1,
    name: "Pooja Ranjan",
    description: "Pooja Ranjan is Herder-in-chief at ECH Institute supporting the Ethereum blockchain with project management & process improvement.",
    twitter: "https://twitter.com/poojaranjan19",
    github: "https://github.com/poojaranjan",
    image: "https://res.cloudinary.com/dyaohbtb4/image/upload/v1713873670/feedback/tdrj97b27o0no8rlpegd.png",
    role: "active"
  },
  {
    id: 2,
    name: "Hudson Jameson",
    description: "",
    twitter: "https://twitter.com/hudsonjameson",
    github: "",
    image: "https://res.cloudinary.com/dyaohbtb4/image/upload/v1713873748/feedback/booybjv7msms9hne0mg0.png",
    role: "active"
  },
  {
    id: 3,
    name: "georgeh",
    description: "",
    twitter: "https://x.com/georgeh0x",
    github: "https://github.com/geovgy",
    image: "https://avatars.githubusercontent.com/u/54918343?v=4",
    role: "active"
  },
  // {
  //   id: 3,
  //   name: "Tim beiko",
  //   description: "",
  //   twitter: "https://twitter.com/TimBeiko",
  //   github: "",
  //   image: "https://res.cloudinary.com/dyaohbtb4/image/upload/v1713873794/feedback/g89vvmbwo1ige6kotgc6.png",
  //   role: "active"
  // },
  // {
  //   id: 4,
  //   name: "Alita Moore",
  //   description: "Software engineer and Peep and EIP Interviewer",
  //   twitter: "",
  //   github: "https://github.com/alita-moore",
  //   image: "https://res.cloudinary.com/dyaohbtb4/image/upload/v1713873852/feedback/jc7otrqnzag00jpko62v.png",
  //   role: "active"
  // },
  // {
  //   id: 5,
  //   name: "William Schwab",
  //   description: "",
  //   twitter: "https://twitter.com/William94029369",
  //   github: "https://github.com/wschwab",
  //   image: "",
  //   role: "active"
  // },
  // {
  //   id: 6,
  //   name: "Brent Allsop",
  //   description: "Co-Founder of Canonizer. Software Engineer. Building and tracking consensus facilitator.",
  //   twitter: "https://twitter.com/Brent_Allsop",
  //   github: "https://github.com/BrentAllsop",
  //   image: "https://res.cloudinary.com/dyaohbtb4/image/upload/v1713873925/feedback/uwadyrkl0wbwssl6ekpw.png",
  //   role: "active"
  // },
  // {
  //   id: 7,
  //   name: "Edson Allyon",
  //   description: "Product Manager @dHedgeDAO. Software Engineer, Ethereum ecosystem contributor",
  //   twitter: "https://twitter.com/relativeread",
  //   github: "https://github.com/edsonayllon",
  //   image: "https://res.cloudinary.com/dyaohbtb4/image/upload/v1713873977/feedback/r4jl13xubhxovki0linc.jpg",
  //   role: "active"
  // },
  // {
  //   id: 9,
  //   name: "Charles St. Louis",
  //   description: "COO of Element Finance. MBA. Building and tracking consensus facilitator.",
  //   twitter: "https://twitter.com/CharlieStLouis",
  //   github: "https://github.com/CPSTL",
  //   image: "https://res.cloudinary.com/dyaohbtb4/image/upload/v1713874071/feedback/pnngb3yy3jpbj7fzgall.jpg",
  //   role: "active"
  // },
  // {
  //   id: 10,
  //   name: "Lane Rettig",
  //   description: "",
  //   twitter: "https://twitter.com/lrettig",
  //   github: "",
  //   image: "https://res.cloudinary.com/dyaohbtb4/image/upload/v1713874102/feedback/wo5lesm22w5j4q4xpy9n.jpg",
  //   role: "active"
  // },
  // {
  //   id: 11,
  //   name: "Shane Lightowler",
  //   description: "Ethereum enthusiast and Eulerbeats OG",
  //   twitter: "https://twitter.com/Coldsnap",
  //   github: "https://github.com/shanelightowler",
  //   image: "https://res.cloudinary.com/dyaohbtb4/image/upload/v1713874146/feedback/lbrh0nrse6omb6guiooj.png",
  //   role: "active"
  // },
  // {
  //   id: 12,
  //   name: "Joel Cahill",
  //   description: "Software Engineer",
  //   twitter: "https://twitter.com/jkcahill1",
  //   github: "https://github.com/jkcahill",
  //   image: "https://res.cloudinary.com/dyaohbtb4/image/upload/v1713874210/feedback/lgknfhfdkspxojuab2bt.jpg",
  //   role: "active"
  // },
  // {
  //   id: 13,
  //   name: "Santosh",
  //   description: "QA Analyst",
  //   twitter: "",
  //   github: "",
  //   image: "",
  //   role: "active"
  // },
  // {
  //   id: 14,
  //   name: "Kenneth Luster",
  //   description: "Enterprise Ethereum Developer",
  //   twitter: "https://twitter.com/KennethLuster1",
  //   github: "https://github.com/KenMan79",
  //   image: "",
  //   role: "active"
  // }
];

export default function MembersSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragStartIndex, setDragStartIndex] = useState(0);
  const [noFlip, setNoFlip] = useState(false);
  const [shouldUseSlider, setShouldUseSlider] = useState(false);
  const [allCardsFit, setAllCardsFit] = useState(false);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Filter out any undefined/null members (in case some are commented out)
  // This ensures dots match the actual displayed cards
  const allMembers = members.filter(member => member != null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check if cards fit properly in viewport - if not, use slider
  useEffect(() => {
    const checkIfCardsFit = () => {
      if (!isMounted || allMembers.length === 0) return;

      // Get viewport width
      const viewportWidth = window.innerWidth;
      const isLargeScreen = viewportWidth > 968;
      
      // If 4 or fewer cards on large screen, always use grid (no slider)
      if (allMembers.length <= 4 && isLargeScreen) {
        setShouldUseSlider(false);
        setAllCardsFit(true);
        setCurrentIndex(0);
        return;
      }

      // For 5 or fewer members, check if they fit
      if (allMembers.length <= 5) {
        // Card width varies by breakpoint - match CSS grid values
        let cardWidth = 280;
        let gap = 30;
        let containerPadding = 120; // Left and right padding (60px each)
        let maxContainerWidth = 1000; // Max width of grid container
        
        if (viewportWidth <= 600) {
          cardWidth = 280; // Single column on very small
          gap = 20;
          containerPadding = 40;
          maxContainerWidth = 300;
        } else if (viewportWidth <= 768) {
          cardWidth = 200;
          gap = 20;
          containerPadding = 60;
          maxContainerWidth = 500;
        } else if (viewportWidth <= 968) {
          cardWidth = 220;
          gap = 25;
          containerPadding = 80;
          maxContainerWidth = 600;
        } else if (viewportWidth <= 1200) {
          cardWidth = 240;
          gap = 25;
          containerPadding = 100;
          maxContainerWidth = 900;
        }
        
        // Use the smaller of viewport width or max container width
        const effectiveWidth = Math.min(viewportWidth, maxContainerWidth);
        const availableWidth = effectiveWidth - containerPadding;
        
        // Calculate how many cards can fit: (width + gap) / (cardWidth + gap)
        const cardsThatFit = Math.floor((availableWidth + gap) / (cardWidth + gap));
        
        // Check if all cards fit on screen
        const allFit = cardsThatFit >= allMembers.length;
        setAllCardsFit(allFit);
        
        // If all cards fit, reset to first card and don't use slider
        if (allFit) {
          setCurrentIndex(0);
          setShouldUseSlider(false);
        } else {
          // For 3 members: need exactly 3 cards to fit, otherwise use slider
          // For 4-5 members: need at least 2 cards to fit, otherwise use slider
          if (allMembers.length === 3) {
            // For 3 members, if less than 3 cards fit, use slider
            setShouldUseSlider(cardsThatFit < 3);
          } else if (allMembers.length <= 5) {
            // For 4-5 members, if less than 2 cards fit, use slider
            setShouldUseSlider(cardsThatFit < 2);
          }
        }
      } else {
        // More than 5 members, always use slider
        setShouldUseSlider(true);
      }
    };

    checkIfCardsFit();
    
    // Add resize listener with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkIfCardsFit, 150);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Check again after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(checkIfCardsFit, 200);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
      clearTimeout(resizeTimeout);
    };
  }, [isMounted, allMembers.length]);

  // Calculate card width including gap
  const getCardWidth = () => {
    if (!trackRef.current) return 280;
    const cards = trackRef.current.querySelectorAll('.member-card-wrapper');
    if (cards.length === 0) return 280;
    const card = cards[0] as HTMLElement;
    const cardWidth = card.offsetWidth;
    const gap = 30; // Fixed gap value
    return cardWidth + gap;
  };

  // Calculate how many cards can fit in the container - ensure no cards are cut
  const getCardsToShow = () => {
    if (!sliderRef.current) return 4;
    
    const container = sliderRef.current.querySelector('.members-slider-container') as HTMLElement;
    if (!container) return 4;
    
    const cardWidth = 280; // Fixed card width
    const gap = 30;
    
    // Get available width (clientWidth excludes padding and border)
    const containerWidth = container.clientWidth;
    
    // Calculate how many full cards can fit without cutting
    // Formula: (containerWidth + gap) / (cardWidth + gap) gives us how many cards fit
    const cardsToShow = Math.floor((containerWidth + gap) / (cardWidth + gap));
    
    // Return at least 1, at most 4 (or totalCards if less than 4)
    // But ensure we don't show more than what fits
    return Math.min(Math.max(1, cardsToShow), Math.min(4, allMembers.length));
  };

  // Calculate offset to show full cards only, moving one card at a time
  const calculateOffset = (index: number) => {
    if (!trackRef.current || !sliderRef.current) return 0;
    const cards = trackRef.current.querySelectorAll('.member-card-wrapper');
    if (cards.length === 0) return 0;
    
    const container = sliderRef.current.querySelector('.members-slider-container') as HTMLElement;
    if (!container) return 0;
    
    const card = cards[0] as HTMLElement;
    const cardWidth = card.offsetWidth;
    const gap = 30;
    const cardWithGap = cardWidth + gap;
    
    const cardsToShow = getCardsToShow();
    const maxIndex = Math.max(0, allMembers.length - cardsToShow);
    const adjustedIndex = Math.min(Math.max(0, index), maxIndex);
    
    // If all cards fit, center them
    if (allCardsFit) {
      const containerWidth = container.clientWidth;
      const totalCardsWidth = (allMembers.length * cardWidth) + ((allMembers.length - 1) * gap);
      const centerOffset = (containerWidth - totalCardsWidth) / 2;
      return centerOffset;
    }
    
    // If not all cards fit, center the visible group
    const containerWidth = container.clientWidth;
    const visibleCardsWidth = (cardsToShow * cardWidth) + ((cardsToShow - 1) * gap);
    const centerOffset = (containerWidth - visibleCardsWidth) / 2;
    
    return centerOffset - (adjustedIndex * cardWithGap);
  };

  // Move slider to specific index - move one card at a time
  const goToSlide = (index: number) => {
    // Don't navigate if all cards fit
    if (allCardsFit) return;
    
    const cardsToShow = getCardsToShow();
    const maxIndex = Math.max(0, allMembers.length - cardsToShow);
    
    let newIndex = index;
    if (newIndex < 0) {
      newIndex = maxIndex;
    } else if (newIndex > maxIndex) {
      newIndex = 0;
    }
    
    setCurrentIndex(newIndex);
    if (trackRef.current) {
      const offset = calculateOffset(newIndex);
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
    resetAutoSlide();
  };

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setDragStartIndex(currentIndex);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current || !sliderRef.current) return;
    e.preventDefault();
    
    const cards = trackRef.current.querySelectorAll('.member-card-wrapper');
    if (cards.length === 0) return;
    
    const card = cards[0] as HTMLElement;
    const cardWidth = card.offsetWidth;
    const gap = 30;
    const cardWithGap = cardWidth + gap;
    
    const walk = e.pageX - startX;
    const cardsMoved = walk / cardWithGap;
    const newIndex = Math.max(0, Math.min(allMembers.length - getCardsToShow(), dragStartIndex - cardsMoved));
    
    setCurrentIndex(newIndex);
    const offset = calculateOffset(newIndex);
    trackRef.current.style.transform = `translateX(${offset}px)`;
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setCurrentIndex(Math.round(currentIndex));
      if (trackRef.current) {
        const offset = calculateOffset(Math.round(currentIndex));
        trackRef.current.style.transform = `translateX(${offset}px)`;
      }
    }
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setCurrentIndex(Math.round(currentIndex));
      if (trackRef.current) {
        const offset = calculateOffset(Math.round(currentIndex));
        trackRef.current.style.transform = `translateX(${offset}px)`;
      }
    }
    setIsDragging(false);
    setIsPaused(false);
  };

  // Auto-slide functionality
  const startAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    autoSlideIntervalRef.current = setInterval(() => {
      if (!isPaused) {
        goToSlide(currentIndex + 1);
      }
    }, 4000);
  };

  const resetAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    startAutoSlide();
  };

  const pauseAutoSlide = () => {
    setIsPaused(true);
  };

  const resumeAutoSlide = () => {
    setIsPaused(false);
  };

  // Auto-slide effect - only if not all cards fit
  useEffect(() => {
    if (!isMounted || allCardsFit) return;
    startAutoSlide();
    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [isMounted, currentIndex, isPaused, allCardsFit]);

  // Handle window resize - recalculate to ensure cards don't get cut
  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        const cardsToShow = getCardsToShow();
        const maxIndex = Math.max(0, allMembers.length - cardsToShow);
        const newIndex = Math.min(currentIndex, maxIndex);
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        } else {
          goToSlide(currentIndex);
        }
      }, 250);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, allMembers.length]);

  // Update transform on currentIndex change or when allCardsFit changes
  useEffect(() => {
    if (trackRef.current && isMounted && !isDragging) {
      const offset = calculateOffset(currentIndex);
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex, isMounted, isDragging, allCardsFit]);

  if (!isMounted) {
    return null;
  }

  // Render member card component
  const renderMemberCard = (member: Member, index: number) => (
            <div key={`${member.id}-${index}`} className="member-card-wrapper">
              <div className="member-card">
                <div className="member-card-front">
                  {member.image ? (
                    <div className="member-image">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="member-image-img"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="member-image">
                      <div className="member-placeholder">
                        {member.name.charAt(0).toUpperCase()}
                      </div>
                    </div>
                  )}
                  <div className="member-name">{member.name}</div>
                </div>
                <div className="member-card-back">
                  <h3 className="member-back-name">{member.name}</h3>
                  {member.description && (
                    <p className="member-back-info">{member.description}</p>
                  )}
                  <div className="member-social-links">
                    {member.twitter && (
                      <Link
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="member-twitter-link"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span>Follow on Twitter</span>
                      </Link>
                    )}
                    {member.github && (
                      <Link
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="member-github-link"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>View on GitHub</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
  );

  // Show grid layout if 4 or fewer cards on large screen, otherwise show slider
  if (!shouldUseSlider && allMembers.length <= 4) {
    return (
      <div className="members-slider-section">
        {/* Section Header */}
        <div className="members-slider-header">
          <h2 className="members-slider-title">Our Team</h2>
          <p className="members-slider-subtitle">
            Meet the dedicated team members who drive ECH Institute&apos;s mission forward.
          </p>
        </div>

        {/* Grid Layout for 4 or fewer cards on large screen */}
        <div ref={gridContainerRef} className="members-grid-container">
          {allMembers.map((member, index) => renderMemberCard(member, index))}
        </div>
      </div>
    );
  }

  // Show slider structure for more than 4 cards or when cards don't fit
  return (
    <div className="members-slider-section">
      {/* Section Header */}
      <div className="members-slider-header">
        <h2 className="members-slider-title">Our Team</h2>
        <p className="members-slider-subtitle">
          Meet the dedicated team members who drive ECH Institute&apos;s mission forward.
        </p>
      </div>

      <div 
        ref={sliderRef}
        className={`members-slider-wrapper ${noFlip ? 'no-flip' : ''}`}
        onMouseEnter={allCardsFit ? undefined : pauseAutoSlide}
        onMouseLeave={allCardsFit ? undefined : resumeAutoSlide}
      >
        {/* Arrow Buttons - Only show if not all cards fit */}
        {!allCardsFit && (
          <>
            <button 
              className="members-arrow members-arrow-left" 
              aria-label="Previous member"
              onClick={() => goToSlide(currentIndex - 1)}
              onMouseEnter={() => setNoFlip(true)}
              onMouseLeave={() => setNoFlip(false)}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="members-arrow members-arrow-right" 
              aria-label="Next member"
              onClick={() => goToSlide(currentIndex + 1)}
              onMouseEnter={() => setNoFlip(true)}
              onMouseLeave={() => setNoFlip(false)}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

      {/* Slider Container */}
      <div 
        className="members-slider-container"
        onMouseDown={allCardsFit ? undefined : handleMouseDown}
        onMouseMove={allCardsFit ? undefined : handleMouseMove}
        onMouseUp={allCardsFit ? undefined : handleMouseUp}
        onMouseLeave={allCardsFit ? undefined : handleMouseLeave}
        style={{ cursor: allCardsFit ? 'default' : (isDragging ? 'grabbing' : 'grab') }}
      >
        <div 
          ref={trackRef}
          className="members-slider-track"
          style={{
            transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          {allMembers.map((member, index) => renderMemberCard(member, index))}
        </div>
      </div>

      {/* Dot Navigation - Only show if not all cards fit */}
      {!allCardsFit && (
      <div className="members-dots">
        {allMembers.map((member, index) => (
          <button
            key={member.id}
            className={`members-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setNoFlip(true)}
            onMouseLeave={() => setNoFlip(false)}
            aria-label={`Go to ${member.name}`}
          />
        ))}
      </div>
      )}
    </div>
    </div>
  );
}
