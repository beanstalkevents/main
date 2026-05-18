"use client";

import { useEffect, useRef, useState } from "react";

type Card = {
  key: string;
  name: string;
  title: string;
  poster?: string;
  videoSrc?: string;
  quote?: string;
};

// Alternating order: video, photo, video, photo, ...
const CARDS: Card[] = [
  {
    key: "harley",
    name: "Harley Finkelstein",
    title: "President at Shopify",
    videoSrc: "/videos/harley.mp4",
    poster:
      "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/7ad6e934-c441-43b6-93cc-d9c7ed679740/10.jpg",
  },
  {
    key: "bruce",
    name: "Bruce Smith",
    title: "Founder at Hydrow",
    quote:
      "The best event of the year. Their team does an amazing job curating attendees to make sure that everyone attending brings real value to the table.",
    poster:
      "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/4b24074c-cd3c-4474-8012-08ef13e4415c/6.jpg",
  },
  {
    key: "hillary",
    name: "Hillary Peterson",
    title: "Founder of True Botanicals",
    videoSrc: "/videos/hillary.mp4",
  },
  {
    key: "olivia",
    name: "Olivia Kory",
    title: "Chief Strategy Officer at Haus",
    quote:
      "I haven't been this excited for a non-Haus hosted event in… ever. Not sure how they managed to get such an amazing list of brands and attendees.",
    poster:
      "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/120763b9-7f08-4cfe-817e-dddeb7e0437b/8.jpg",
  },
  {
    key: "larry",
    name: "Larry Fitzgerald Jr.",
    title: "NFL All-Pro Wide Receiver & Investor",
    videoSrc: "/videos/larry.mp4",
    poster:
      "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/8321852d-8819-41ad-9cb6-127666961b69/7.jpg",
  },
  {
    key: "charles",
    name: "Charles Liu",
    title: "COO at Conair",
    quote:
      "These were truly amazing events that united brands and service providers to exchange best practices and spark ideas for taking things to the next level.",
    poster: "/headshots/charles.jpg",
  },
  {
    key: "sean",
    name: "Sean Frank",
    title: "CEO at Ridge",
    videoSrc: "/videos/sean.mp4",
    poster:
      "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/1dd91b30-e453-45dc-8d83-97d1a271aa60/4.jpg",
  },
  {
    key: "paul",
    name: "Paul Yeh",
    title: "Co-Founder & Partner at Conductive VC",
    quote:
      "What an amazing conference with super high quality attendees. I am going to RSVP for next year as soon as registration opens!",
    poster:
      "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/9d5544e9-9a9e-4635-9e8a-018f55d25718/9.jpg",
  },
  {
    key: "hudson",
    name: "Hudson Leogrande",
    title: "Founder at CMFRT",
    videoSrc: "/videos/hudson.mp4",
  },
  {
    key: "andrei",
    name: "Andrei Rebrov",
    title: "Co-Founder at Scentbird and Finsi",
    quote:
      "Beanstalk was truly a blast. For me it was the best event of the year — caliber of people, diversity in roles, and good dynamics with 1:1 meetings and table talks.",
    poster: "/headshots/andrei.jpg",
  },
  {
    key: "steven",
    name: "Steven Borrelli",
    title: "CEO at CUTS",
    videoSrc: "/videos/steven.mp4",
  },
];

const CARD_W = 260;
const CARD_H = Math.round(CARD_W * (16 / 9));

