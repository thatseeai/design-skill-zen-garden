import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleLPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground h-screen overflow-hidden`}>
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 l-halftone opacity-40 dark:opacity-24" />
          <div className="absolute -top-20 -left-16 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,131,229,0.88)_0%,rgba(255,131,229,0.42)_34%,rgba(255,131,229,0)_72%)] blur-[1px]" />
          <div className="absolute top-40 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(97,251,255,0.72)_0%,rgba(97,251,255,0.3)_36%,rgba(97,251,255,0)_74%)]" />
          <div className="absolute -bottom-24 left-1/3 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(163,114,255,0.64)_0%,rgba(163,114,255,0.22)_40%,rgba(163,114,255,0)_78%)]" />
        </div>

        <div className="fixed top-24 right-14 z-[1] hidden xl:block deco-heart" aria-hidden />
        <div className="fixed top-[10.5rem] right-44 z-[1] hidden 2xl:block deco-burst" aria-hidden />
        <div className="fixed bottom-28 right-16 z-[1] hidden xl:block deco-heart scale-75 opacity-80" aria-hidden />
        <div className="fixed bottom-20 left-[19rem] z-[1] hidden 2xl:block deco-burst scale-90" aria-hidden />

        <div className="absolute inset-0 z-10">
          <StandardShowcase styles={styles} pageName="Style L: Neon Kawaii Pop" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
