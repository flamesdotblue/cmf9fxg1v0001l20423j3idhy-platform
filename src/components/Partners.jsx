export default function Partners() {
  return (
    <div className="bg-black/95 py-14 md:py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-8">Some of our Hiring & Referral Partners</h3>
        <p className="text-white/70 text-center mb-8 text-sm">We collaborate with top recruiters and product teams to accelerate high‑quality matches.</p>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/[0.04] to-transparent">
          <Marquee images={logosRow1} duration={22} pauseOnHover />
          <Marquee images={logosRow2} duration={24} reverse pauseOnHover className="mt-6" />
        </div>
      </div>
    </div>
  );
}

function Marquee({ images, duration = 20, reverse = false, className = '', pauseOnHover = false }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className={`flex gap-10 whitespace-nowrap will-change-transform ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `${reverse ? 'scrollReverse' : 'scroll'} ${duration}s linear infinite`,
        }}
      >
        {images.concat(images).map((src, i) => (
          <img key={i} src={src} alt="partner" className="h-10 w-auto object-contain opacity-90" loading="lazy" />
        ))}
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scrollReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}

const logosRow1 = [
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/1_4gg3q2e.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/2_Wv3SRIb.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/3_cTXU1Zu.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/4_skw0D0b.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/5_KazqLcI.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/6_usMgD14.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/7_tcL1M2N.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/8_Vnhhc9p.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/9_duC97cg.png',
];

const logosRow2 = [
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/10_9D5GyeY.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/11_Hb52hDj.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/12_NpkSGm1.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/13_4r1cwVc.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/14_OzhhAvb.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/15_wokRydi.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/16_esSpsEl.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/17_qIfpzvh.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/18_c62hM0h.png',
];
