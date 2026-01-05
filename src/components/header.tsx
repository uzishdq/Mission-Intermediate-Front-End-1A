import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { dashboardMenu, ImgAssets } from "../data/constant";

type HeaderVariant = "public" | "dashboard";

interface HeaderProps {
  variant?: HeaderVariant;
}

export default function Header({ variant = "public" }: Readonly<HeaderProps>) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="flex items-center justify-between px-6 py-4">
        <Link
          to={variant === "dashboard" ? "/dashboard" : "/"}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="videobelajar" className="h-8" />
        </Link>

        {/* DASHBOARD */}
        {variant === "dashboard" && (
          <>
            <div className="hidden md:flex items-center gap-6">
              <p className="text-sm font-medium">Kategori</p>
              <img
                src={ImgAssets.PROFILE}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {open ? "✕" : "☰"}
            </button>
          </>
        )}
      </nav>

      {variant === "dashboard" && open && (
        <div className="md:hidden border-t">
          {dashboardMenu.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-6 py-3 text-sm hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t mt-2">
            <button className="w-full text-left px-6 py-3 text-sm text-red-600 hover:bg-red-50">
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
