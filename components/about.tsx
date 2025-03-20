"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { FiUser, FiMapPin, FiMail, FiPhone } from "react-icons/fi"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Software Developer with experience in web development and a strong foundation in software
            engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FiUser className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-medium">Angella Mulikatete</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FiMapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Kawaala, Kampala</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FiPhone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+256-703523137</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FiMail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">mulikateteangella@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground mb-4">
                  I am a Software Developer with a BSc in Software Engineering from Makerere University. I specialize in
                  web development using modern technologies like React, Next.js, and Laravel.
                </p>
                <p className="text-muted-foreground mb-4">
                  My experience includes working on various projects during internships at Media Challenge Initiative,
                  Pegasus Technologies, and Boosted Technologies, where I developed websites, APIs, and internal
                  systems.
                </p>
                <p className="text-muted-foreground">
                  I'm passionate about creating efficient, user-friendly software solutions that solve real-world
                  problems and exceed stakeholder expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

