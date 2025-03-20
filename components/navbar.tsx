"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { FiMenu, FiX } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold"
        >
          <Link href="#home" className="text-primary hover:text-primary/80 transition-colors">
            Angella M.
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={item.href} className="text-foreground/80 hover:text-primary transition-colors">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <FiMenu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors py-2 text-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() =>
                  document.querySelector("[data-radix-collection-item]")?.dispatchEvent(new Event("click"))
                }
              >
                <FiX className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

