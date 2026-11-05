import { useState } from 'react'
import Reveal from '../components/Reveal'
import tankAgitator from '../assets/tank-agitator.jpg'
import ribbonInner from '../assets/ribbon-inner.jpg'
import dryer from '../assets/dryer.jpg'
import susPart from '../assets/sus-part.jpg'

type Product = {
  no: string
  title: string
  en: string
  desc: string
  image: string
  alt: string
}

const products: Product[] = [
  {
    no: '01',
    title: '스테인리스 탱크',
    en: 'SUS TANKS',
    desc: '싱글, 싱글 교반, 3중 자켓 및 교반 탱크 등 규격과 용도에 맞는 탱크를 제작합니다.',
    image: tankAgitator,
    alt: '싱글 교반 탱크',
  },
  {
    no: '02',
    title: '열교환기 / 믹서',
    en: 'HEAT EXCHANGER & MIXER',
    desc: '열교환기와 리본믹서 날개 등 난류 구조부까지 정밀 가공·용접합니다.',
    image: ribbonInner,
    alt: '리본믹서 날개',
  },
  {
    no: '03',
    title: '건조기',
    en: 'DRYER',
    desc: '대형 건조기 본체와 배관 연계부를 현장 조건에 맞춰 제작합니다.',
    image: dryer,
    alt: '대형 건조기',
  },
  {
    no: '04',
    title: '부품·프레임·지그',
    en: 'PARTS, FRAME & JIG',
    desc: 'SUS 관련 부품, 프레임 및 변형 방지 지그를 제품별로 설계 제작합니다.',
    image: susPart,
    alt: 'SUS 부품 제작',
  },
]

export default function Products() {
  const [active, setActive] = useState(0)

  return (
    <section id="products" className="border-b border-white/10 bg-[#0d0d10]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.35em] text-[#4d96d6]">02 — PRODUCTS</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-5xl font-bold uppercase italic leading-none text-white md:text-8xl">
            What we <span className="text-outline">fabricate</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ul className="border-t border-white/10">
              {products.map((p, i) => (
                <Reveal as="li" key={p.no} delay={i * 60}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className={`group flex w-full items-baseline gap-4 border-b border-white/10 py-6 text-left transition-colors md:gap-8 md:py-8 ${
                      active === i ? 'bg-white/[0.03]' : ''
                    } focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#4d96d6]`}
                  >
                    <span
                      className={`font-display text-sm font-semibold italic transition-colors ${
                        active === i ? 'text-[#4d96d6]' : 'text-[#55555e]'
                      }`}
                    >
                      /{p.no}
                    </span>
                    <span
                      className={`flex-1 font-display text-2xl font-bold uppercase italic tracking-tight transition-colors md:text-4xl ${
                        active === i ? 'text-white' : 'text-[#8a8a92]'
                      }`}
                    >
                      {p.title}
                    </span>
                    <span className="hidden text-xs tracking-[0.25em] text-[#55555e] md:inline">{p.en}</span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      active === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-4 pb-8 pl-10 pr-2 md:flex-row md:items-center md:justify-between md:pl-20">
                        <p className="max-w-md text-sm leading-relaxed text-[#c9c9cf]">{p.desc}</p>
                        <img
                          src={p.image}
                          alt={p.alt}
                          loading="lazy"
                          className="h-40 w-full border border-white/10 object-cover md:hidden"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={150} className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-24">
              <div className="relative border border-white/10">
                <img
                  key={products[active].image}
                  src={products[active].image}
                  alt={products[active].alt}
                  className="aspect-[4/5] w-full object-cover"
                />
                <span className="absolute bottom-0 left-0 bg-[#4d96d6] px-4 py-2 font-display text-sm font-bold uppercase italic tracking-wider text-[#0a0a0c]">
                  {products[active].en}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#9b9ba4]">{products[active].desc}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
