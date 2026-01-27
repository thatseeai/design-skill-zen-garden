import { useState } from "react"
import { ChevronRight, ChevronLeft, Copy, Check, FileText } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SkillPanelProps {
  skillContent: string
  className?: string
}

export function SkillPanel({ skillContent, className }: SkillPanelProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(skillContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div
      className={cn(
        "fixed right-0 top-1/2 z-50 -translate-y-1/2 pointer-events-none",
        className
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "pointer-events-auto absolute right-full top-1/2 -translate-y-1/2 flex h-auto flex-col items-center gap-2 rounded-l-xl border-2 border-r-0 border-primary bg-primary px-3 py-4 text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
        )}
        aria-label={isOpen ? "Close skill panel" : "Open skill panel"}
      >
        <FileText className="h-5 w-5" />
        <span
          className="text-sm font-bold tracking-wide"
          style={{ writingMode: "vertical-rl" }}
        >
          Applied Skill
        </span>
        {isOpen ? (
          <ChevronRight className="h-5 w-5" />
        ) : (
          <ChevronLeft className="h-5 w-5" />
        )}
      </button>

      {/* Panel */}
      <div
        className={cn(
          "flex max-h-[80vh] w-96 flex-col rounded-l-lg border border-r-0 bg-background shadow-xl transition-all duration-300",
          isOpen ? "pointer-events-auto opacity-100" : "w-0 opacity-0"
        )}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <h2 className="font-semibold">Applied Skill</h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-1"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </Button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-4">
          <pre className="whitespace-pre-wrap rounded-lg bg-muted p-4 font-mono text-sm leading-relaxed">
            {skillContent}
          </pre>
        </div>
      </div>
    </div>
  )
}
