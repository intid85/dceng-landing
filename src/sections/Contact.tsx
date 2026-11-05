import { useState, type FormEvent } from 'react'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const lines = [
      '[견적 문의 — 덕천산업]',
      `회사명: ${data.get('company') || '-'}`,
      `담당자: ${data.get('name') || '-'}`,
      `연락처: ${data.get('phone') || '-'}`,
      `문의 품목: ${data.get('item') || '-'}`,
      `요청 사항: ${data.get('message') || '-'}`,
    ]
    navigator.clipboard
      .writeText(lines.join('\n'))
      .then(() => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 4000)
      })
      .catch(() => {
        window.alert('복사에 실패했습니다. 내용을 직접 선택해 복사해 주세요.')
      })
  }

  const inputCls =
    'w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-[#55555e] transition-colors focus:border-[#4d96d6] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4d96d6]'

  return (
    <section id="contact" className="bg-[#0d0d10]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-medium tracking-[0.35em] text-[#4d96d6]">06 — CONTACT</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-5xl font-bold uppercase italic leading-none text-white md:text-7xl">
                도면 있으면
                <br />
                <span className="text-outline-steel">볂주세요</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-[#c9c9cf] md:text-base">
                도면이나 사진, 간단한 스케치만 있어도 됩니다. 재질 두께, 용접 방향, 검사 조건까지
                함께 알려주시면 견적 범위를 빠르게 좁혀드립니다. 작성 내용은 클립보드에 복사되어
                기존 채널로 바로 붙여넣으실 수 있습니다.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="mt-8 space-y-3 text-sm text-[#9b9ba4]">
                <li className="flex gap-3">
                  <span className="font-display font-bold italic text-[#4d96d6]">01</span>
                  도면 확인 및 현장 작업계획 수립
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-bold italic text-[#4d96d6]">02</span>
                  SUS 두께·용접 방향 반영 지그 제작
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-bold italic text-[#4d96d6]">03</span>
                  RT / LT 검사 후 출하 및 설치
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="border border-white/10 p-6 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs tracking-[0.2em] text-[#9b9ba4]">회사명</span>
                  <input name="company" type="text" placeholder="예: ○○식품(주)" className={inputCls} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs tracking-[0.2em] text-[#9b9ba4]">담당자 성함</span>
                  <input name="name" type="text" placeholder="홍길동" className={inputCls} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs tracking-[0.2em] text-[#9b9ba4]">연락처</span>
                  <input name="phone" type="tel" placeholder="010-0000-0000" className={inputCls} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs tracking-[0.2em] text-[#9b9ba4]">문의 품목</span>
                  <select name="item" className={`${inputCls} bg-[#0d0d10]`} defaultValue="탱크">
                    <option value="탱크">탱크 (싱글 / 교반 / 3중 자켓)</option>
                    <option value="열교환기/믹서">열교환기 / 리본믹서</option>
                    <option value="건조기">건조기</option>
                    <option value="부품/프레임/지그">부품·프레임·지그</option>
                    <option value="기타">기타</option>
                  </select>
                </label>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-xs tracking-[0.2em] text-[#9b9ba4]">요청 사항</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="재질(SUS304/316 등), 두께, 규격, 수량, 검사 조건 등을 알려주세요."
                    className={`${inputCls} resize-y`}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-8 w-full bg-[#4d96d6] px-8 py-4 font-display text-lg font-bold uppercase italic tracking-wider text-[#0a0a0c] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                문의 내용 복사하기
              </button>
              <p aria-live="polite" className={`mt-4 text-sm transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[#4d96d6]">복사되었습니다.</span> 사용 중이신 이메일이나 메신저에 붙여넣어 전송해 주세요.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
