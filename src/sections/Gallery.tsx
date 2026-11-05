import Reveal from '../components/Reveal'
import siteInstall from '../assets/site-install.jpg'
import mixer1 from '../assets/mixer-1.jpeg'
import mixer2 from '../assets/mixer-2.jpeg'
import tankVessels from '../assets/tank-vessels.jpg'
import jacketTube from '../assets/jacket-tube.jpg'
import rtParts from '../assets/rt-parts.jpg'
import jigDome from '../assets/jig-dome.jpg'
import tankTop from '../assets/tank-top.jpg'

const photos = [
  { src: siteInstall, alt: '탱크 현장 설치', span: 'md:col-span-7' },
  { src: mixer1, alt: '리본믹서 조립', span: 'md:col-span-5' },
  { src: jacketTube, alt: '튜브 장착 작업', span: 'md:col-span-4' },
  { src: tankVessels, alt: '탱크 라인', span: 'md:col-span-4' },
  { src: mixer2, alt: '믹서 제작', span: 'md:col-span-4' },
  { src: jigDome, alt: '지그 제작', span: 'md:col-span-5' },
  { src: rtParts, alt: '부품 가공', span: 'md:col-span-7' },
  { src: tankTop, alt: '교반 탱크 상부', span: 'md:col-span-12 aspect-[21/9]' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="border-b border-white/10 bg-[#0a0a0c]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.35em] text-[#4d96d6]">05 — FIELD</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-5xl font-bold uppercase italic leading-none text-white md:text-8xl">
            현장의 <span className="text-outline-steel">기록</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-12">
          {photos.map((p, i) => (
            <Reveal as="figure" key={p.alt} delay={(i % 3) * 100} className={`group min-w-0 ${p.span}`}>
              <div className="overflow-hidden border border-white/10">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                    p.span.includes('21/9') ? 'aspect-[21/9]' : 'aspect-[4/3]'
                  }`}
                />
              </div>
              <figcaption className="mt-2 text-xs tracking-wide text-[#9b9ba4]">{p.alt}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
