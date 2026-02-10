import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleJPage() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "")
  const furTexture = `${base}/assets/style-j/fur-texture.svg`
  const furCoat = `${base}/assets/style-j/fur-coat-hero.svg`

  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        <div
          className="fixed inset-0 z-0 opacity-24 dark:opacity-8 pointer-events-none"
          style={{
            backgroundImage: `url(${furTexture})`,
            backgroundSize: "900px auto",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="fixed bottom-0 right-0 w-[20vw] min-w-[220px] max-w-[320px] pointer-events-none z-[1] hidden xl:block">
          <img
            src={furCoat}
            alt="Stylized fur coat illustration"
            className="h-full w-full object-contain object-bottom-right opacity-30 dark:opacity-22"
            loading="lazy"
          />
        </div>

        <div className="fixed bottom-6 right-6 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(200,154,95,0.22)_0%,rgba(200,154,95,0)_70%)] pointer-events-none z-[1] hidden xl:block" />

        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style J: Fur Couture" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
