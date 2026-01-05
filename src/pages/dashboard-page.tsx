import Button from "../components/button";
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
          <Button variant="primary" href="/">
            Temukan Video Course untuk Dipelajari!
          </Button>
        </HeroCta>
        <HeroCta
          variant="cta"
          backgroundImage={ImgAssets.CTA}
          title={TitleDesc.CTA.TITLE}
          description={TitleDesc.CTA.DESC}
        >
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Email kamu"
              required
              className="px-4 py-2 rounded-lg text-gray-900 w-full sm:w-64"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition"
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
