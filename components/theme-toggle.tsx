"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-2">
        <div className="w-5 h-5" />
      </div>
    )
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-border hover:bg-muted transition-all text-foreground hover:border-primary"
      aria-label="Toggle theme"
      title="Toggle theme (Light/Dark/System)"
    >
      {theme === "light" && <Sun size={20} className="text-foreground" />}
      {theme === "dark" && <Moon size={20} className="text-foreground" />}
      {(theme === "system" || theme === undefined) && <Monitor size={20} className="text-foreground" />}
    </button>
  )
}

