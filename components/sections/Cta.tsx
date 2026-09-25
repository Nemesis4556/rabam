"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

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

// Hafif fade-up. Gecikme, butonların kendisine değil sarmalayıcıya verilir; böylece
// hover geçişleri gecikmeden çalışır.
const fadeUp = (show: boolean) =>
  `transition-all duration-700 ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

export default function Cta() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);

  return (
    <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Koyu CTA alanı — kırmızı sadece aksan olarak kullanılıyor */}
        <div
          ref={ref}
          className="relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container px-5 py-16 sm:px-10 lg:px-16 lg:py-24 text-center flex flex-col items-center"
        >
          {/* Arka planda çok hafif kırmızı glow — düz kırmızı blok yerine derinlik */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]"
          />
          {/* İnce üst çizgi — diğer bölümlerdeki kırmızı vurgu çizgisiyle tutarlı */}
          <span
            aria-hidden="true"
            className={`relative block h-1 w-12 bg-primary mb-8 ${fadeUp(inView)}`}
          />

          <h2
            className={`relative font-display-xl font-extrabold text-white text-[clamp(1.75rem,8.6vw,2.75rem)] leading-[1.05] tracking-[-0.02em] lg:text-display-xl ${fadeUp(
              inView
            )}`}
          >
            <span className="block">ANTRENMANA</span>
            <span className="block">
              BUGÜN <span className="text-primary">BAŞLA.</span>
            </span>
          </h2>

          <p
            className={`relative font-body-lg text-body-lg text-on-surface-variant max-w-xl mt-8 delay-100 ${fadeUp(
              inView
            )}`}
          >
            RABAM Fitness Club hakkında bilgi almak ve üyelik seçeneklerini öğrenmek için
            bizimle iletişime geç.
          </p>

          {/* Butonlar */}
          <div className={`relative w-full mt-10 delay-200 ${fadeUp(inView)}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://wa.me/905000000000?text=Merhaba,%20Rabam%20Fitness%20Club%20üyelik%20bilgisi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-md bg-primary text-white whitespace-nowrap text-[13px] sm:text-[14px] font-bold tracking-[0.04em] sm:tracking-[0.06em] px-5 sm:px-8 py-4 transition-colors duration-200 hover:bg-white hover:text-surface-container-lowest"
              >
                <Icon name="chat" width={20} height={20} />
                <span>WHATSAPP&rsquo;TAN BİLGİ AL</span>
              </a>
              <a
                href="#iletisim"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-outline text-white whitespace-nowrap text-[13px] sm:text-[14px] font-bold tracking-[0.04em] sm:tracking-[0.06em] px-5 sm:px-8 py-4 transition-colors duration-200 hover:border-white hover:bg-white/5"
              >
                İLETİŞİME GEÇ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
