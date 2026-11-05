import Reveal from '../components/Reveal'
import jigFrame from '../assets/jig-frame.jpg'

const stats = [
  { value: '1985', label: '창립 이후', suffix: '년' },
  { value: '70', label: '설비·제작업체 납품', suffix: '곳 +' },
  { value: '30', label: '최장 거래 기간', suffix: '년' },
]

export default function About() {
  return (
    <section id="about" className="border-b border-white/10 bg-[#0a0a0c]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.35em] text-[#4d96d6]">01 — COMPANY</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-snug text-white md:text-5xl md:leading-tight">
            도면 확인부터 지그 제작, 용접, 검사, 설치까지 —
            <span className="text-[#9b9ba4]"> 스테인리스 제작의 전 과정을 한 곳에서.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal delay={120} className="md:col-span-5">
            <figure>
              <img
                src={jigFrame}
                alt="SUS 변형 방지를 위한 제품별 지그 제작 현장"
                className="aspect-[4/3] w-full border border-white/10 object-cover"
                loading="lazy"
              />
              <figcaption className="mt-3 text-xs tracking-wide text-[#9b9ba4]">
                도면 확인 및 현장 작업계획 수립 후, SUS 두께와 용접 방향을 고려한 제품별 지그 제작
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col justify-between md:col-span-7">
            <Reveal delay={200}>
              <p className="max-w-2xl text-base leading-loose text-[#c9c9cf] md:text-lg">
                덕천산업은 1985년 설립 이후 스테인리스(SUS) 압력용기와 설비를 외주제작해 온
                제조·무역 전문 기업입니다. 싱글 탱크에서 3중 자켓 교반 탱크, 열교환기, 건조기,
                리본믹서에 이르기까지 제품별 최적의 지그를 자체 제작하고, 방사선투과검사(RT)와
                누설검사(LT)로 품질을 검증합니다. 대성후드텍, 두성엔지니어링, 유진테크, 니로코리아 등
                주요 설비 업체와 20년에서 30년에 이르는 장기 거래를 이어오고 있습니다.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 120} className="px-4 py-8 text-center md:px-8">
                  <p className="font-display text-4xl font-bold italic text-white md:text-6xl">
                    {s.value}
                    <span className="ml-1 text-lg not-italic text-[#4d96d6] md:text-2xl">{s.suffix}</span>
                  </p>
                  <p className="mt-2 text-xs tracking-wider text-[#9b9ba4] md:text-sm">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
