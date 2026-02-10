import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleIPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        <div className="fixed right-8 bottom-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,163,255,0.52)_0%,rgba(79,163,255,0)_68%)] pointer-events-none z-0" />
        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style I: Premium Care Editorial" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
