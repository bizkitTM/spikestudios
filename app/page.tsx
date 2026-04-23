import { SpikeMark } from "./components/SpikeMark";
import { HeroGraphic } from "./components/HeroGraphic";

const services = [
  {
    title: "Discover what to build",
    body:
      "Before code, we get clear on the audience you're building for and the change in their world that you will make. Most app ideas need that work first."
  },
  {
    title: "Design and build with intention",
    body:
      "We use modern AI tools to move fast, but every product decision is made by humans with taste. Speed without judgment is just churn."
  },
  {
    title: "Ship and stay close",
    body:
      "We get the first version into real hands and keep iterating. Software is never finished — the question is whether it's getting better."
  }
];

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(17 17 17 / 0.55) 1px, transparent 0)",
          backgroundSize: "22px 22px"
        }}
      />

      <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-ink">
            <SpikeMark className="h-5 w-5 text-accent" />
            <p className="text-sm uppercase tracking-[0.22em]">Spike Studios</p>
          </div>

          <HeroGraphic className="mt-12 w-full max-w-lg" />

          <h1 className="mt-12 font-serif text-4xl leading-tight sm:text-5xl">
            Apps that serve the people who use them.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            We&apos;re a small studio building software for a strange moment.
            AI lets two people do the work of twenty — but most of what gets shipped
            still feels like it forgot the human on the other side.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">
            We use AI as a tool. The taste, the judgment, and the responsibility stay with us.
          </p>
        </header>

        <section aria-labelledby="what-we-do" className="mb-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
            <h2
              id="what-we-do"
              className="text-sm uppercase tracking-[0.22em] text-ink/60"
            >
              What we do
            </h2>
          </div>
          <ul className="mt-10 space-y-10">
            {services.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="mt-2 font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <p className="mt-2 text-ink/80 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="contact">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
            <h2
              id="contact"
              className="text-sm uppercase tracking-[0.22em] text-ink/60"
            >
              Get in touch
            </h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Have an app you want to build, or a product that&apos;s stuck?{" "}
            <a
              href="mailto:hello@spikestudios.com"
              className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              hello@spikestudios.com
            </a>
          </p>
        </section>

        <footer className="mt-24 flex items-center justify-between border-t border-ink/10 pt-6 text-sm text-ink/50">
          <span>&copy; {new Date().getFullYear()} Spike Studios</span>
          <SpikeMark className="h-3.5 w-3.5 text-ink/40" />
        </footer>
      </main>
    </div>
  );
}
