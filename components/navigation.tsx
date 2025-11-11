"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, FileText, Home, Shield } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 font-bold text-xl">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Shield size={20} className="text-primary-foreground" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-700">خدماتنا</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground hover:text-primary transition font-medium"
            >
              <Home size={18} />
              الرئيسية
            </Link>
            <Link
              href="/#links"
              className="flex items-center gap-2 text-foreground hover:text-primary transition font-medium"
            >
              <FileText size={18} />
              الخدمات
            </Link>
            <Link
              href="/privacy"
              className="flex items-center gap-2 text-foreground hover:text-primary transition font-medium"
            >
              <FileText size={18} />
              الخصوصية
            </Link>
            <Link
              href="/security"
              className="flex items-center gap-2 text-foreground hover:text-primary transition font-medium"
            >
              <Shield size={18} />
              الأمان
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            <Link href="/" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition font-medium">
              الرئيسية
            </Link>
            <Link
              href="/#links"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition font-medium"
            >
              الخدمات
            </Link>
            <Link
              href="/privacy"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition font-medium"
            >
              الخصوصية
            </Link>
            <Link
              href="/security"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition font-medium"
            >
              الأمان
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
