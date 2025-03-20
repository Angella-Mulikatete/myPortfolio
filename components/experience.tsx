"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi"

const experiences = [
  {
    title: "Web3 Student",
    company: "Web3Bridge",
    location: "Nigeria (Remote)",
    period: "August 2024 - November 2024",
    description:
      "Collaborated with the lead Developer to develop the MCI Academy website while supporting on the maintenance of other media platforms.",
  },
  {
    title: "Software Developer Intern",
    company: "Media Challenge Initiative",
    location: "Kabalagala, Kampala",
    period: "February 2024 - August 2024",
    description:
      "Collaborated with the lead Developer to develop the MCI Academy website while supporting on the maintenance of other media platforms.",
  },
  {
    title: "Software Developer Intern",
    company: "Pegasus Technologies",
    location: "Ntinda, Kampala",
    period: "August 2023 - September 2023",
    description: "Supported on building the WENRECO api, SMS api using C#.",
  },
  {
    title: "Software Developer Intern",
    company: "Boosted Technologies",
    location: "Nabweru, Kampala",
    period: "July 2022 - September 2022",
    description:
      "Worked with cross-functional teams as an administrator to install certificates, supported the development of the punch time system, and supported the development of the new company framework called BPL.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've worked with.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-card shadow-sm shadow-primary/5 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <FiBriefcase className="h-4 w-4 text-primary" />
              </div>

              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{experience.title}</h3>
                      <p className="text-primary font-medium">{experience.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                      <FiCalendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <FiMapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>

                  <p className="text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

