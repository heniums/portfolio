import A from "src/components/A";
import Github from "src/components/icons/Github";
import heroImage from "src/assets/me.jpg";
import { siteConfig } from "src/config";

function Hero() {
  const { hero, social } = siteConfig;

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-zinc-950 text-white px-8 py-20 min-h-[80vh]">
      <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          {hero.greeting}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {hero.fullName}
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 font-light">
          {hero.jobTitle}
        </p>
        <p className="text-sm text-zinc-400 leading-relaxed">{hero.bio}</p>
        <div className="flex gap-3 justify-center lg:justify-start">
          <A
            href={`mailto:${social.email}`}
            className="bg-white text-zinc-900 px-5 py-2.5 font-medium hover:bg-zinc-200 transition-colors duration-200"
          >
            {hero.ctaPrimaryLabel}
          </A>
          <A
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="border-zinc-600 text-zinc-300 px-5 py-2.5 hover:border-white hover:text-white transition-colors duration-200"
          >
            <span>{hero.ctaSecondaryLabel}</span>
            <Github className="w-4 h-4" />
          </A>
        </div>
      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-zinc-700 shrink-0">
        <img
          src={heroImage}
          alt={`Portrait of ${hero.fullName}`}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}

export default Hero;
