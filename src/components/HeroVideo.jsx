export default function HeroVideo({ onRegister }) {
  return (
    <div className="relative min-h-[78vh] sm:min-h-[82vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://drive.google.com/file/d/1Zwl-e_URCrIhlHRQmB7c_DU_AV5nBsix/preview?autoplay=1&mute=1"
            title="AU Hiring Tournament"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      <div className="relative z-10 container mx-auto h-full px-4 flex items-end pb-10">
        <div className="max-w-3xl">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/80">
            Invite-only · Hyderabad · Skill-first hiring
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            AU Hiring Tournament
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">Learn · Perform · Get Hired</span>
          </h1>
          <p className="mt-3 text-white/85 max-w-2xl text-sm sm:text-base">
            No resume filters. Learn a core topic from mentors, take a curated challenge, and get mapped to hiring partners based on performance.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={onRegister} className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gradient-to-r hover:from-white hover:to-[#9ef] transition">
              Register Now
            </button>
            <a href="#about" className="inline-flex items-center rounded-full border border-white/20 bg-white/0 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
              How it works
            </a>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-6 text-white/70 text-xs">
            <div>Mentors from Google, Apple, Microsoft, Indeed</div>
            <div className="h-1 w-1 rounded-full bg-white/40" />
            <div>50+ hiring partners</div>
          </div>
        </div>
      </div>
    </div>
  );
}
