export default function Benefits({ onRegister }) {
  return (
    <div className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black">
      <div className="container mx-auto px-4 py-16 md:py-24 grid gap-12 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Why join AU Hiring Tournament?</h2>
          <ul className="mt-6 grid gap-3 text-white/90">
            <li className="flex gap-2"><span>•</span> 50+ hiring partners across product and high‑growth startups</li>
            <li className="flex gap-2"><span>•</span> Purely skill‑based selection — no resume shortlists</li>
            <li className="flex gap-2"><span>•</span> 1:1 mentorship from top‑tier engineers (FAANG/MAANG)</li>
            <li className="flex gap-2"><span>•</span> Actionable feedback and continued career support</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onRegister} className="inline-flex items-center rounded-lg bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-gradient-to-r hover:from-white hover:to-[#9ef] transition">
              Register for the workshop
            </button>
            <a href="#testimonials" className="inline-flex items-center rounded-lg border border-white/20 bg-white/0 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition">See success stories</a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <iframe
              src="https://drive.google.com/file/d/1Zwl-e_URCrIhlHRQmB7c_DU_AV5nBsix/preview"
              title="Feature Video"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <p className="text-xs text-white/60 mt-3">Watch: How the format works and what to expect on the day</p>
        </div>
      </div>
    </div>
  );
}
