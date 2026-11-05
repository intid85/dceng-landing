import tankSingle from '../assets/tank-single.jpg'
import jacketLine from '../assets/jacket-line.jpg'
import siteInstall from '../assets/site-install.jpg'
import ribbonMixer from '../assets/ribbon-mixer.jpg'

const strip = [
  { src: siteInstall, alt: '스테인리스 탱크 현장 설치' },
  { src: jacketLine, alt: '3중 자켓 탱크 제작 라인' },
  { src: tankSingle, alt: '싱글 탱크 완제품' },
  { src: ribbonMixer, alt: '리본믹서 제작' },
]

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col bg-[#0a0a0c]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pt-16 md:px-10">
        <p className="reveal is-visible flex items-center gap-3 text-xs font-medium tracking-[0.35em] text-[#9b9ba4]">
          <span className="inline-block h-px w-10 bg-[#4d96d6]" aria-hidden="true" />
          STAINLESS STEEL FABRICATION — EST. 1985
        </p>

        <h1 className="mt-6 font-display font-bold italic leading-[0.9] tracking-tight">
          <span className="block text-[19vw] text-white md:text-[11rem] lg:text-[13rem]">_DCENG</span>
          <span className="text-outline-steel block text-[10vw] md:text-[5.5rem] lg:text-[7rem]">DEOKCHEON</span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-[#c9c9cf] md:text-lg">
            1985년부터 스테인리스 탱크, 열교환기, 건조기, 믹서를 직접 설계·제작해 온
            외주제작 전문 업체입니다. 도면 한 장에서 현장 설치까지, 긴 호흡의 파트너십을 만듭니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-[#4d96d6] px-7 py-3.5 font-display text-base font-bold uppercase tracking-wider text-[#0a0a0c] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              제작 품목 보기
            </a>
            <a
              href="#contact"
              className="border border-white/25 px-7 py-3.5 font-display text-base font-bold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white hover:text-[#0a0a0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              견적 문의
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10">
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="animate-marquee flex shrink-0">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0">
                {strip.map((img) => (
                  <img
                    key={`${dup}-${img.alt}`}
                    src={img.src}
                    alt=""
                    className="h-32 w-56 border-r border-white/10 object-cover grayscale-[35%] md:h-40 md:w-72"
                    loading={dup === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
