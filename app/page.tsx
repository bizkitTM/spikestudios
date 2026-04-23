const services = [
  {
    title: "Discover what to build",
    body:
      "Before code, we get clear on the person you're serving and the change you want to create for them. Most app ideas need that work first."
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
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <header className="mb-20">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/60">Spike Studios</p>
        <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
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
        <h2
          id="what-we-do"
          className="text-sm uppercase tracking-[0.2em] text-ink/60"
        >
          What we do
        </h2>
        <ul className="mt-8 space-y-10">
          {services.map((s) => (
            <li key={s.title}>
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="mt-2 text-ink/80 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="contact">
        <h2
          id="contact"
          className="text-sm uppercase tracking-[0.2em] text-ink/60"
        >
          Get in touch
        </h2>
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

      <footer className="mt-24 border-t border-ink/10 pt-6 text-sm text-ink/50">
        &copy; {new Date().getFullYear()} Spike Studios
      </footer>
    </main>
  );
}
