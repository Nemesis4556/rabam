import Image from "next/image";
import Icon from "@/components/ui/Icon";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

const SERVICE_LINKS = [
  { label: "Fitness & Vücut Geliştirme", href: "#hizmetler" },
  { label: "Personal Training", href: "#hizmetler" },
  { label: "Strength & Güç Alanı", href: "#hizmetler" },
  { label: "Cardio Zone", href: "#hizmetler" },
];

const CONTACT_LINKS = [
  { label: "Hürriyet Mah., Akhisar / Manisa", href: "#iletisim" },
  { label: "+90 236 000 00 00", href: "tel:+902360000000" },
  { label: "info@rabamfitness.com", href: "mailto:info@rabamfitness.com" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 pb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <Image
                src="/images/rabam-logo.png"
                alt="RABAM FITNESS CLUB"
                width={80}
                height={80}
                className="h-9 w-9 object-contain"
              />
              <span className="font-label-lg text-label-lg tracking-tight text-on-surface">
                RABAM FITNESS CLUB
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Akhisar / Manisa
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Kişiye özel antrenman ve modern ekipmanlarla premium bir fitness deneyimi.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-10 sm:gap-x-16 gap-y-10">
            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Navigasyon
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-on-surface transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Hizmetler
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                {SERVICE_LINKS.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="hover:text-on-surface transition-colors">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                İletişim
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                {CONTACT_LINKS.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} className="hover:text-on-surface transition-colors">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 RABAM FITNESS CLUB
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/rabamfitness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 -m-2.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Icon name="share" width={18} height={18} />
            </a>
            <a
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 -m-2.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Icon name="chat" width={18} height={18} />
            </a>
            <a
              href="tel:+902360000000"
              aria-label="Telefon"
              className="p-2.5 -m-2.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Icon name="call" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
