import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: '회사소개' },
  { href: '#products', label: '제작품목' },
  { href: '#quality', label: '품질관리' },
  { href: '#clients', label: '거래처' },
  { href: '#gallery', label: '현장갤러리' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-[#0a0a0c]/90 backdrop-blur-sm border-b border-white/10' : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="font-display text-xl font-bold italic tracking-wide text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4d96d6]">
            _DCENG
            <span className="ml-3 hidden text-xs font-medium not-italic tracking-[0.2em] text-[#9b9ba4] sm:inline">
              덕천산업
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[#c9c9cf] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4d96d6]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-[#4d96d6] px-4 py-2 text-sm font-semibold text-[#4d96d6] transition-colors hover:bg-[#4d96d6] hover:text-[#0a0a0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4d96d6]"
            >
              견적문의
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4d96d6]"
          >
            <span className={`h-px w-6 bg-white transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-white transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0c] md:hidden" role="dialog" aria-modal="true" aria-label="모바일 메뉴">
          <nav className="flex h-full flex-col justify-center gap-2 px-8" aria-label="모바일 메뉴">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-3xl font-semibold uppercase tracking-wide text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4d96d6]"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 bg-[#4d96d6] px-6 py-4 text-center font-display text-xl font-bold uppercase text-[#0a0a0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              견적문의
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
