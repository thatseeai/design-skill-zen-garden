import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import skillMd from "./skill.md?raw"

export default function StyleEPage() {
  return (
    <>
      {/* Industrial Architecture Background with Dark Overlay */}
      <div className="fixed inset-0 z-0">
        {/* Background image - using a placeholder for industrial architecture */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=2940&auto=format&fit=crop')`,
            filter: 'grayscale(100%)',
          }}
        />
        {/* Dark overlay to ensure content readability */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
      </div>

      {/* Global styles for this theme */}
      <style>{`
        .style-e-page {
          font-family: Georgia, 'Times New Roman', serif;
        }
        .style-e-page h1,
        .style-e-page h2,
        .style-e-page h3,
        .style-e-page .display-heading {
          font-family: Impact, 'Arial Black', sans-serif;
          font-weight: 900;
          letter-spacing: 0.02em;
        }

        /* Remove all border radius globally */
        .style-e-page * {
          border-radius: 0 !important;
        }

        /* Ensure high contrast */
        .style-e-page {
          color: #ffffff;
        }

        /* Scrollbar styling for dark theme */
        .style-e-page ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        .style-e-page ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        .style-e-page ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .style-e-page ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>

      {/* Main content with relative positioning above background */}
      <div className="style-e-page relative z-10 min-h-screen bg-[#1a1a1a]">
        <StandardShowcase styles={styles} pageName="INDUSTRIAL ARCHITECTURE" />
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
