import Reveal from '../components/Reveal'

const clients = [
  { name: '대성 후드텍', items: '탱크', volume: '500억', region: '경기도 수원시', years: '30년' },
  { name: '두성엔지니어링', items: '탱크', volume: '30억', region: '경기도 안성시', years: '20년' },
  { name: '유진테크 (삼진)', items: '건조기 / 탱크', volume: '20억', region: '경기도 평택시', years: '30년' },
  { name: '니로코리아 (아인시스템)', items: '건조기 / 탱크', volume: '20억', region: '경기도 화성시', years: '30년' },
]

export default function Clients() {
  return (
    <section id="clients" className="border-b border-white/10 bg-[#0d0d10]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.35em] text-[#4d96d6]">04 — CLIENTS</p>
        </Reveal>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal delay={80}>
            <h2 className="font-display text-5xl font-bold uppercase italic leading-none text-white md:text-8xl">
              길게 가는 <span className="text-outline">파트너십</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-sm text-sm leading-relaxed text-[#9b9ba4]">
              그 외 맨홀, 투시창 등 탱크 부속품 유통 및 설비·제작업체 납품처 70곳 이상과 거래하고 있습니다.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 overflow-x-auto no-scrollbar">
          <table className="w-full min-w-[720px] border-t border-white/10 text-left">
            <thead>
              <tr className="border-b border-white/10 text-xs tracking-[0.2em] text-[#55555e]">
                <th scope="col" className="py-4 pr-4 font-medium">거래처</th>
                <th scope="col" className="py-4 pr-4 font-medium">납품 품목</th>
                <th scope="col" className="py-4 pr-4 font-medium">거래 매출(연)</th>
                <th scope="col" className="py-4 pr-4 font-medium">소재지</th>
                <th scope="col" className="py-4 font-medium">거래 기간</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c, i) => (
                <tr
                  key={c.name}
                  className="group border-b border-white/10 transition-colors hover:bg-white/[0.04]"
                >
                  <Reveal as="td" delay={i * 60} className="py-6 pr-4">
                    <span className="font-display text-xl font-bold italic text-white transition-colors group-hover:text-[#4d96d6] md:text-2xl">
                      {c.name}
                    </span>
                  </Reveal>
                  <td className="py-6 pr-4 text-sm text-[#c9c9cf]">{c.items}</td>
                  <td className="py-6 pr-4 font-display text-lg font-semibold text-white">{c.volume}</td>
                  <td className="py-6 pr-4 text-sm text-[#9b9ba4]">{c.region}</td>
                  <td className="py-6 font-display text-lg font-semibold italic text-[#4d96d6]">{c.years}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
