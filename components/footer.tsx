"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { FiLinkedin, FiMail, FiPhone, FiArrowUp } from "react-icons/fi"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link href="#home" className="text-2xl font-bold text-primary">
              Angella M.
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Software Developer specializing in web development with modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <Link
              href="https://www.linkedin.com/in/angella-mulikatete-7b83371a2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <FiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:mulikateteangella@gmail.com">
              <Button variant="outline" size="icon" className="rounded-full">
                <FiMail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="tel:+256703523137">
              <Button variant="outline" size="icon" className="rounded-full">
                <FiPhone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Angella Mulikatete. All rights reserved.
          </p>

          <Button variant="ghost" size="icon" className="rounded-full" onClick={scrollToTop}>
            <FiArrowUp className="h-5 w-5" />
            <span className="sr-only">Back to top</span>
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}

