"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

// Her avantaj: ikon + başlık + kısa açıklama. Metinleri buradan değiştirebilirsin.
const ADVANTAGES = [
  {
    icon: "equipment",
    title: "MODERN EKİPMAN",
    desc: "Geniş antrenman alanı.",
  },
  {
    icon: "clean",
    title: "TEMİZ VE DÜZENLİ",
    desc: "Konforlu antrenman ortamı.",
  },
  {
    icon: "person",
    title: "KİŞİSEL DESTEK",
    desc: "İhtiyaca göre antrenman yaklaşımı.",
  },
  {
    icon: "schedule",
    title: "GENİŞ SAATLER",
    desc: "Günlük rutine uygun çalışma saatleri.",
  },
  {
    icon: "location",
    title: "AKHİSAR",
    desc: "Yerel ve ulaşılabilir fitness deneyimi.",
  },
] as const;

type AdvantageIcon = (typeof ADVANTAGES)[number]["icon"];

// Ortak Icon setinde olmayan iki ikon burada, aynı çizgi stiliyle (1.6 px, yuvarlak uçlu).
const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  width: 22,
  height: 22,
};

function AdvantageIconGlyph({ name }: { name: AdvantageIcon }) {
  switch (name) {
    case "equipment": // dambıl
      return (
        <svg {...svgProps}>
          <path d="M6.5 5v14M17.5 5v14M3 9v6M21 9v6M6.5 12h11" />
        </svg>
      );
    case "clean": // parıltı
      return (
        <svg {...svgProps}>
          <path d="M11 3l2 5.5 5.5 2-5.5 2-2 5.5-2-5.5-5.5-2 5.5-2L11 3z" />
          <path d="M19 16v4.5M16.75 18.25h4.5" />
        </svg>
      );
    default:
      return <Icon name={name} width={22} height={22} />;
  }
}

// Element ekrana ilk kez girdiğinde bir kez `true` olur (animasyon tekrar etmez).
function useInView<T extends HTMLElement>(threshold: number) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

// Aynı satırdaki avantajlar soldan sağa çok kısa aralıkla belirir.
// (Mobilde tek kolon: gecikme yok. Tablet: 2 kolon. Masaüstü: 5 kolon.)
const STAGGER = [
  "",
  "md:delay-100",
  "lg:delay-200",
  "md:delay-100 lg:delay-300",
  "lg:delay-[400ms]",
];

const fadeUp = (show: boolean) =>
  `transition-all duration-700 ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

function AdvantageItem({
  item,
  index,
}: {
  item: (typeof ADVANTAGES)[number];
  index: number;
}) {
  const [ref, inView] = useInView<HTMLLIElement>(0.3);

  return (
    <li
      ref={ref}
      className={`group flex items-start gap-5 lg:flex-col lg:gap-6 ${STAGGER[index]} ${fadeUp(
        inView
      )}`}
    >
      {/* Küçük ikon — hover'da yalnızca renk geçişi */}
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-on-surface-variant transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
        <AdvantageIconGlyph name={item.icon} />
      </span>

      <div>
        <h3 className="text-[15px] font-bold tracking-[0.04em] text-white">
          {item.title}
        </h3>
        <p className="mt-2 text-[14px] leading-[22px] text-on-surface-variant">
          {item.desc}
        </p>
      </div>
    </li>
  );
}

export default function WhyRabam() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.3);

  return (
    <section className="w-full bg-surface-container-low py-24 lg:py-32" id="neden-rabam">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className={`mb-12 lg:mb-16 ${fadeUp(headerInView)}`}>
          <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-white leading-[1.05]">
            NEDEN RABAM?
          </h2>
          <p className="font-body-lg text-body-lg text-secondary mt-4 max-w-2xl">
            Akhisar&apos;da rahat ve düzenli bir ortamda, hedefine uygun antrenman yap.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 border-t border-white/10 pt-10 lg:pt-14">
          {ADVANTAGES.map((a, i) => (
            <AdvantageItem key={a.title} item={a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
