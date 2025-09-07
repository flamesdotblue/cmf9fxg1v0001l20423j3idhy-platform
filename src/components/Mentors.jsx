export default function Mentors() {
  return (
    <div className="container mx-auto px-4">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Meet our mentors</h3>
      <p className="text-white/70 text-center mb-8 text-sm">Learn from engineers who've shipped at Google, Apple, Microsoft, and more.</p>

      <Carousel images={MENTOR_IMAGES} />

      <section id="testimonials" className="mt-14 md:mt-16">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Community stories</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/hN6qtn_rUng" title="Testimonial 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
            </div>
            <p className="mt-3 text-sm text-white/85">Jhanwwee showcased her skills in the Hiring Tournament and got referred to Amazon.</p>
          </Card>

          <Card>
            <User name="Polkam Srinidhi" date="Sep 2" />
            <p className="text-sm text-white/85">
              “This workshop was so wholesome! Complex DSA topic like Graphs is now so easy, thanks to Manas sir. I was so excited to meet him in‑person.”
            </p>
            <a className="mt-3 inline-block text-xs text-cyan-300 hover:text-white transition" href="https://www.linkedin.com/feed/update/urn:li:activity:7234356533797511168/" target="_blank" rel="noreferrer">View on LinkedIn →</a>
          </Card>

          <Card>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/v2i7gqAfyw4" title="Testimonial 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
            </div>
            <p className="mt-3 text-sm text-white/85">Satvik on cracking product‑based companies and how the right mentorship accelerates growth.</p>
          </Card>

          <Card>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/DCiliMl3Coo" title="Testimonial 3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
            </div>
            <p className="mt-3 text-sm text-white/85">Aditi got placed at ADP as a fresher after impressing mentors at AUHT July Edition.</p>
          </Card>

          <Card>
            <User name="Yuvraj Kollur" date="Sep 2" />
            <p className="text-sm text-white/85">
              “Had so much fun participating in the coding contest and making the Hall of Fame! Immense thanks to Manas for exceptional mentorship.”
            </p>
            <a className="mt-3 inline-block text-xs text-cyan-300 hover:text-white transition" href="https://www.linkedin.com/feed/update/urn:li:activity:7234542677340405760/" target="_blank" rel="noreferrer">View on LinkedIn →</a>
          </Card>

          <Card>
            <User name="Abhinay Marise" date="Feb 2" />
            <p className="text-sm text-white/85">
              “Hands‑on project building, a clear DSA roadmap, and 1:1 mentorship sessions. Absolutely love the AlgoUniversity community!”
            </p>
            <a className="mt-3 inline-block text-xs text-cyan-300 hover:text-white transition" href="https://www.linkedin.com/feed/update/urn:li:activity:7291862499757375488/" target="_blank" rel="noreferrer">View on LinkedIn →</a>
          </Card>
        </div>
      </section>
    </div>
  );
}

function Carousel({ images }) {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="mentor-viewport overflow-x-auto no-scrollbar">
          <ul className="mentor-track grid grid-flow-col auto-cols-[72%] sm:auto-cols-[42%] md:auto-cols-[28%] gap-4">
            {images.map((src, i) => (
              <li key={i} className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                <img src={src} alt="Mentor" className="w-full h-auto object-cover" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
      `}</style>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
      {children}
    </div>
  );
}

function User({ name, date }) {
  return (
    <div className="flex items-start justify-between mb-3">
      <div>
        <div className="font-medium text-white/90">{name}</div>
        <div className="text-xs text-white/60">{date}</div>
      </div>
      <img className="h-6 w-6 opacity-80" src="https://cdn-icons-png.flaticon.com/512/3128/3128329.png" alt="LinkedIn" />
    </div>
  );
}

const MENTOR_IMAGES = [
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/3_TenBkEV.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/4_gqUAHXB.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/1_WZtEJZF.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/2_LHU8iWP.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/5_XlJTcvs.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/7.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/6.png',
];
