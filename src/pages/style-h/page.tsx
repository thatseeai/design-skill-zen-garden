import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleHPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        <div className="fixed top-16 right-8 w-24 h-24 rounded-full border border-[#d39b2a]/40 bg-[radial-gradient(circle,_rgba(15,122,114,0.2)_0%,_rgba(180,56,47,0.12)_45%,_transparent_70%)] pointer-events-none z-[50] hidden md:block" />
        <div className="fixed bottom-14 right-10 w-14 h-14 rounded-full border border-[#b4382f]/35 bg-[radial-gradient(circle,_rgba(211,155,42,0.18)_0%,_transparent_68%)] pointer-events-none z-[50] hidden md:block" />
        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style H: Korean Dancheong" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
