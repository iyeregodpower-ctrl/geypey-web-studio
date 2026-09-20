import Image from "next/image";

export default function Founder() {
  return (
    <section className="cv-auto px-6 w-full my-32">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-zinc-950 rounded-3xl p-8 md:p-16 border border-zinc-900 overflow-hidden animate-fade-in-up">
        <div className="w-full md:w-1/3 relative flex justify-center">
          <Image
            src="/img/portfolio-image2.png"
            alt="Iyere"
            width={400}
            height={500}
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75}
            priority={false}
            loading="lazy"
            className="relative z-10 rounded-2xl border border-zinc-800 object-cover"
          />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Crafting Bright Experiences.</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I am Iyere Gods power, the founder of Geypey Web Studio. We combine technical precision in Next.js with a sharp eye for UI/UX to ensure your project is not just code, but a digital experience that converts.
          </p>
        </div>
      </div>
    </section>
  );
}
