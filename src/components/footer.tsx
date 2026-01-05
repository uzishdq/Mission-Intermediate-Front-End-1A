import { useState } from "react";
import logo from "../assets/logo.png";
import { FOOTER_GROUPS, imgSosmed } from "../data/constant";

type GroupKey = "kategori" | "perusahaan" | "komunitas";

export default function Footer() {
  const [open, setOpen] = useState<Record<GroupKey, boolean>>({
    kategori: false,
    perusahaan: false,
    komunitas: false,
  });

  const toggle = (key: GroupKey) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer className="bg-white border-t border-gray-200 px-6 md:px-20 pt-12 pb-6 text-gray-600">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <div className="max-w-md">
          <img src={logo} alt="videobelajar" className="mb-4" />
          <p className="font-semibold text-gray-800 mb-3">
            Gali Potensi Anda Melalui
            <br />
            Pembelajaran Video di hariesok.id!
          </p>
          <p className="text-sm leading-relaxed">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
            <br />
            +62-877-7123-1234
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-20 w-full md:w-auto">
          {FOOTER_GROUPS.map((group) => (
            <FooterGroup
              key={group.key}
              title={group.title}
              isOpen={open[group.key]}
              onToggle={() => toggle(group.key)}
            >
              {group.links.map((link) => (
                <FooterLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </FooterGroup>
          ))}
        </div>
      </div>

      <div className="mt-10 pt-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>©2023 Gerobak Sayur All Rights Reserved.</p>

        <div className="flex gap-3">
          {imgSosmed.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center"
              target="_blank"
            >
              <img src={item.svg} alt={item.label} className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ================= SUB COMPONENT ================= */

function FooterGroup({
  title,
  isOpen,
  onToggle,
  children,
}: Readonly<{
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full md:w-auto">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between mb-4 font-bold text-gray-800 text-base cursor-pointer md:cursor-default"
      >
        {title}
        <span className="md:hidden">{isOpen ? "▴" : "▾"}</span>
      </button>

      <ul
        className={`space-y-2.5 text-sm transition-all duration-200
          ${isOpen ? "block" : "hidden"} md:block`}
      >
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  label,
  href,
}: Readonly<{ label: string; href: string }>) {
  return (
    <li>
      <a href={href} className="text-gray-500 hover:text-black" target="_blank">
        {label}
      </a>
    </li>
  );
}
