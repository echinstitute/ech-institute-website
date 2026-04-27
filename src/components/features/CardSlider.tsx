'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  id: number;
  name: string;
  image: string;
  message: string;
  twitter?: string;
}

const cards: Card[] = [
  {
    id: 1,
    name: 'Tim Beiko',
    image: 'https://pbs.twimg.com/profile_images/1082093593840349184/P2B7Qiyn_400x400.jpg',
    message: 'Wanted to share I think ECH Institute is awesome: they help make ACD and other things accessible to more folks with transcripts, blog posts, and video series.',
    twitter: 'https://twitter.com/TimBeiko',
  },
  {
    id: 2,
    name: 'Udi Wertheimer',
    image: '/assets/profiles/udi.png',
    message: 'You guys are doing a great job with the ECH Institute so keep doing it. It\'s really cool.',
    twitter: 'https://twitter.com/udiWertheimer',
  },
  {
    id: 3,
    name: 'Auryn Macmillan',
    image: '/assets/profiles/auryn.png',
    message: 'clrfunds - "Really appreciate all of your effort to wrangle the community."',
    twitter: 'https://twitter.com/auryn_macmillan',
  },
  {
    id: 4,
    name: 'Scott Moore',
    image: '/assets/profiles/scott.png',
    message: 'Gitcoin - "Very glad you\'re all still out doing this!"',
    twitter: 'https://twitter.com/notscottmoore',
  },
  {
    id: 5,
    name: 'Griff Green',
    image: '/assets/profiles/griff.png',
    message: 'Givethio - "Love you ECH Institute! Keep up the great work!"',
    twitter: 'https://twitter.com/thegrifft',
  },
  {
    id: 6,
    name: 'Sam Richard',
    image: '/assets/profiles/sam.png',
    message: 'ethereum.org - "Keep up the great work!"',
    twitter: 'https://twitter.com/samonchain',
  },
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const totalCards = cards.length;

  // Check screen size after mount to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalCards);
      }, 3000);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, totalCards]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const targetCard = track.children[currentIndex] as HTMLElement | undefined;

    if (!targetCard) {
      return;
    }

    track.scrollTo({
      left: targetCard.offsetLeft,
      behavior: 'smooth',
    });
  }, [currentIndex, isLargeScreen]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const totalDots = totalCards;
  const actualIndex = currentIndex;

  // Don't render slider content until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div className="card-slider-wrapper">
        <div className="card-slider-container">
          <div className="card-slider-header">
            <h2 className="card-slider-title">What People Say</h2>
            <div className="card-slider-controls">
              <button
                className="card-slider-nav-btn"
                aria-label="Previous card"
                disabled
              >
                <ChevronLeft className="card-slider-nav-icon" />
              </button>
              <button
                className="card-slider-nav-btn"
                aria-label="Next card"
                disabled
              >
                <ChevronRight className="card-slider-nav-icon" />
              </button>
            </div>
          </div>
          <div className="card-slider-track-container card-slider-track-container--scroll">
            <div className="card-slider-track" ref={trackRef}>
              {cards.map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className="card-slider-item"
                >
                  <div className="card-slider-card">
                    <div className="card-slider-image-wrapper">
                      <img 
                        src={card.image} 
                        alt={card.name}
                        className="card-slider-image"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/logo/cat_head.png';
                        }}
                      />
                    </div>
                    <div className="card-slider-content">
                      {card.twitter ? (
                        <a 
                          href={card.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="card-slider-name-link"
                        >
                          <h3 className="card-slider-name">{card.name}</h3>
                        </a>
                      ) : (
                        <h3 className="card-slider-name">{card.name}</h3>
                      )}
                      <p className="card-slider-message">{card.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-slider-dots">
            {Array.from({ length: totalCards }).map((_, index) => (
              <button
                key={index}
                className="card-slider-dot"
                aria-label={`Go to slide ${index + 1}`}
                disabled
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-slider-wrapper">
      <div className="card-slider-container">
        {/* Header with Title and Arrows */}
        <div className="card-slider-header">
          <h2 className="card-slider-title">What People Say</h2>
          <div className="card-slider-controls">
            <button
              onClick={prevSlide}
              className="card-slider-nav-btn"
              aria-label="Previous card"
            >
              <ChevronLeft className="card-slider-nav-icon" />
            </button>
            <button
              onClick={nextSlide}
              className="card-slider-nav-btn"
              aria-label="Next card"
            >
              <ChevronRight className="card-slider-nav-icon" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          className="card-slider-track-container"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <div
            className="card-slider-track"
            ref={trackRef}
          >
            {cards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="card-slider-item"
              >
                <div className="card-slider-card">
                  <div className="card-slider-image-wrapper">
                    <img 
                      src={card.image} 
                      alt={card.name}
                      className="card-slider-image"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/logo/cat_head.png';
                      }}
                    />
                  </div>
                  <div className="card-slider-content">
                    {card.twitter ? (
                      <a 
                        href={card.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="card-slider-name-link"
                      >
                        <h3 className="card-slider-name">{card.name}</h3>
                      </a>
                    ) : (
                      <h3 className="card-slider-name">{card.name}</h3>
                    )}
                    <p className="card-slider-message">{card.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="card-slider-dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`card-slider-dot ${index === actualIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
