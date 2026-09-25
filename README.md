# RABAM FITNESS CLUB — Web Sitesi

Next.js 14 (App Router) + TypeScript + Tailwind CSS ile, onaylanmış **"Obsidian Kinetic"**
tasarım referansı (`code.html` / `DESIGN.md` Stitch export'u) birebir uygulanarak
production-ready şekilde oluşturuldu.

## Kurulum

```bash
npm install
npm run dev
```

`http://localhost:3000` adresinden görüntüleyebilirsin.

## Build kontrolü (ÖNEMLİ)

Bu proje ağ erişimi olmayan bir ortamda hazırlandı, bu yüzden `npm install` ve
`npm run build` burada **çalıştırılamadı**. Teslim almadan önce kendi
makinende mutlaka çalıştır:

```bash
npm install
npm run build
npm run lint
```

Çıkan TypeScript/ESLint hatalarını bildirirsen hızlıca düzeltirim.

## Klasör yapısı

```
app/
  layout.tsx      → font (Manrope), metadata, Header/Footer
  page.tsx         → tüm section'ları sırayla dizer
  globals.css      → Tailwind base + global reset, odak/seçim/hareket davranışı
components/
  layout/
    Header.tsx     → sabit navbar + mobil hamburger menü
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx        (#hakkimizda)
    Services.tsx      (#hizmetler)
    Gallery.tsx        (#galeri)
    WhyRabam.tsx        (#neden-rabam)
    Cta.tsx
    Contact.tsx          (#iletisim)
  ui/
    Icon.tsx       → Material Symbols yerine kullanılan inline SVG ikon seti
tailwind.config.ts → DESIGN.md'deki renk/tipografi/spacing token'ları birebir
next.config.js     → görsel referans domaini (lh3.googleusercontent.com) izinli
```

## Bilinmesi gerekenler

- **Font sistemi**: Site genelinde tek font ailesi olarak **Manrope** kullanılıyor
  (`app/layout.tsx`, `next/font/google`). Başlıklar (`display-xl/lg`,
  `headline-lg/md`) 700–800 ağırlıkta, gövde metinleri (`body-lg/md/sm`)
  400 ağırlıkta, etiket/UI metinleri (`label-lg/md/sm`) 500–600 ağırlıkta —
  bkz. `tailwind.config.ts` → `fontSize`. Condensed/bodybuilding tarzı bir
  font kullanılmıyor.
- **Hero görseli**: Unsplash'tan, Unsplash License altında ücretsiz kullanılan
  "man lifting barbell on back inside gym" fotoğrafı (Sam Sabourin —
  `@samsabourin`) kullanıldı; önceki versiyona göre daha az soluk / daha
  belirgin (opacity ve brightness artırıldı, üstteki karartma gradyanları
  hafifletildi). Zorunlu olmasa da dipnotta fotoğrafçıya kredi vermek iyi
  pratiktir. Gerçek salon fotoğrafın hazır olduğunda `components/sections/Hero.tsx`
  içindeki `src` değerini değiştirmen yeterli.
- **Diğer görseller**: Hero dışındaki tüm görseller hâlâ Stitch export'unun
  kullandığı `lh3.googleusercontent.com` üzerindeki geçici üretim
  görselleridir. Şu an `next.config.js` → `images.remotePatterns` ile izinli,
  site bu haliyle çalışır. Ancak bu URL'ler kalıcı bir varlık değil;
  **prodüksiyona almadan önce** gerçek salon fotoğraflarını `/public/images`
  altına koyup ilgili `<Image src="..."/>` referanslarını güncellemeni
  öneririm.
- **Telefon / WhatsApp numarası**: Referans tasarımdaki placeholder değerler
  (`+90 (236) 000 00 00`, `wa.me/905000000000`) aynen korundu — gerçek numarayı
  `components/sections/Cta.tsx`, `components/sections/Contact.tsx` ve
  `components/layout/Footer.tsx` içinde güncellemen gerekiyor.
- **Harita**: Tasarımdaki "harita kartı" statik bir görsel + Google Maps linkidir
  (referans tasarımda da gerçek bir harita embed'i yok); gerçek konum linkini
  `components/sections/Contact.tsx` içindeki `maps.google.com` URL'sinde
  güncelleyebilirsin.
- **Tipografi**: Masaüstünde referansla birebir aynı ölçekler kullanıldı
  (`display-xl`, `display-lg` vb.). Mobilde `DESIGN.md`'de tanımlı
  `*-mobile` ölçekleri (`display-xl-mobile`, `display-lg-mobile`) devreye girer.
- **Renkler / border-radius / gölge / geçişler (bu turda güncellendi)**: Tüm
  renk token'ları `tailwind.config.ts` içinde yeniden tanımlandı —
  - Arka plan: gerçek koyu siyah (`#0a0a0a`) + nötr koyu gri (charcoal) katmanlar,
    önceki sıcak/pembemsi ton kaldırıldı.
  - Tek vurgu rengi: kırmızı (`#e11d2e`, `primary` / `primary-container`).
  - Lime/yeşil vurgu (`tertiary`) tamamen kaldırıldı, nötr beyaz/griye
    eşlendi; WhatsApp buton rengi de marka yeşili yerine nötr koyu tona
    çekildi (tek vurgu rengi kuralına uysun diye).
  - Mor/mavi/neon hiçbir yerde tanımlı değil.
  - `boxShadow` skalası Tailwind'in varsayılan yumuşak/parlak gölgelerinden
    çok daha sade ve koyu/kontrastlı hale getirildi (`shadow-2xl` kullanan
    tek yer — About görseli — otomatik olarak sadeleşti).
  - `borderRadius` artık `0`'a sabitlenmiş değil; keskin köşe hâlâ varsayılan
    ama ileride kullanılabilecek çok hafif bir radius skalası (`2–8px`)
    tanımlandı. Şu an hiçbir component `rounded-*` class'ı kullanmıyor,
    yani bu değişikliğin görsel bir etkisi yok — altyapı hazırlığı.
  - Global geçiş süresi/eğrisi (`transitionDuration`/`transitionTimingFunction`
    `DEFAULT`) daha yumuşak, Apple benzeri bir eğriye çekildi; bu, explicit
    `duration-*`/`ease-*` vermeyen `transition-colors` gibi kullanımları
    otomatik etkiler.
  - `globals.css`'e marka kırmızısıyla `:focus-visible` halkası, kırmızı metin
    seçim rengi ve `prefers-reduced-motion` desteği eklendi.
- **Bu turda BİLEREK dokunulmayanlar**: Talimat gereği bu pas yalnızca
  `tailwind.config.ts` / `globals.css` (global tasarım altyapısı) ile
  sınırlandı. Component/section dosyaları değişmedi — yani mimari grid
  overlay'leri, hairline `border-white/10` çizgileri, `[01 / ...]` template
  etiketleri, yoğun `uppercase` kullanımı, ağır `grayscale` filtreleri ve
  dekoratif kutular hâlâ önceki haliyle duruyor. Bunlar bir sonraki,
  component-seviyeli pasın konusu.