function CardEl({
  card,
  unmutedKey,
  onUnmuteToggle,
  registerVideo,
  activeKey,
  onCardClick,
}: {
  card: Card;
  unmutedKey: string | null;
  onUnmuteToggle: (key: string) => void;
  registerVideo: (key: string, el: HTMLVideoElement | null) => void;
  activeKey: string | null;
  onCardClick: (key: string) => void;
}) {
  const isUnmuted = unmutedKey === card.key;
  const isActive = activeKey === card.key;
  const isDimmed = activeKey !== null && !isActive;
  return (
    <div
      data-card-key={card.key}
      onClick={() => onCardClick(card.key)}
      style={{
        position: "relative",
        flexShrink: 0,
        width: `${CARD_W}px`,
        height: `${CARD_H}px`,
        borderRadius: "20px",
        overflow: "hidden",
        background: "#1f1f1f",
        boxShadow: isActive
          ? "0 24px 50px rgba(0,0,0,0.35)"
          : "0 8px 24px rgba(0,0,0,0.18)",
        transition:
          "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease, filter 0.35s ease, box-shadow 0.35s ease",
        transform: isActive ? "scale(1.06)" : "scale(1)",
        opacity: isDimmed ? 0.32 : 1,
        filter: isDimmed ? "grayscale(60%) brightness(0.6)" : "none",
        zIndex: isActive ? 5 : 1,
        cursor: "pointer",
      }}
    >
      {card.poster && !card.videoSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={card.poster}
          alt={card.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      )}

      {card.videoSrc && (
        <video
          ref={(el) => registerVideo(card.key, el)}
          src={card.videoSrc}
          poster={card.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {card.quote && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 22px",
            background:
              "linear-gradient(180deg, rgba(35,60,54,0.45) 0%, rgba(35,60,54,0.65) 60%, rgba(20,20,20,0.92) 100%)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
              fontStyle: "italic",
              color: "#fcf9ec",
              fontSize: "14px",
              lineHeight: 1.5,
              textAlign: "center",
              textShadow: "0 1px 4px rgba(0,0,0,0.6)",
            }}
          >
            &ldquo;{card.quote}&rdquo;
          </p>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "60px 18px 18px",
          background:
            "linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(20,20,20,0.85) 70%, rgba(20,20,20,0.95) 100%)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontWeight: 700,
            color: "#cdf765",
            fontSize: "16px",
            lineHeight: 1.2,
            marginBottom: "3px",
          }}
        >
          {card.name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
            color: "#ffffff",
            fontSize: "12px",
            opacity: 0.88,
            lineHeight: 1.3,
          }}
        >
          {card.title}
        </div>
      </div>

      {card.videoSrc && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onUnmuteToggle(card.key);
          }}
          aria-label={isUnmuted ? "Mute" : "Unmute"}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "36px",
            height: "36px",
            borderRadius: "999px",
            background: "rgba(20,20,20,0.7)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fcf9ec",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          {isUnmuted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}

const SPEED = 0.04; // px per ms — drift speed when idle

