import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Mentors from './components/Mentors';

export default function App() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition ${sticky ? 'backdrop-blur bg-neutral-950/70 border-b border-white/10' : 'bg-transparent'}`}>
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="text-sm sm:text-base font-semibold tracking-wide text-neutral-100">AU Hiring Tournament</a>
          <div className="hidden sm:flex gap-6 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#partners" className="hover:text-white transition">Partners</a>
            <a href="#mentors" className="hover:text-white transition">Mentors</a>
          </div>
          <button onClick={() => setOpen(true)} className="ml-4 inline-flex items-center rounded-full bg-white text-neutral-950 px-4 py-2 text-sm font-medium hover:bg-neutral-200 active:scale-[.99] transition">
            Register
          </button>
        </nav>
      </header>

      {/* Main */}
      <main>
        {/* 1) Landing with autoplay video */}
        <section id="home" className="pt-14 sm:pt-16">
          <Hero onRegister={() => setOpen(true)} />
        </section>
        {/* 2) About */}
        <section id="about">
          <About onRegister={() => setOpen(true)} />
        </section>
        {/* 3) Partners */}
        <section id="partners">
          <Partners />
        </section>
        {/* 4) Mentors + stories */}
        <section id="mentors" className="pb-24">
          <Mentors />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950/90">
        <div className="container mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <h4 className="text-neutral-200 font-semibold">Stay connected</h4>
            <div className="flex gap-4 text-sm text-neutral-400">
              <a className="hover:text-white" href="https://www.instagram.com/algouniversity/" target="_blank" rel="noreferrer">Instagram</a>
              <a className="hover:text-white" href="https://www.linkedin.com/school/algouniversity/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="hover:text-white" href="https://www.youtube.com/@audevday" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
          <div className="text-sm text-neutral-500 sm:text-right">
            © {new Date().getFullYear()} AlgoUniversity · Hyderabad
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
        <div className="mx-3 mb-3 rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur px-4 py-3 shadow-lg flex items-center justify-between">
          <div>
            <div className="text-xs text-neutral-300">AU Hiring Tournament</div>
            <div className="text-[11px] text-neutral-400">Skill-first, invite-only event</div>
          </div>
          <button onClick={() => setOpen(true)} className="rounded-full bg-white text-neutral-900 text-sm font-semibold px-4 py-2">
            Register
          </button>
        </div>
      </div>

      {/* Registration Modal */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-xl rounded-2xl bg-neutral-950 ring-1 ring-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h3 className="font-semibold text-neutral-100">Register for AU Hiring Tournament</h3>
              <button className="text-neutral-400 hover:text-neutral-200" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>
            {!submitted ? (
              <form
                className="p-5 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const fd = new FormData(form);
                  const requiredFields = ['fullName','email','phone','track'];
                  for (const k of requiredFields) {
                    if (!String(fd.get(k) || '').trim()) {
                      alert('Please fill all required fields.');
                      return;
                    }
                  }
                  setSubmitted(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm text-neutral-400" htmlFor="fullName">Full Name</label>
                    <input id="fullName" name="fullName" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300/50" placeholder="Enter full name" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm text-neutral-400" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300/50" placeholder="name@email.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm text-neutral-400" htmlFor="cc">Country Code</label>
                    <select id="cc" name="cc" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300/50">
                      <option value="+91">+91 India</option>
                      <option value="+1">+1 US/Canada</option>
                      <option value="+44">+44 UK</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 grid gap-2">
                    <label className="text-sm text-neutral-400" htmlFor="phone">Phone (WhatsApp)</label>
                    <input id="phone" name="phone" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300/50" placeholder="98765 43210" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm text-neutral-400" htmlFor="org">College / Company</label>
                    <input id="org" name="org" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300/50" placeholder="IIIT-H / ABC Corp" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm text-neutral-400" htmlFor="track">Your Track</label>
                    <select id="track" name="track" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300/50">
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
                  <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-white text-neutral-900 px-5 py-2.5 font-medium hover:bg-neutral-200 active:scale-[.99] transition">Submit</button>
                  <button type="button" onClick={() => setOpen(false)} className="text-sm text-neutral-400 hover:text-neutral-200">Cancel</button>
                </div>
                <p className="text-xs text-neutral-500">By registering, you agree to receive event updates on WhatsApp.</p>
              </form>
            ) : (
              <div className="p-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
                  <div className="text-lg font-medium text-neutral-100">Thanks for registering!</div>
                  <p className="text-sm text-neutral-400 mt-2">We b4ll reach out on WhatsApp with next steps and your event details.</p>
                  <button onClick={() => { setOpen(false); setSubmitted(false); }} className="mt-4 inline-flex items-center justify-center rounded-lg bg-white text-neutral-900 px-5 py-2.5 font-medium hover:bg-neutral-200">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
