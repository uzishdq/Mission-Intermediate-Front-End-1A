import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Card from "../components/card";
import InputForm from "../components/form/input-form";
import Header from "../components/header";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isSuccess = true;

    if (isSuccess) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Header variant="public" />
      <main className="min-h-screen flex flex-col ">
        <section className="flex flex-1 items-center justify-center">
          <Card
            title="Masuk Ke Akun"
            description="Yuk, lanjutin belajarmu di videobelajar."
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <InputForm id="email" label="E-Mail" type="email" required />
              <InputForm
                id="password"
                label="Kata Sandi"
                type="password"
                required
              />

              <div className="flex justify-end">
                <a
                  href="/forgot-password"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Lupa Password?
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit">Masuk</Button>

                <Button variant="secondary" href="/register">
                  Daftar
                </Button>
              </div>
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-300" />
                <span className="px-3 text-sm text-gray-500">atau</span>
                <div className="flex-1 border-t border-gray-300" />
              </div>

              <Button variant="outline">
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="font-medium">Masuk dengan Google</span>
              </Button>
            </form>
          </Card>
        </section>
      </main>
    </>
  );
}