export default function Testimonials() {
  const [unmutedKey, setUnmutedKey] = useState<string | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement[]>>({});
  const outerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragMovedRef = useRef(false);
  const activeKeyRef = useRef<string | null>(null);
  activeKeyRef.current = activeKey;
  const posRef = useRef(0);
  const targetPosRef = useRef<number | null>(null);
  const halfRef = useRef(0);

  const registerVideo = (key: string, el: HTMLVideoElement | null) => {
    if (!videoRefs.current[key]) videoRefs.current[key] = [];
    if (el && !videoRefs.current[key].includes(el)) {
      videoRefs.current[key].push(el);
    }
  };

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([key, list]) => {
      list.forEach((v) => {
        v.muted = key !== unmutedKey;
      });
    });
  }, [unmutedKey]);

  const handleUnmuteToggle = (key: string) => {
    setUnmutedKey((current) => (current === key ? null : key));
  };

  // Auto-scroll engine: rAF-driven transform with drag/touch/wheel input.
  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    let pos = posRef.current;
    let vel = 0;
    let lastTime: number | null = null;
    let isDragging = false;
    let isSwiping = false;
    let isHovered = false;
    let dragLastX = 0;
    let dragLastT = 0;
    let touchLastX = 0;
    let touchLastT = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchIsHoriz: boolean | null = null;
    let rafId = 0;

    const getHalf = () => track.scrollWidth / 2;
    const wrap = (p: number) => {
      const h = getHalf();
      if (h <= 0) return p;
      p = p % h;
      if (p < 0) p += h;
      return p;
    };

    const tick = (ts: number) => {
      if (lastTime === null) lastTime = ts;
      const dt = Math.min(ts - lastTime, 50);
      lastTime = ts;
      halfRef.current = getHalf();
      const interacting = isDragging || isSwiping;
      const pinned = isHovered || activeKeyRef.current !== null;
      const target = targetPosRef.current;
      if (target !== null && !interacting) {
        // tween toward target along shortest wrap path
        const h = halfRef.current;
        let delta = target - pos;
        if (h > 0) {
          if (delta > h / 2) delta -= h;
          else if (delta < -h / 2) delta += h;
        }
        const step = delta * Math.min(1, dt / 220);
        pos = wrap(pos + step);
        vel = 0;
        if (Math.abs(delta) < 0.5) {
          pos = wrap(target);
          targetPosRef.current = null;
        }
      } else {
        if (!interacting && !pinned) {
          pos = wrap(pos + SPEED * dt);
        }
        if (!interacting && Math.abs(vel) > 0.005) {
          pos = wrap(pos + vel * dt);
          vel *= Math.pow(0.9, dt / 16);
          if (Math.abs(vel) <= 0.005) vel = 0;
        }
      }
      posRef.current = pos;
      track.style.transform = `translateX(${-pos}px)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onMouseEnter = () => {
      isHovered = true;
    };
    const onMouseLeave = () => {
      isHovered = false;
      lastTime = null;
    };
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      vel = 0;
      dragMovedRef.current = false;
      dragLastX = e.clientX;
      dragLastT = performance.now();
      outer.style.cursor = "grabbing";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const now = performance.now();
      const dx = dragLastX - e.clientX;
      if (Math.abs(dx) > 2) dragMovedRef.current = true;
      vel = dx / Math.max(now - dragLastT, 1);
      pos = wrap(pos + dx);
      dragLastX = e.clientX;
      dragLastT = now;
    };
    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      outer.style.cursor = "grab";
    };

    const onTouchStart = (e: TouchEvent) => {
      vel = 0;
      touchIsHoriz = null;
      touchStartX = touchLastX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchLastT = performance.now();
    };
    const onTouchMove = (e: TouchEvent) => {
      const cx = e.touches[0].clientX;
      const cy = e.touches[0].clientY;
      if (
        touchIsHoriz === null &&
        (Math.abs(cx - touchStartX) > 5 || Math.abs(cy - touchStartY) > 5)
      ) {
        touchIsHoriz = Math.abs(cx - touchStartX) > Math.abs(cy - touchStartY);
        if (touchIsHoriz) isSwiping = true;
      }
      if (!isSwiping) return;
      const now = performance.now();
      const dx = touchLastX - cx;
      vel = dx / Math.max(now - touchLastT, 1);
      pos = wrap(pos + dx);
      touchLastX = cx;
      touchLastT = now;
    };
    const onTouchEnd = () => {
      isSwiping = false;
      touchIsHoriz = null;
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
      e.preventDefault();
      pos = wrap(pos + e.deltaX);
      vel = 0;
    };

    const onDocClick = (e: MouseEvent) => {
      if (!activeKeyRef.current) return;
      const target = e.target as HTMLElement;
      if (!target.closest("[data-card-key]")) {
        setActiveKey(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveKey(null);
    };

    outer.style.cursor = "grab";
    outer.addEventListener("mouseenter", onMouseEnter);
    outer.addEventListener("mouseleave", onMouseLeave);
    outer.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    outer.addEventListener("touchstart", onTouchStart, { passive: true });
    outer.addEventListener("touchmove", onTouchMove, { passive: true });
    outer.addEventListener("touchend", onTouchEnd, { passive: true });
    outer.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(rafId);
      outer.removeEventListener("mouseenter", onMouseEnter);
      outer.removeEventListener("mouseleave", onMouseLeave);
      outer.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      outer.removeEventListener("touchstart", onTouchStart);
      outer.removeEventListener("touchmove", onTouchMove);
      outer.removeEventListener("touchend", onTouchEnd);
      outer.removeEventListener("wheel", onWheel);
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleCardClick = (key: string) => {
    if (dragMovedRef.current) {
      dragMovedRef.current = false;
      return;
    }
    setActiveKey((current) => {
      const next = current === key ? null : key;
      if (next) snapToCard(next);
      return next;
    });
  };

  const snapToCard = (key: string) => {
    const outer = outerRef.current;
    if (!outer) return;
    const candidates = Array.from(
      outer.querySelectorAll(`[data-card-key="${key}"]`)
    ) as HTMLElement[];
    if (candidates.length === 0) return;
    const outerRect = outer.getBoundingClientRect();
    const outerCenter = outerRect.left + outerRect.width / 2;
    // pick the candidate whose current center is closest to viewport center
    let bestEl: HTMLElement | null = null;
    let bestDist = Infinity;
    candidates.forEach((el) => {
      const r = el.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const d = Math.abs(c - outerCenter);
      if (d < bestDist) {
        bestDist = d;
        bestEl = el;
      }
    });
    if (!bestEl) return;
    const r = (bestEl as HTMLElement).getBoundingClientRect();
    const cardCenter = r.left + r.width / 2;
    const delta = cardCenter - outerCenter;
    const h = halfRef.current || 1;
    const target = ((posRef.current + delta) % h + h) % h;
    targetPosRef.current = target;
  };

  const loop = [...CARDS, ...CARDS];

  return (
    <section style={{ background: "var(--cream)" }}>
      <div className="max-w-content mx-auto px-6 md:px-12 pt-16 pb-2">
        <div className="section-label">Social proof</div>
        <h2
          style={{
            fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "#233c36",
            lineHeight: 1.1,
          }}
        >
          What are people saying about Beanstalk?
        </h2>
      </div>

      <div
        ref={outerRef}
        style={{
          overflow: "hidden",
          padding: "32px 0 64px",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "20px",
            width: "max-content",
            paddingLeft: "20px",
            willChange: "transform",
          }}
        >
          {loop.map((c, i) => (
            <CardEl
              key={`${c.key}-${i}`}
              card={c}
              unmutedKey={unmutedKey}
              onUnmuteToggle={handleUnmuteToggle}
              registerVideo={registerVideo}
              activeKey={activeKey}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
