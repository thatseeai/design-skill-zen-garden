import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleFPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground`}>
        <StandardShowcase styles={styles} pageName="Style F: Vintage Baroque" />
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
