"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { FiAward, FiCalendar } from "react-icons/fi"

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic background and qualifications.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FiAward className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">BSc. Software Engineering</h3>
                  <p className="text-primary">Makerere University</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <FiCalendar className="h-4 w-4" />
                <span>Graduated</span>
              </div>

              <p className="text-muted-foreground">
                I completed my Bachelor of Science in Software Engineering at Makerere University, where I gained a
                strong foundation in software development principles, algorithms, data structures, and various
                programming languages. The program equipped me with both theoretical knowledge and practical skills
                needed for a career in software development.
              </p>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-2">Key Areas of Study</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Software Design & Architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Web Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Database Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Algorithms & Data Structures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Software Testing & Quality Assurance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Project Management</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

