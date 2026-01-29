import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleGPage() {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "")
    const bambooPath = `${base}/assets/style-g/bamboo_leaves_right.png`
    const bgPath = `${base}/assets/style-g/zen_garden_background.jpg`

    return (
        <>
            <style>{themeStyles}</style>
            {/* Fixed background layer */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgPath})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center top'
                }}
            />

            {/* Zen Header - Minimalist ink brush style */}
            <div className="fixed top-0 left-0 w-full pointer-events-none z-[100]">
                <div
                    className="h-1"
                    style={{ background: '#2c4a29' }}
                />
                <div
                    className="h-[2px] mt-[2px]"
                    style={{
                        background: 'linear-gradient(90deg, #2c4a29 0%, #9e2a2b 50%, #2c4a29 100%)'
                    }}
                />
            </div>

            {/* Bamboo Decoration Right */}
            <div
                className="fixed bottom-0 right-0 w-72 h-screen pointer-events-none z-[60] opacity-50"
                style={{
                    backgroundImage: `url(${bambooPath})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right bottom'
                }}
            />

            {/* Main content - same structure as other pages */}
            <div className={`${themeClassName} text-foreground min-h-screen relative z-10`}>
                <StandardShowcase styles={styles} pageName="Style G: CSS Zen Garden" />
                <SkillPanel skillContent={skillMd} />
            </div>
        </>
    )
}
