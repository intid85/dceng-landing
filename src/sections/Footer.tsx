export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0c]">
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-bold italic text-white">_DCENG</p>
            <p className="mt-1 text-sm text-[#9b9ba4]">덕천산업 — 스테인리스 외주제작 전문</p>
          </div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-[#55555e]">
            manufacture <span className="text-[#4d96d6]">and</span> trading
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#55555e] md:flex-row md:items-center md:justify-between">
          <p>© {year} 덕천산업. since 1985.</p>
          <p>탱크 · 열교환기 · 건조기 · 믹서 · SUS 부품 · 지그</p>
        </div>
      </div>
    </footer>
  )
}
