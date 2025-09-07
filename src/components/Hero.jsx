export default function Hero({ onRegister }) {
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/30 to-neutral-950/85" />

      <div className="relative z-10 container mx-auto h-full px-4 flex items-end pb-10">
        <div className="max-w-3xl">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-neutral-200">
            Invite-only · Hyderabad · Skill-first hiring
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-white">
            AU Hiring Tournament
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300">Learn · Perform · Get Hired</span>
          </h1>
          <p className="mt-3 text-neutral-200/90 max-w-2xl text-sm sm:text-base">
            No resume filters. Learn a core topic from mentors, take a curated challenge, and get mapped to hiring partners based on performance.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={onRegister} className="inline-flex items-center rounded-full bg-white text-neutral-950 px-6 py-3 text-sm font-semibold hover:bg-neutral-200 active:scale-[.99] transition">
              Register Now
            </button>
            <a href="#about" className="inline-flex items-center rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-neutral-100 hover:bg-white/5 transition">
              How it works
            </a>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-6 text-neutral-300 text-xs">
            <div>Mentors from Google, Apple, Microsoft, Indeed</div>
            <div className="h-1 w-1 rounded-full bg-neutral-500" />
            <div>50+ hiring partners</div>
          </div>
        </div>
      </div>
    </div>
  );
}
