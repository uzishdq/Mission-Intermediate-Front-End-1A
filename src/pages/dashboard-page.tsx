import Header from "../components/header";
import HeroCta from "../components/hero-cta";
import { ImgAssets, TitleDesc } from "../data/constant";

export default function DashboardPage() {
  return (
    <>
      <Header variant="dashboard" />

      <main className="min-h-screen px-4 md:px-6 py-6 space-y-6">
        <HeroCta
          backgroundImage={ImgAssets.HERO}
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
          backgroundImage={ImgAssets.CTA}
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
