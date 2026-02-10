import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleKPage() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "")
  const stickerLines = `${base}/assets/style-k/sticker-lines.svg`

  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-32 dark:opacity-20"
          style={{
            backgroundImage: `url(${stickerLines})`,
            backgroundSize: "860px auto",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="fixed top-24 right-10 z-[1] hidden xl:flex h-14 px-5 items-center rounded-[999px] bg-[#c7e58f] text-[#4f6f2f] text-2xl font-black sticker-cut pointer-events-none">
          GO!
        </div>

        <div className="fixed top-[10.5rem] right-16 z-[1] hidden 2xl:flex h-12 px-4 items-center rounded-[999px] bg-[#eae3f6] text-[#6f5a95] text-xl font-bold sticker-cut pointer-events-none">
          don't forget
        </div>

        <div className="fixed bottom-24 right-14 z-[1] hidden xl:block h-20 w-20 rounded-full bg-[#f7e57c] sticker-cut pointer-events-none" />

        <div className="fixed top-44 right-44 z-[1] hidden 2xl:block h-14 w-14 rounded-full bg-[#d6ecf7] sticker-cut pointer-events-none" />

        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style K: Pastel Sticker Pack" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
