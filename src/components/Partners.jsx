export default function Partners() {
  return (
    <div className="bg-neutral-950 py-14 md:py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center text-white">Some of our Hiring & Referral Partners</h3>
        <p className="text-neutral-400 text-center mt-2 mb-10 text-sm">We collaborate with top product companies and recruiters to accelerate high‑quality matches.</p>

        <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/[0.03] to-transparent">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
            {logos.map((src, i) => (
              <img key={i} src={src} alt="partner" className="h-10 w-auto object-contain opacity-90 grayscale hover:grayscale-0 transition" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
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
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/9_duC97cg.png',
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
