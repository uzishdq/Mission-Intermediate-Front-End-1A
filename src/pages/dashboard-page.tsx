import Button from "../components/button";
import CoursesWrapper from "../components/courses/course-wrapper";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroCta from "../components/hero-cta";
import { ImgAssets, TitleDesc } from "../data/constant";

export default function DashboardPage() {
  return (
    <>
      <Header variant="dashboard" />

      <main className="min-h-screen px-4 md:px-6 py-6 space-y-6">
        <HeroCta
          variant="hero"
          backgroundImage={ImgAssets.HERO}
          title={TitleDesc.HERO.TITLE}
          description={TitleDesc.HERO.DESC}
        >
          <div className="max-w-lg mx-auto">
            <Button variant="primary" href="/">
              Temukan Video Course untuk Dipelajari!
            </Button>
          </div>
        </HeroCta>

        <CoursesWrapper />

        <HeroCta
          variant="cta"
          backgroundImage={ImgAssets.CTA}
          title={TitleDesc.CTA.TITLE}
          description={TitleDesc.CTA.DESC}
        >
          <form className="relative w-full max-w-md mx-auto flex flex-col sm:block">
            <input
              type="email"
              placeholder="Masukkan Emailmu"
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-info"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:absolute sm:top-1/2 sm:right-2 sm:-translate-y-1/2 bg-info text-white font-semibold px-4 py-2 rounded-lg hover:bg-info-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        </HeroCta>
      </main>

      <Footer />
    </>
  );
}
