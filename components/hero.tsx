"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FiArrowRight, FiLinkedin, FiMail, FiPhone } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0" />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 0.3,
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h2
                className="text-2xl font-medium text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.h2>
              <motion.h1
                className="text-4xl md:text-6xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Angella Mulikatete
              </motion.h1>
              <motion.h3
                className="text-2xl md:text-3xl font-semibold text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Software Developer
              </motion.h3>
            </div>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              To leverage my technical skills and experience to develop innovative and efficient software solutions that
              meet the needs and exceed the expectations of stakeholders.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Button asChild size="lg">
                <Link href="#contact">
                  Contact Me <FiArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#experience">View Experience</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Link
                href="https://www.linkedin.com/in/angella-mulikatete-7b83371a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <FiLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:mulikateteangella@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <FiMail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="tel:+256703523137">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <FiPhone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-48 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/assets/images/Angellina.jpeg"
                      alt="Angella Mulikatete"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Angella Mulikatete</h3>
                  <p className="text-muted-foreground">Software Developer</p>
                  <div className="mt-6 space-y-2 text-sm">
                    <p>Kawaala, Kampala</p>
                    <p>+256-703523137</p>
                    <p>mulikateteangella@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

