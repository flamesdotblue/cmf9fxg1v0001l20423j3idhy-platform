export default function About({ onRegister }) {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-14 md:py-20 grid gap-10 md:grid-cols-2 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">New‑Age Hiring Module</h2>
          <p className="text-white/85">
            An invite‑only, in‑person hiring event for tech talent in Hyderabad. Crafted by senior engineers and IIIT‑H alumni with experience at Google, Apple, Microsoft, and Indeed.
          </p>
          <p className="text-white/85">
            Forget resume gates. Learn a core concept from experts, take a challenge right after, and get mapped to hiring partners based on performance.
          </p>
          <ul className="grid gap-3 text-white/90">
            <li className="flex gap-2"><span>✅</span> Learn a high‑impact DSA topic, hands‑on</li>
            <li className="flex gap-2"><span>✅</span> Attempt a curated contest immediately</li>
            <li className="flex gap-2"><span>✅</span> Get matched to companies purely on skill</li>
          </ul>
          <div className="pt-2">
            <button onClick={onRegister} className="inline-flex items-center rounded-lg bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-white hover:to-[#9ef] transition">
              Join the next cohort
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6">
          <h3 className="text-lg font-semibold mb-4">What to expect</h3>
          <div className="grid gap-3 text-sm text-white/80">
            <div className="flex gap-3"><span>•</span> 50+ hiring partners across product and high‑growth startups</div>
            <div className="flex gap-3"><span>•</span> Pure skill‑based selection — no resume filters</div>
            <div className="flex gap-3"><span>•</span> 1:1 mentorship from top‑tier engineers (FAANG/MAANG)</div>
            <div className="flex gap-3"><span>•</span> Actionable feedback and continued career support</div>
          </div>
        </div>
      </div>
    </div>
  );
}
