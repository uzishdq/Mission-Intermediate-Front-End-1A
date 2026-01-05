interface HeroProps {
  variant: "hero" | "cta";
  backgroundImage: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function HeroCta({
  variant,
  backgroundImage,
  title,
  description,
  children,
}: Readonly<HeroProps>) {
  return (
    <section
      className="relative w-full max-w-300 mx-auto min-h-80 md:min-h-105 rounded-lg bg-cover bg-center bg-no-repeat flex items-center justify-center text-white px-4 md:px-0"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/75 to-black/60" />

      {/* Content */}
      <div className="relative z-10 px-4 py-10 md:px-12 md:py-16 text-center">
        {variant === "cta" && <p className="text-2xl">NEWSLETTER</p>}

        <h1 className="text-[clamp(28px,5vw,48px)] leading-[1.15] font-bold">
          {title}
        </h1>

        <p className="mt-4 text-[clamp(14px,2.5vw,16px)] text-center text-white/90">
          {description}
        </p>

        {/* CTA SLOT */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
