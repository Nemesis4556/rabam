"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

// ---------------------------------------------------------------------------
// İLETİŞİM BİLGİLERİ — mevcut projedeki bilgiler aynen korunmuştur.
// Değiştirmek için yalnızca bu bölümü düzenlemen yeterli.
// ---------------------------------------------------------------------------
const PHONE_DISPLAY = "+90 (236) 000 00 00";
const PHONE_HREF = "tel:+902360000000";
const WHATSAPP_HREF =
  "https://wa.me/905000000000?text=Merhaba,%20Rabam%20Fitness%20Club%20üyelik%20bilgisi%20almak%20istiyorum.";
const INSTAGRAM_HANDLE = "@rabamfitness";
const INSTAGRAM_HREF = "https://instagram.com/rabamfitness";
const ADDRESS = "Hürriyet Mahallesi, Akhisar / Manisa";
const MAPS_HREF = "https://maps.google.com/?q=Akhisar+Manisa";
const HOURS = [
  { label: "Hafta İçi", value: "07:00 — 23:00" },
  { label: "Cumartesi", value: "09:00 — 22:00" },
  { label: "Pazar", value: "10:00 — 20:00" },
];

// Harita görseli — gerçek bir harita ekran görüntüsü / Google Maps gömmesi
// hazır olduğunda yalnızca bu iki satırı değiştirmen yeterli.
const MAP_IMAGE_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjmYlGW-IaZoV7NmkwWT1ImGXHIhfLfmKffGR0ILz6IyymXnNj-372s_0QCYtOLFoxzeRIMJW-0tIhZxfzNghpsq9wyh-EhAes50VVsHe7HxiJJxZKLo1momg5tHEjUtm2xPCEsko5p9wIrRUmQxPfKSgyYI10EfLpbW1Hy56VTMuCwVDtC9M-OVcahTwB8GQrILBWrwlu7Swq9woqOiaLfh6tzXPT-2njoPEj_LhF6SwpozS0u6cRXg";
const MAP_IMAGE_ALT = "Hürriyet Mahallesi, Akhisar Manisa koyu tonlu stilize harita görünümü";

// Telefon numarası henüz gerçek değilse (000 000 gibi yer tutucu) satır tıklanabilir
// bir arama bağlantısı olarak SUNULMAZ; soluk gösterilir. Gerçek numarayı yukarıdaki
// PHONE_DISPLAY / PHONE_HREF'e yazdığında satır otomatik olarak dokunulabilir hâle gelir.
const PHONE_IS_PLACEHOLDER = /0{6,}/.test(PHONE_HREF.replace(/\D/g, ""));

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

// Çok hafif fade-up. Gecikme sarmalayıcıya verilir; hover geçişleri gecikmesiz kalır.
const fadeUp = (show: boolean) =>
  `transition-all duration-700 ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
  }`;

// Satır iskeleti: mobilde etiket üstte / değer altta, sm ve üstünde yan yana.
const ROW = "flex flex-col gap-1.5 sm:flex-row sm:gap-6 py-5";
const LABEL = "sm:w-36 shrink-0 text-[13px] tracking-[0.02em] text-on-surface-variant";
const VALUE = "text-[17px] leading-snug font-medium";

