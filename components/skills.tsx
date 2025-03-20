"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FiLayout, FiServer } from "react-icons/fi"
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si"

interface Skill {
  name: string
  icon: React.ReactNode
  level: number
}

interface SkillCardProps {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const frontendSkills = [
  { name: "JavaScript", icon: <SiJavascript className="h-5 w-5" />, level: 85 },
  { name: "React", icon: <SiReact className="h-5 w-5" />, level: 80 },
  { name: "Next.js 14", icon: <SiNextdotjs className="h-5 w-5" />, level: 75 },
  { name: "Bootstrap 5", icon: <SiBootstrap className="h-5 w-5" />, level: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-5 w-5" />, level: 85 },
]

const backendSkills = [
  { name: "PHP", icon: <SiPhp className="h-5 w-5" />, level: 80 },
  { name: "Laravel", icon: <SiLaravel className="h-5 w-5" />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb className="h-5 w-5" />, level: 70 },
  { name: "MySQL", icon: <SiMysql className="h-5 w-5" />, level: 80 },
]

const SkillCard = ({ title, icon, skills }: SkillCardProps) => (
  <Card className="h-full">
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-2 rounded-full">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-6">
        {skills.map((skill, index: number) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {skill.icon}
                <span className="font-medium">{skill.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SkillCard
              title="Frontend Development"
              icon={<FiLayout className="h-5 w-5 text-primary" />}
              skills={frontendSkills}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SkillCard
              title="Backend Development"
              icon={<FiServer className="h-5 w-5 text-primary" />}
              skills={backendSkills}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}




