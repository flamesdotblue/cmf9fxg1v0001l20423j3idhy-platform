import Spline from '@splinetool/react-spline';

export default function Hero({ onRegister }) {
  return (
    <div className="relative h-[84vh] min-h-[580px] w-full overflow-hidden">
      {/* Spline Scene as full-bleed background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays to increase legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

      <div className="relative z-10 container mx-auto h-full px-4 flex items-center">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
            Invite-only · Hyderabad · Skill-first hiring
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            AU Hiring Tournament
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">Learn · Perform · Get Hired</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            A new-age, in-person hiring event by IIIT-H alumni from top product companies. No resume filters — your skills do the talking.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onRegister} className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gradient-to-r hover:from-white hover:to-[#9ef] transition">
              Register Now
            </button>
            <a href="#about" className="inline-flex items-center rounded-full border border-white/20 bg-white/0 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
              How it works
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-white/60 text-xs">
            <div>Mentors from Google, Apple, Microsoft, Indeed</div>
            <div className="h-1 w-1 rounded-full bg-white/40" />
            <div>50+ hiring partners</div>
          </div>
        </div>
      </div>
    </div>
  );
}
