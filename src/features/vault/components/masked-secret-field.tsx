"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface MaskedSecretFieldProps {
  label: string
  value: string
  onCopy?: (value: string) => void
}

export default function MaskedSecretField({ label, value, onCopy }: MaskedSecretFieldProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [justCopied, setJustCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setJustCopied(true)
    setTimeout(() => setJustCopied(false), 2000)
    onCopy?.(value)
  }

  const maskValue = (str: string) => {
    const visibleChars = Math.min(4, Math.ceil(str.length / 3))
    return str.substring(0, visibleChars) + "•".repeat(Math.max(8, str.length - visibleChars))
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground capitalize">{label.replace(/_/g, " ")}</label>
        <div className="flex gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsRevealed(!isRevealed)}
            className="h-7 w-7 p-0 hover:bg-accent"
            title={isRevealed ? "Hide" : "Show"}
          >
            {isRevealed ? (
              <EyeOff className="w-3.5 h-3.5 text-muted-foreground" />
            ) : (
              <Eye className="w-3.5 h-3.5 text-muted-foreground" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-7 w-7 p-0 hover:bg-accent"
            title="Copy to clipboard"
          >
            {justCopied ? (
              <Check className="w-3.5 h-3.5 text-green-500" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "bg-background/50 border rounded-md p-3 font-mono text-sm",
          "transition-all duration-200 overflow-hidden break-all text-foreground",
          isRevealed 
            ? "border-teal-500 bg-teal-500/10 shadow-lg shadow-teal-500/20" 
            : "border-border hover:border-teal-500/50",
        )}
      >
        {isRevealed ? value : maskValue(value)}
      </div>
    </div>
  )
}
