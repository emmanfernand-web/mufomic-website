<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# MUFOMIC design rules (WAJIB untuk setiap perubahan UI)

Website ini punya SATU tema visual: **poster gig / zine fotokopi** (foto grayscale + grain, judul Anton kapital, label Space Mono, sudut tajam, bayangan keras, aksen merah). Panduan lengkap ada di [README.md → Design System](README.md#design-system). Baca dulu sebelum mengubah atau menambah tampilan, lalu ikuti pola yang sudah ada. Jangan membuat gaya baru.

Aturan inti:

- **Warna:** hanya `#C90A20` (merah), `#F36416` (oranye), `#5278A2` (biru), `#F8F7F2` (krem), `#1C1C1C` / `#141414` (gelap).
- **Font:** `font-display` (Anton) untuk judul/angka, `font-mono` (Space Mono) untuk label/tombol/nomor, default system-ui untuk paragraf. Jangan menambah font.
- **Tombol:** selalu pakai `src/components/ui/Button.tsx` (`primary` / `outline` / `link`). Jangan menulis class tombol manual.
- **Section baru:** salin "Template section" di README (background grayscale + `grain-overlay`, header rata kiri dengan eyebrow `// ...` oranye + h2 Anton, `max-w-6xl`, `px-4 sm:px-6 md:px-8`).
- **Pakai class tema yang sudah ada** di `src/app/globals.css`: `grain-overlay`, `text-outline`, `tape-strip`, `event-stamp`, `event-setlist-row`, `event-reveal`, `event-lightbox`.
- **Dilarang:**
  - glassmorphism / `backdrop-blur` besar;
  - tombol pill `rounded-full` atau tombol gradient;
  - bayangan blur sebagai gaya utama;
  - header rata tengah dengan badge;
  - emoji;
  - warna di luar palet.
- **Foto** wajib memakai `next/image` + `sizes`. File aslinya 5–7MB. Jangan memberi prop `quality`.
- **Setiap animasi** wajib punya pengecualian `prefers-reduced-motion`. Yang dianimasikan hanya `transform`/`opacity`.
- **Sebelum selesai:**
  - cek lebar 390px dan 1440px, tanpa scroll horizontal;
  - `npm run lint` tanpa error;
  - `npm run build` lolos.
