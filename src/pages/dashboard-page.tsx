import React from "react";
import Header from "../components/header";
import HeroCta from "../components/hero-cta";
import { TitleDesc } from "../data/constant";

export default function DashboardPage() {
  return (
    <>
      <Header variant="dashboard" />

      <main className="min-h-screen px-4 md:px-6 py-6 space-y-6">
        <HeroCta
          backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          title={TitleDesc.HERO.TITLE}
          description={TitleDesc.HERO.DESC}
        >
          <a
            href="/dashboard"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-hover transition"
          >
            Temukan Video Course
          </a>
        </HeroCta>
        <HeroCta
          backgroundImage="https://images.unsplash.com/photo-1580920462192-3d40a3bb7bc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxzdHVkeXxlbnwwfHwwfHx8MA%3D%3D"
          title={TitleDesc.CTA.TITLE}
          description={TitleDesc.CTA.DESC}
        >
          <a
            href="/dashboard"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-hover transition"
          >
            Temukan Video Course
          </a>
        </HeroCta>
      </main>
    </>
  );
}
