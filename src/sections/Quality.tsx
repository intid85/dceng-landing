import Reveal from '../components/Reveal'
import rtWeld from '../assets/rt-weld.jpg'
import ltTest from '../assets/lt-test.jpg'

const items = [
  {
    code: 'RT',
    title: '방사선투과검사',
    en: 'Radiography',
    desc: '용접부 내외부 결함을 방사선 투과로 검사합니다.',
    image: rtWeld,
    alt: 'RT 용접 검사',
  },
  {
    code: 'LT',
    title: '누설검사',
    en: 'Leak Testing',
    desc: '수압 테스트 3KG 이상 진행, 요청 시 공기압 추가 주입(3~5KG)으로 이중 확인합니다.',
    image: ltTest,
    alt: '수압 누설 테스트',
  },
]

export default function Quality() {
  return (
    <section id="quality" className="border-b border-white/10 bg-[#0a0a0c]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.35em] text-[#4d96d6]">03 — QUALITY</p>
        </Reveal>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal delay={80}>
            <h2 className="font-display text-5xl font-bold uppercase italic leading-none text-white md:text-8xl">
              검사로 <span className="text-outline-steel">증명합니다</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-sm text-sm leading-relaxed text-[#9b9ba4]">
              모든 용기는 출하 전 비파괴검사와 압력 테스트를 거칩니다. 검사 기준은 도면과 고객 사양에 따라 적용합니다.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {items.map((q, i) => (
            <Reveal key={q.code} delay={i * 120} className="bg-[#0a0a0c]">
              <article className="group h-full">
                <div className="overflow-hidden">
                  <img
                    src={q.image}
                    alt={q.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-4xl font-bold italic text-[#4d96d6] md:text-5xl">{q.code}</span>
                    <h3 className="text-xl font-bold text-white md:text-2xl">{q.title}</h3>
                    <span className="text-xs tracking-[0.25em] text-[#55555e]">{q.en}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#c9c9cf]">{q.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
