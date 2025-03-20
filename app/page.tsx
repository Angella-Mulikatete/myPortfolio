"use client"

import { useEffect } from "react"
import { motion } from "motion/react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")
        if (element) {
          window.scrollTo({
            behavior: "smooth",
            top: element.offsetTop - 80,
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  )
}

