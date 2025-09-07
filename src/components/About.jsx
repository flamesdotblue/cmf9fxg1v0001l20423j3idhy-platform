export default function About({ onRegister }) {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">New‑Age Hiring Module</h2>
          <p className="text-white/80">
            An invite‑only, in‑person hiring event for tech talent in Hyderabad. Crafted by senior engineers and IIIT‑H alumni with experience at Google, Apple, Microsoft, and Indeed.
          </p>
          <p className="text-white/80">
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
          <h3 className="text-lg font-semibold mb-4">Some of our partners & referrals</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_18s_linear_infinite] gap-8 opacity-90 hover:[animation-play-state:paused]">
              {logos.concat(logos).map((src, i) => (
                <img key={i} src={src} alt="partner" className="h-10 w-auto object-contain" loading="lazy" />
              ))}
            </div>
          </div>
          <p className="mt-4 text-xs text-white/60">We collaborate with top recruiters and product teams to accelerate high‑quality matches.</p>
        </div>
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

const logos = [
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/1_4gg3q2e.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/2_Wv3SRIb.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/3_cTXU1Zu.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/4_skw0D0b.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/5_KazqLcI.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/6_usMgD14.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/7_tcL1M2N.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/8_Vnhhc9p.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/9_duC97cg.png'
];