export default function Contact() {
  const [headRef, headInView] = useInView<HTMLDivElement>(0.3);
  const [listRef, listInView] = useInView<HTMLUListElement>(0.2);
  const [mapRef, mapInView] = useInView<HTMLDivElement>(0.2);

  const stagger = ["", "delay-75", "delay-100", "delay-150", "delay-200"];

  return (
    <section className="w-full bg-surface-container-low py-24 lg:py-32" id="iletisim">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Sol: başlık + iletişim satırları */}
          <div className="lg:col-span-5">
            <div ref={headRef} className={fadeUp(headInView)}>
              <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-white leading-[1.05]">
                İLETİŞİM
              </h2>
              <p className="font-body-lg text-body-lg text-secondary mt-4 max-w-md">
                Üyelik bilgisi almak, özel antrenman hakkında sormak ya da salonu görmek
                için bize ulaşabilirsin.
              </p>
            </div>

            <ul
              ref={listRef}
              className="mt-10 lg:mt-12 border-b border-white/10"
            >
              {/* Telefon */}
              <li className={`border-t border-white/10 ${stagger[0]} ${fadeUp(listInView)}`}>
                {PHONE_IS_PLACEHOLDER ? (
                  <div className={`${ROW} sm:items-center`}>
                    <span className={LABEL}>Telefon</span>
                    <div>
                      <span className={`${VALUE} text-on-surface-variant`}>{PHONE_DISPLAY}</span>
                      <span className="block mt-1 text-[12px] text-on-surface-variant/70">
                        Numara henüz eklenmedi
                      </span>
                    </div>
                  </div>
                ) : (
                  <a href={PHONE_HREF} className={`group ${ROW} sm:items-center`}>
                    <span className={LABEL}>Telefon</span>
                    <span className="flex flex-1 items-center justify-between gap-4">
                      <span className={`${VALUE} text-white`}>{PHONE_DISPLAY}</span>
                      <Icon
                        name="call"
                        width={20}
                        height={20}
                        className="text-on-surface-variant transition-colors duration-200 group-hover:text-primary"
                      />
                    </span>
                  </a>
                )}
              </li>

              {/* WhatsApp — güçlü CTA */}
              <li className={`border-t border-white/10 ${stagger[1]} ${fadeUp(listInView)}`}>
                <div className={`${ROW} sm:items-center`}>
                  <span className={LABEL}>WhatsApp</span>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full sm:w-auto sm:min-w-[240px] items-center justify-between gap-4 rounded-md bg-primary px-6 py-4 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-primary/85"
                  >
                    <span className="flex items-center gap-3">
                      <Icon name="chat" width={20} height={20} />
                      Mesaj Gönder
                    </span>
                    <Icon name="arrow-right" width={18} height={18} />
                  </a>
                </div>
              </li>

              {/* Instagram */}
              <li className={`border-t border-white/10 ${stagger[2]} ${fadeUp(listInView)}`}>
                <a
                  href={INSTAGRAM_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${ROW} sm:items-center`}
                >
                  <span className={LABEL}>Instagram</span>
                  <span className="flex flex-1 items-center justify-between gap-4">
                    <span className={`${VALUE} text-white`}>{INSTAGRAM_HANDLE}</span>
                    <Icon
                      name="arrow-right"
                      width={18}
                      height={18}
                      className="text-on-surface-variant transition-colors duration-200 group-hover:text-primary"
                    />
                  </span>
                </a>
              </li>

              {/* Adres */}
              <li className={`border-t border-white/10 ${stagger[3]} ${fadeUp(listInView)}`}>
                <div className={`${ROW} sm:items-center`}>
                  <span className={LABEL}>Adres</span>
                  <span className={`${VALUE} text-white`}>{ADDRESS}</span>
                </div>
              </li>

              {/* Çalışma saatleri */}
              <li className={`border-t border-white/10 ${stagger[4]} ${fadeUp(listInView)}`}>
                <div className={`${ROW} sm:items-start`}>
                  <span className={`${LABEL} sm:pt-[3px]`}>Çalışma Saatleri</span>
                  <div className="space-y-1.5 text-[15px]">
                    {HOURS.map((h) => (
                      <div key={h.label} className="flex items-baseline gap-4">
                        <span className="w-24 text-on-surface-variant">{h.label}</span>
                        <span className="font-medium tabular-nums text-white">{h.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Sağ: harita / konum alanı */}
          <div ref={mapRef} className={`lg:col-span-7 ${fadeUp(mapInView)}`}>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yol tarifi al — Google Haritalar'da aç"
              className="group relative block h-[340px] sm:h-[440px] lg:h-full lg:min-h-[560px] overflow-hidden rounded-lg bg-surface-container"
            >
              <Image
                alt={MAP_IMAGE_ALT}
                src={MAP_IMAGE_SRC}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center"
              />
              <span className="absolute bottom-5 left-5 right-5 sm:right-auto inline-flex items-center justify-center gap-2.5 rounded-md bg-white px-6 py-4 text-[14px] font-bold tracking-[0.04em] text-surface-container-lowest transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                <Icon name="directions" width={18} height={18} />
                YOL TARİFİ AL
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
