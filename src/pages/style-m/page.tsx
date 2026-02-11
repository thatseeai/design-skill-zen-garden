import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleMPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 m-paper-grain opacity-24 dark:opacity-16" />
          <div className="absolute -top-28 right-[-6rem] h-[26rem] w-[26rem] rounded-full m-bloom-a m-float-slow" />
          <div className="absolute top-36 left-[-5rem] h-[24rem] w-[24rem] rounded-full m-bloom-b m-float-delay" />
          <div className="absolute bottom-[-8rem] left-[32%] h-[22rem] w-[22rem] rounded-full m-bloom-c m-float-slow" />
        </div>

        <div className="fixed top-24 right-12 z-[1] hidden xl:block text-[#8f5471]/70 dark:text-[#f1bed4]/60 text-sm tracking-[0.22em] uppercase m-whisper">
          Name to Flower
        </div>
        <div className="fixed bottom-14 right-14 z-[1] hidden 2xl:block text-[#4f6d76]/70 dark:text-[#b6d7de]/60 text-xs tracking-[0.2em] uppercase m-whisper-delay">
          Unforgettable Glance
        </div>

        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style M: Called Into Bloom" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
