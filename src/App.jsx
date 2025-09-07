import { useState } from 'react';
import HeroVideo from './components/HeroVideo';
import About from './components/About';
import Partners from './components/Partners';
import Mentors from './components/Mentors';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="text-sm sm:text-base font-semibold tracking-wide">AlgoUniversity · AU Hiring Tournament</a>
          <div className="hidden sm:flex gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#partners" className="hover:text-white transition">Hiring Partners</a>
            <a href="#mentors" className="hover:text-white transition">Mentors</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          </div>
          <button onClick={() => setOpen(true)} className="ml-4 inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gradient-to-r hover:from-white hover:to-[#8ef] transition">
            Register Now
          </button>
        </nav>
      </header>

      <main>
        {/* 1) Landing section: autoplay tournament video */}
        <section id="home" className="pt-14 sm:pt-16">
          <HeroVideo onRegister={() => setOpen(true)} />
        </section>

        {/* 2) About */}
        <section id="about">
          <About onRegister={() => setOpen(true)} />
        </section>

        {/* 3) Separate section: Hiring & Referral Partners */}
        <section id="partners">
          <Partners />
        </section>

        {/* 4) Mentors then Testimonials */}
        <section id="mentors" className="pb-24">
          <Mentors />
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/80">
        <div className="container mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <h4 className="text-white/90 font-semibold">Stay connected</h4>
            <div className="flex gap-4 text-sm text-white/70">
              <a className="hover:text-white" href="https://www.instagram.com/algouniversity/" target="_blank" rel="noreferrer">Instagram</a>
              <a className="hover:text-white" href="https://www.linkedin.com/school/algouniversity/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="hover:text-white" href="https://www.youtube.com/@audevday" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
          <div className="text-sm text-white/60 sm:text-right">
            © {new Date().getFullYear()} AlgoUniversity · AU Hiring Tournament · Hyderabad
          </div>
        </div>
      </footer>

      {/* Registration Modal */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-xl rounded-2xl bg-neutral-950 ring-1 ring-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h3 className="font-semibold">Register for AU Hiring Tournament</h3>
              <button className="text-white/70 hover:text-white" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>
            <form className="p-5 grid gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll be in touch on WhatsApp.'); setOpen(false);}}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm text-white/70" htmlFor="fullName">Full Name</label>
                  <input id="fullName" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400/70" placeholder="Enter full name" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-white/70" htmlFor="email">Email</label>
                  <input id="email" type="email" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400/70" placeholder="example@email.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm text-white/70" htmlFor="cc">Country Code</label>
                  <select id="cc" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400/70">
                    <option value="+91">+91 India</option>
                    <option value="+1">+1 US/Canada</option>
                    <option value="+44">+44 UK</option>
                  </select>
                </div>
                <div className="sm:col-span-2 grid gap-2">
                  <label className="text-sm text-white/70" htmlFor="phone">Phone (WhatsApp)</label>
                  <input id="phone" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400/70" placeholder="98765 43210" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm text-white/70" htmlFor="college">College / Company</label>
                  <input id="college" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400/70" placeholder="IIIT-H / ABC Corp" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-white/70" htmlFor="track">Your Track</label>
                  <select id="track" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400/70">
                    <option value="">Select</option>
                    <option>MERN / MEAN</option>
                    <option>Java</option>
                    <option>.NET</option>
                    <option>Python / Django</option>
                    <option>App Dev</option>
                    <option>AI / ML / DL</option>
                    <option>C++</option>
                    <option>DevOps / CloudOps</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-white text-black px-5 py-2.5 font-medium hover:bg-gradient-to-r hover:from-white hover:to-[#9ef] transition">Submit</button>
                <button type="button" onClick={() => setOpen(false)} className="text-sm text-white/70 hover:text-white">Cancel</button>
              </div>
              <p className="text-xs text-white/50">By registering, you agree to receive event updates on WhatsApp.</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
