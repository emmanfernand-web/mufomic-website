# MUFOMIC Website

Website resmi MUFOMIC (Multimedia Face of Music), UKM musik Universitas Multimedia Nusantara. Dibangun dengan Next.js 16, React 19, dan Tailwind CSS v4.

> **Untuk AI coding assistant (Claude, Cursor, Copilot, Codex, Gemini, dll.) dan developer baru:**
> baca bagian [Design System](#design-system) sebelum menambah atau mengubah tampilan.
> Semua halaman memakai satu tema yang sama. Jangan membuat gaya baru, pakai pola yang sudah ada.

## Daftar isi

- [Menjalankan](#menjalankan)
- [Struktur folder](#struktur-folder)
- [Design System](#design-system)
  - [Konsep tema](#konsep-tema)
  - [Warna](#warna)
  - [Tipografi](#tipografi)
  - [Tekstur & dekorasi](#tekstur--dekorasi)
  - [Layout & spacing](#layout--spacing)
  - [Template section](#template-section)
  - [Komponen & pola](#komponen--pola)
  - [Tombol (Button)](#tombol-button)
  - [Animasi](#animasi)
  - [Gambar & performa](#gambar--performa)
  - [Responsif](#responsif)
  - [Aksesibilitas](#aksesibilitas)
  - [Yang TIDAK boleh](#yang-tidak-boleh)
- [Update event (Mufogigs)](#update-event-mufogigs)
- [SEO](#seo)
- [Checklist sebelum push](#checklist-sebelum-push)

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # cek build produksi sebelum push
npm run lint
```

Next.js di proyek ini versi 16, jadi beberapa API berbeda dari versi lama. Dokumentasi yang sesuai versi ada di `node_modules/next/dist/docs/`.

## Struktur folder

```
src/
  app/
    layout.tsx           font (Anton, Space Mono), Navbar, Footer
    page.tsx             Home: Hero → Event → About intro
    (pages)/rsvp         halaman Event
    (pages)/about        halaman About: intro → galeri → divisi
    globals.css          token warna/font + SEMUA class tema (lihat Design System)
  components/
    layout/              Navbar.tsx, Footer.tsx
    sections/            HeroSection.tsx, RsvpSection.tsx (event)
    sections/about/      AboutIntroSection, AboutGallerySection, AboutDivisionsSection
    ui/Button.tsx        satu-satunya komponen tombol
  data/navigation.ts     link menu & sosial media
  data/event.ts          data event Mufogigs (tampilan + SEO)
  lib/site.ts            domain, judul, deskripsi untuk SEO
public/images/           logo, background, foto (about-photos), flyer (mufogigs)
```

---

## Design System

### Konsep tema

**Poster gig / zine fotokopi.** Inspirasinya flyer konser DIY: foto hitam-putih bertekstur halftone, huruf kapital besar yang rapat, label kecil seperti mesin ketik, selotip, stempel, dan aksen merah.

Ciri visual yang harus selalu ada:

1. **Sudut tajam.** Kotak tanpa rounded (kecuali elemen yang memang bulat, seperti piringan hitam atau titik indikator).
2. **Bayangan keras (hard shadow)** tanpa blur, misalnya `shadow-[10px_10px_0_#C90A20]`. Bukan bayangan lembut.
3. **Judul besar** memakai font display (Anton), kapital, dengan kombinasi teks penuh dan teks outline.
4. **Label kecil** memakai font mono (Space Mono), kapital, dengan jarak huruf lebar.
5. **Background foto grayscale** yang digelapkan, ditambah lapisan grain.
6. **Elemen sedikit miring** (`-rotate-[1deg]` sampai `-rotate-[3deg]`) supaya terasa ditempel tangan, dan kembali lurus saat di-hover.

### Warna

Hanya gunakan warna di bawah ini. Jangan menambah warna baru.

| Peran | Hex | Token Tailwind | Dipakai untuk |
| --- | --- | --- | --- |
| Merah (aksen utama) | `#C90A20` | `mufomic-red` | tombol utama, pita/selotip merah, highlight aktif, bayangan keras |
| Oranye (aksen kedua) | `#F36416` | `mufomic-orange` | label eyebrow `//`, nomor urut, hover kecil |
| Biru (aksen ketiga) | `#5278A2` | `mufomic-blue` | "Band Division", bayangan alternatif (tiket) |
| Krem (teks / kertas) | `#F8F7F2` | `mufomic-cream` | teks utama, kertas tiket/polaroid, garis |
| Gelap (background) | `#1C1C1C` | `mufomic-dark` | background halaman |
| Permukaan gelap | `#141414` | — | navbar solid, footer, panel |

Opasitas teks krem yang dipakai:

- `text-[#F8F7F2]` untuk judul dan teks penting.
- `/75` atau `/70` untuk paragraf.
- `/50` untuk label sekunder.
- `/35`–`/45` untuk hint dan copyright.

Garis pemisah: `border-[#F8F7F2]/15`.

Kode yang ada memakai hex langsung (`bg-[#C90A20]`). Token Tailwind (`bg-mufomic-red`) juga boleh, karena nilainya sama.

### Tipografi

Font di-load di `src/app/layout.tsx` dan tersedia sebagai class Tailwind:

| Class | Font | Dipakai untuk | Contoh class lengkap |
| --- | --- | --- | --- |
| `font-display` | Anton | judul section, angka statistik, nama band/divisi | `font-display uppercase leading-[0.85] text-[clamp(3rem,10vw,6.5rem)]` |
| `font-mono` | Space Mono | eyebrow, label, tombol, nomor, metadata | `font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em]` |
| _(default)_ | system-ui | paragraf / isi | `text-sm sm:text-base leading-relaxed text-[#F8F7F2]/75` |

Aturan:

- **Eyebrow** (label di atas judul) selalu diawali `//` dan berwarna oranye: `{'//'} Tentang Kami`.
- **Judul section (h2)** memakai Anton kapital. Baris kedua boleh outline lewat class `text-outline`.
- **Ukuran judul** memakai `clamp()` agar responsif tanpa breakpoint.
- Jangan memakai `font-black` dengan font sans untuk judul. Judul selalu Anton.

### Tekstur & dekorasi

Semua class ini ada di `src/app/globals.css`. Pakai class yang sudah ada, jangan membuat versi baru.

| Class | Fungsi |
| --- | --- |
| `grain-overlay` | Lapisan noise film. Taruh di setiap section: `<div className="grain-overlay absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />` |
| `text-outline` | Teks transparan dengan garis krem 2px |
| `tape-strip` | Selotip krem semi-transparan dengan ujung sobek. Tempel di sudut foto/kartu dengan `absolute -top-3 w-20 h-6 rotate-[4deg]` |
| `event-stamp` | Stempel karet (garis ganda, tekstur pudar). Isi dengan teks mono kapital dan beri warna lewat `text-[#C90A20]` |
| `event-setlist-row` | Baris list dengan sapuan merah dari kiri saat hover. Tambah class `is-active` untuk state terpilih |
| `event-reveal` | Muncul (fade + naik) saat di-scroll. Pakai di header dan blok konten section |
| `event-lightbox` | Backdrop gelap untuk `<dialog>` lightbox |
| `animate-marquee-left` / `-right` | Strip berjalan tanpa henti (isi diduplikasi 2×) |

### Layout & spacing

- **Lebar konten:** `max-w-6xl mx-auto`
- **Padding samping section:** `px-4 sm:px-6 md:px-8`
- **Padding atas/bawah section:** `py-24 sm:py-28`. Section pertama di halaman butuh `pt-28 sm:pt-32` supaya tidak tertutup navbar.
- **Grid dua kolom:** `grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14`, dengan pembagian 5/7, 6/6, atau 7/5.
- **Header section:** rata kiri, diberi garis bawah `pb-8 border-b border-[#F8F7F2]/15`. Jangan membuat header rata tengah.

### Template section

Salin kerangka ini setiap kali membuat section baru:

```tsx
<section id="nama-section" className="relative py-24 sm:py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
  {/* Background: foto grayscale gelap + gradient */}
  <div className="absolute inset-0 -z-20 overflow-hidden">
    <img
      src="/images/background/xxx.webp"
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.35]"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] via-[#1C1C1C]/60 to-[#1C1C1C]" />
  </div>
  <div className="grain-overlay absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />

  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <header className="event-reveal pb-8 border-b border-[#F8F7F2]/15">
      <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F36416]">
        {'//'} Eyebrow
      </p>
      <h2 className="mt-3 font-display uppercase leading-[0.85] text-[#F8F7F2] text-[clamp(3rem,10vw,6.5rem)]">
        Judul <span className="text-outline">Outline</span>
      </h2>
    </header>

    {/* Konten */}
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
      ...
    </div>
  </div>
</section>
```

Section yang background-nya polos (seperti galeri) cukup memakai `grain-overlay` tanpa foto.

### Komponen & pola

Lihat contoh nyata di file yang disebut di setiap pola.

| Pola | Tampilan | Contoh di |
| --- | --- | --- |
| **Statistik** | `<dl>` grid 3 kolom, angka Anton `text-3xl sm:text-4xl`, label mono `text-[10px]`, dipisah `border-l` | `HeroSection`, `AboutIntroSection` |
| **List / setlist** | `<ol>` dengan `border-t`, tiap baris `event-setlist-row … border-b py-3 px-2`, nomor mono oranye (`01`, `A1`), nama Anton | `RsvpSection` (line-up), `AboutDivisionsSection`, `Footer` |
| **Tag / chip** | `font-mono text-xs uppercase border border-[#F8F7F2]/25 px-4 py-2`, hover jadi krem | `RsvpSection` (special performance) |
| **Panel** | `border border-[#F8F7F2]/15 bg-[#141414]/90 shadow-[12px_12px_0_rgba(201,10,32,0.85)]` | `AboutDivisionsSection` |
| **Kertas / tiket** | `bg-[#F8F7F2] text-[#1C1C1C]`, bayangan keras biru/merah, sedikit miring | `RsvpSection` (tiket) |
| **Foto polaroid** | bingkai krem `p-2 pb-8`, caption mono, `tape-strip` di atas, miring | `AboutIntroSection` |
| **Foto ditempel** | `rotate-[-3deg]`, bayangan keras merah, `tape-strip` di sudut, lurus saat hover | `RsvpSection` (flyer, class `event-flyer`) |
| **Lightbox** | `<dialog>` + `showModal()`, tombol tutup kotak merah `✕`, navigasi mono | `RsvpSection`, `AboutGallerySection` |

Untuk ikon, pakai SVG inline dengan `stroke="currentColor"` / `fill="currentColor"`, ukuran `w-4 h-4`. **Jangan pakai emoji.**

### Tombol (Button)

Semua tombol memakai satu komponen: [`src/components/ui/Button.tsx`](src/components/ui/Button.tsx). **Jangan menulis class tombol manual** (`bg-[#C90A20] px-6 ...`). Kalau gaya tombol mau diubah, cukup ubah `VARIANTS` di file itu dan semua tombol ikut berubah.

```tsx
import Button from '@/src/components/ui/Button'; // atau path relatif, mis. '../ui/Button'

<Button href="/rsvp" arrow>Mufogigs Vol. 10</Button>
```

| `variant` | Tampilan | Kapan dipakai |
| --- | --- | --- |
| `primary` _(default)_ | Merah solid dengan bayangan keras krem, berubah oranye saat hover | Aksi utama, maksimal satu per section |
| `outline` | Garis krem, terisi krem saat hover | Aksi kedua di sebelah tombol `primary` |
| `link` | Teks bergaris bawah | Aksi ringan, misalnya "Tentang Mufomic" |

| Prop | Nilai | Keterangan |
| --- | --- | --- |
| `href` | string | Kalau ada `href`, tombol jadi link. Tanpa `href`, tombol jadi `<button>` |
| `isExternal` | boolean | Buka di tab baru. Wajib untuk link ke luar (Instagram, GForm, Maps) |
| `size` | `sm` · `md` · `lg` | Default `md`. `sm` untuk navbar |
| `arrow` | boolean | Tambah panah → yang bergeser saat hover |
| `className` | string | Hanya untuk jarak/lebar (`mt-8`, `w-full`), bukan warna atau bentuk |

Props lain (`onClick`, `disabled`, `aria-*`, `style`, dll.) diteruskan ke elemen aslinya.

```tsx
// Link eksternal dengan ikon (ikon cukup ditaruh sebagai children)
<Button href="https://instagram.com/mufomic" isExternal>
  <InstagramIcon />
  Instagram @mufomic
</Button>

// Dua tombol berdampingan: utama + kedua
<div className="flex flex-col sm:flex-row gap-5">
  <Button href={gformUrl} isExternal arrow>RSVP Sekarang</Button>
  <Button href="https://instagram.com/mufomic" isExternal variant="outline">Instagram</Button>
</div>

// Tombol biasa (tanpa href)
<Button onClick={handleSubmit} disabled={isLoading}>Kirim</Button>
```

- Beri jarak antar tombol minimal `gap-5`, karena bayangan tombol menjorok 5px ke kanan-bawah.
- Untuk menyembunyikan tombol di ukuran layar tertentu, bungkus dengan elemen lain (misalnya `<div className="hidden sm:block">`). Jangan taruh `hidden` di `className` tombol, karena class `inline-flex` bawaan tombol akan menimpanya.

### Animasi

- **Easing standar:** `cubic-bezier(0.16, 1, 0.3, 1)`, untuk gerakan masuk yang halus.
- **Durasi:** 0.3s untuk hover, 0.5–0.8s untuk elemen yang masuk.
- **Hover khas tema:**
  - naik sedikit (`hover:-translate-y-1`);
  - bayangan keras membesar;
  - sapuan merah dari kiri (`event-setlist-row`);
  - elemen miring jadi lurus.
- **Yang dianimasikan hanya `transform`, `translate`, dan `opacity`.** Jangan menganimasikan `width`, `height`, `top`, atau `box-shadow` yang di-blur.
- **Wajib menghormati reduced motion.** Setiap animasi baru di `globals.css` harus punya pengecualian di blok `@media (prefers-reduced-motion: reduce)`.
- **Animasi JavaScript yang berjalan terus** (seperti piringan hitam di Hero) harus berhenti saat elemennya tidak terlihat (pakai `IntersectionObserver`) dan saat mouse diam (pakai `requestAnimationFrame` throttle).

### Gambar & performa

- **Foto** (galeri, divisi, polaroid) wajib memakai `next/image` dengan prop `sizes` yang tepat. File di `public/images/about-photos` berukuran 5–7MB, jadi jangan pernah ditampilkan lewat `<img>` biasa.
- **Jangan memberi prop `quality`** selain default (75). Next 16 hanya mengizinkan nilai yang ada di `images.qualities`.
- **Background section** boleh memakai `<img>` dengan `loading="lazy"`, kecuali Hero yang memakai `fetchPriority="high"`.
- **Hindari efek yang berat saat scroll:**
  - `backdrop-blur` besar;
  - `mix-blend-mode` di lapisan selebar layar;
  - orb `blur-[160px]`.
  
  Efek ini membuat halaman patah-patah. Tema ini tidak butuh glassmorphism.

### Responsif

- **Desain mobile-first.** Cek di lebar **390px** (HP) dan **1440px** (desktop).
- **Tidak boleh ada scroll horizontal.** Section diberi `overflow-hidden`, terutama yang punya marquee atau elemen miring.
- **Grid dua kolom** jadi satu kolom di bawah `lg`. Atur urutan dengan `order-1 lg:order-2` kalau konten penting harus tampil duluan di HP.
- **Navbar fixed:** tingginya `h-16` di HP dan `sm:h-20` di desktop. Navbar otomatis sembunyi saat scroll ke bawah.

### Aksesibilitas

- Gambar dekoratif diberi `alt=""` dan `aria-hidden="true"`. Foto konten diberi `alt` deskriptif dalam Bahasa Indonesia.
- Elemen yang bisa diklik harus berupa `<button>` atau `<a>`/`<Link>`, bukan `<div onClick>`.
- Modal/lightbox memakai `<dialog>` + `showModal()`, supaya Esc dan fokus otomatis benar.
- State terpilih diberi `aria-pressed` atau `aria-current="page"`.

### Yang TIDAK boleh

- ❌ Glassmorphism (`backdrop-blur` + latar transparan + rounded besar)
- ❌ Tombol pill `rounded-full`, tombol gradient, atau class tombol manual. Selalu pakai `<Button>`.
- ❌ Bayangan lembut/blur sebagai gaya utama (`shadow-2xl`, glow), karena tema ini memakai bayangan keras
- ❌ Header section rata tengah dengan badge pill
- ❌ Warna di luar palet (ungu, hijau, pink, dll.) dan gradient pelangi
- ❌ Emoji di UI
- ❌ Font baru. Hanya Anton, Space Mono, dan system-ui.
- ❌ `<img>` biasa untuk foto besar
- ❌ Animasi tanpa pengecualian `prefers-reduced-motion`

---

## Update event (Mufogigs)

Data event ada di [`src/data/event.ts`](src/data/event.ts). Data ini dipakai untuk tampilan section Event sekaligus untuk data SEO di halaman /rsvp:

- `EVENT`: judul, tanggal, waktu, lokasi, flyer, dan line-up.
- `startDate` / `endDate`: tanggal dalam format mesin (`2026-10-03T18:00:00+07:00`). Wajib diganti juga supaya Google menampilkan tanggal yang benar.

Pengaturan tombol ada di bagian atas [`src/components/sections/RsvpSection.tsx`](src/components/sections/RsvpSection.tsx):

- `isTicketAvailable`: `true` untuk menampilkan tombol **RSVP Sekarang** (link `gformUrl`). Tombol Instagram otomatis jadi `outline`.
- `showMapsButton`: `true` untuk menampilkan tombol **Buka di Maps** (link `googleMapsUrl`). Saat ini `false` karena event sudah selesai.

Ganti juga label "Mufogigs Vol. 10" di `Navbar.tsx`, `Footer.tsx`, `HeroSection.tsx`, dan teks marquee di Hero (`MARQUEE_ITEMS`). Simpan flyer baru di `public/images/mufogigs/` dalam format `.webp`.

## SEO

- **Konfigurasi utama:** semua ada di [`src/lib/site.ts`](src/lib/site.ts): domain, judul, deskripsi, dan keyword.
- **Metadata halaman:** metadata dasar ada di [`src/app/layout.tsx`](src/app/layout.tsx). Setiap halaman di `src/app/(pages)/*/page.tsx` mengekspor `metadata` sendiri, berisi `title`, `description`, dan `alternates.canonical`.
- **File otomatis:** `robots.txt` dan `sitemap.xml` dibuat oleh `src/app/robots.ts` dan `src/app/sitemap.ts`. **Kalau menambah halaman baru, daftarkan juga di `sitemap.ts`.**
- **Structured data (JSON-LD):** data Organization + WebSite ada di `layout.tsx`, dan data Event ada di `rsvp/page.tsx`.
- **Ikon dan gambar share:** `src/app/icon.png`, `apple-icon.png`, `favicon.ico`, `opengraph-image.png`, dan `twitter-image.png`.
- **Satu `<h1>` per halaman:**
  - Home: judul Hero.
  - /about: logotype di intro (`asPageHeading`).
  - /rsvp: judul event (`asPageHeading`).
- **Verifikasi Google Search Console:** isi environment variable `GOOGLE_SITE_VERIFICATION` di Vercel dengan kode dari Search Console (metode "HTML tag", ambil nilai `content`-nya saja), lalu redeploy.

## Checklist sebelum push

- [ ] `npm run lint` tanpa error
- [ ] `npm run build` berhasil
- [ ] Sudah dicek di lebar 390px dan 1440px, tanpa scroll horizontal
- [ ] Hanya memakai warna, font, dan class dari Design System
- [ ] Semua tombol memakai `<Button>`
- [ ] Foto memakai `next/image`
