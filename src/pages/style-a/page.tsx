import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleAPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={themeClassName}>
        <StandardShowcase styles={styles} pageName="Style A: B2B SaaS Minimal" />
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
