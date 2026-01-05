export const dashboardMenu = [
  {
    label: "Bisnis",
    to: "/course/bisnis",
  },
  {
    label: "Pemasaran",
    to: "/course/pemasaran",
  },
  {
    label: "Desain",
    to: "/course/desain",
  },
  {
    label: "Teknologi",
    to: "/course/teknologi",
  },
];

export const TitleDesc = {
  HERO: {
    TITLE:
      "Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!",
    DESC: "Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.",
  },
  CTA: {
    TITLE: "Mau Belajar Lebih Banyak?",
    DESC: "Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id",
  },
};

export const ImgAssets = {
  PROFILE: "https://i.pravatar.cc/40",
  HERO: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  CTA: "https://images.unsplash.com/photo-1580920462192-3d40a3bb7bc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxzdHVkeXxlbnwwfHwwfHx8MA%3D%3D",
};

export type FooterGroupData = {
  key: "kategori" | "perusahaan" | "komunitas";
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const FOOTER_GROUPS: FooterGroupData[] = [
  {
    key: "kategori",
    title: "Kategori",
    links: [
      { label: "Digital & Teknologi", href: "/category/digital-teknologi" },
      { label: "Pemasaran", href: "/category/pemasaran" },
      { label: "Manajemen Bisnis", href: "/category/manajemen-bisnis" },
      { label: "Pengembangan Diri", href: "/category/pengembangan-diri" },
      { label: "Desain", href: "/category/desain" },
    ],
  },
  {
    key: "perusahaan",
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "/company/tentang-kami" },
      { label: "FAQ", href: "/company/faq" },
      { label: "Kebijakan Privasi", href: "/company/kebijakan-privasi" },
      { label: "Ketentuan Layanan", href: "/company/ketentuan-layanan" },
      { label: "Bantuan", href: "/company/bantuan" },
    ],
  },
  {
    key: "komunitas",
    title: "Komunitas",
    links: [
      { label: "Tips Sukses", href: "/comunity/tips-sukses" },
      { label: "Blog", href: "/comunity/blog" },
    ],
  },
];

export const imgSosmed = [
  {
    label: "linkedin",
    link: "https://www.linkedin.com/company/hariesok.id/",
    svg: "https://www.svgrepo.com/show/475661/linkedin-color.svg",
  },
  {
    label: "facebook",
    link: "https://www.facebook.com/hariesok.id/",
    svg: "https://www.svgrepo.com/show/475647/facebook-color.svg",
  },
  {
    label: "instagram",
    link: "https://www.instagram.com/hariesok.id/",
    svg: "https://www.svgrepo.com/show/303154/instagram-2016-logo.svg",
  },
  {
    label: "twitter",
    link: "https://x.com/hariesok.id",
    svg: "https://www.svgrepo.com/show/475689/twitter-color.svg",
  },
];
